/**
 * AI Zodiac - Groq Text Generation Provider Abstraction
 * 
 * Target Model: `openai/gpt-oss-120b` (or configured GROQ_MODEL)
 * 
 * Provides a clean interface for AI text generation with strict cost protection guards,
 * token length caps, fail-closed limit enforcement, and non-retryable quota handling.
 */

import {
  assertTextGenerationAllowed,
  CostProtectionError,
  getDefaultUsageTracker,
  type GenerationUsageTracker,
} from '../../config/limits.ts';
import { getAIModelsConfig } from '../../config/ai.ts';

export interface TextPromptMessage {
  readonly role: 'system' | 'user' | 'assistant';
  readonly content: string;
}

export interface TextGenerationRequest {
  readonly messages: readonly TextPromptMessage[];
  readonly maxTokens?: number;
  readonly temperature?: number;
  readonly topP?: number;
}

export interface TextGenerationResponse {
  readonly success: boolean;
  readonly text?: string | undefined;
  readonly modelUsed: string;
  readonly totalTokens?: number | undefined;
  readonly error?: string | undefined;
  readonly isQuotaExceeded?: boolean | undefined;
  readonly isRetryable?: boolean | undefined;
}

export interface TextGeneratorService {
  /**
   * Generates text completions using Groq API while enforcing cost guards.
   */
  generateText(
    request: TextGenerationRequest,
    tracker?: GenerationUsageTracker
  ): Promise<TextGenerationResponse>;
}

export function isGroqQuotaError(statusOrMessage: number | string): boolean {
  if (typeof statusOrMessage === 'number') {
    return statusOrMessage === 402 || statusOrMessage === 429;
  }
  const lower = String(statusOrMessage).toLowerCase();
  return (
    lower.includes('402') ||
    lower.includes('429') ||
    lower.includes('rate_limit') ||
    lower.includes('quota') ||
    lower.includes('tokens per minute') ||
    lower.includes('requests per day') ||
    lower.includes('insufficient_quota') ||
    lower.includes('too many requests')
  );
}

export class GroqTextGenerator implements TextGeneratorService {
  private readonly modelId: string;
  private readonly apiKey: string | undefined;

  constructor() {
    const aiConfig = getAIModelsConfig();
    this.modelId = aiConfig.groq.defaultModel;
    this.apiKey = aiConfig.groq.apiKey;
  }

  async generateText(
    request: TextGenerationRequest,
    tracker?: GenerationUsageTracker
  ): Promise<TextGenerationResponse> {
    const activeTracker = tracker ?? getDefaultUsageTracker();

    // 1. Enforce cost protection limits before making network calls
    try {
      await assertTextGenerationAllowed(activeTracker, request.maxTokens);
    } catch (err) {
      const isQuota = err instanceof CostProtectionError && err.isQuotaExceeded;
      const errorMessage = err instanceof Error ? err.message : String(err);
      return {
        success: false,
        modelUsed: this.modelId,
        error: errorMessage,
        isQuotaExceeded: isQuota,
        isRetryable: false,
      };
    }

    // 2. Validate API key presence
    if (!this.apiKey) {
      console.warn(
        `[GroqTextGenerator] GROQ_API_KEY is not configured. Text generation for '${this.modelId}' skipped safely.`
      );
      return {
        success: false,
        modelUsed: this.modelId,
        error: 'GROQ_API_KEY environment variable is missing.',
        isQuotaExceeded: false,
        isRetryable: false,
      };
    }

    // 3. Dispatch to Groq Chat Completions API
    const endpoint = 'https://api.groq.com/openai/v1/chat/completions';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: this.modelId,
          messages: request.messages,
          max_tokens: request.maxTokens ?? 2048,
          temperature: request.temperature ?? 0.7,
          top_p: request.topP ?? 0.9,
        }),
      });

      if (!response.ok) {
        const errText = await response.text();
        const isQuota = isGroqQuotaError(response.status) || isGroqQuotaError(errText);
        return {
          success: false,
          modelUsed: this.modelId,
          error: `Groq API HTTP ${response.status}: ${errText}`,
          isQuotaExceeded: isQuota,
          isRetryable: !isQuota && response.status >= 500,
        };
      }

      interface GroqApiResponse {
        choices?: Array<{ message?: { content?: string } }>;
        usage?: { total_tokens?: number };
      }

      const data = (await response.json()) as GroqApiResponse;
      const content = data.choices?.[0]?.message?.content || '';

      // Record successful usage in tracker
      if (activeTracker.recordTextGeneration) {
        try {
          await activeTracker.recordTextGeneration(data.usage?.total_tokens);
        } catch (trackerErr) {
          console.warn(`[GroqTextGenerator] Failed to record usage: ${trackerErr}`);
        }
      }

      return {
        success: true,
        text: content,
        modelUsed: this.modelId,
        totalTokens: data.usage?.total_tokens,
        isQuotaExceeded: false,
        isRetryable: false,
      };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      const isQuota = isGroqQuotaError(errorMessage);
      return {
        success: false,
        modelUsed: this.modelId,
        error: `Text generation failed: ${errorMessage}`,
        isQuotaExceeded: isQuota,
        isRetryable: !isQuota,
      };
    }
  }
}

/**
 * Factory for creating the configured text generator service.
 */
export function createTextGeneratorService(): TextGeneratorService {
  return new GroqTextGenerator();
}
