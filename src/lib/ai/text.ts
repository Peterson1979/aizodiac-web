/**
 * AI Zodiac - Groq Text Generation Provider Abstraction
 * 
 * Target Model: `openai/gpt-oss-120b` (or configured GROQ_MODEL)
 * 
 * Provides a clean interface for AI text generation with strict cost protection guards,
 * token length caps, and environment-driven credentials without third-party vendor lock-in.
 */

import { assertTextGenerationAllowed, type GenerationUsageTracker } from '@/config/limits';
import { getAIModelsConfig } from '@/config/ai';

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
    // 1. Enforce cost protection limits before making network calls
    await assertTextGenerationAllowed(tracker, request.maxTokens);

    // 2. Validate API key presence
    if (!this.apiKey) {
      console.warn(
        `[GroqTextGenerator] GROQ_API_KEY is not configured. Text generation for '${this.modelId}' skipped safely.`
      );
      return {
        success: false,
        modelUsed: this.modelId,
        error: 'GROQ_API_KEY environment variable is missing.',
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
        return {
          success: false,
          modelUsed: this.modelId,
          error: `Groq API HTTP ${response.status}: ${errText}`,
        };
      }

      interface GroqApiResponse {
        choices?: Array<{ message?: { content?: string } }>;
        usage?: { total_tokens?: number };
      }

      const data = (await response.json()) as GroqApiResponse;
      const content = data.choices?.[0]?.message?.content || '';

      return {
        success: true,
        text: content,
        modelUsed: this.modelId,
        totalTokens: data.usage?.total_tokens,
      };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      return {
        success: false,
        modelUsed: this.modelId,
        error: `Text generation failed: ${errorMessage}`,
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
