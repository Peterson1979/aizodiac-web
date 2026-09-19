/**
 * AI Zodiac - Cloudflare Workers AI (FLUX) Image Generation Abstraction
 * 
 * Target Image Model: `@cf/black-forest-labs/flux-1-schnell`
 * Native Worker Binding: `AI`
 * 
 * Provides an isolated image-generation interface targeting Cloudflare Workers AI
 * via native Worker binding with strict cost protection guards and non-retryable
 * quota error classification.
 */

import {
  assertImageGenerationAllowed,
  CostProtectionError,
  getDefaultUsageTracker,
  type GenerationUsageTracker,
} from '../../config/limits.ts';
import { getAIModelsConfig } from '../../config/ai.ts';

export interface ImageGenerationRequest {
  readonly prompt: string;
  readonly width?: number | undefined;
  readonly height?: number | undefined;
  readonly steps?: number | undefined;
  readonly seed?: number | undefined;
}

export interface ImageGenerationResponse {
  readonly success: boolean;
  readonly imageBase64?: string | undefined;
  readonly mimeType: string;
  readonly modelUsed: string;
  readonly error?: string | undefined;
  readonly isQuotaExceeded?: boolean | undefined;
  readonly isRetryable?: boolean | undefined;
}

export interface AiBindingLike {
  run(
    model: string,
    inputs: Record<string, unknown>
  ): Promise<ReadableStream | ArrayBuffer | { image?: string } | Response>;
}

export interface ImageGeneratorService {
  /**
   * Generates an image based on prompt and parameters while validating cost protection limits.
   */
  generateImage(
    request: ImageGenerationRequest,
    tracker?: GenerationUsageTracker
  ): Promise<ImageGenerationResponse>;
}

/**
 * Classifies whether an error from Workers AI represents a quota exhaustion
 * or payment required status, which must never be retried.
 */
export function isWorkersAIQuotaError(error: unknown): boolean {
  if (!error) return false;
  if (error instanceof CostProtectionError && error.isQuotaExceeded) return true;

  const message = error instanceof Error ? error.message : String(error);
  const lower = message.toLowerCase();

  // HTTP status codes
  if (lower.includes('402') || lower.includes('429')) return true;
  // Cloudflare Workers AI specific error codes (4006 = daily quota reached, 10014 = limit exceeded)
  if (lower.includes('4006') || lower.includes('10014')) return true;
  // Common error strings
  if (
    lower.includes('quota') ||
    lower.includes('rate limit') ||
    lower.includes('ratelimit') ||
    lower.includes('neuron') ||
    lower.includes('daily limit') ||
    lower.includes('insufficient credits') ||
    lower.includes('payment required') ||
    lower.includes('too many requests') ||
    lower.includes('limit exceeded')
  ) {
    return true;
  }
  return false;
}

export class CloudflareWorkersAIImageGenerator implements ImageGeneratorService {
  private readonly modelId: string;
  private readonly aiBinding: AiBindingLike | undefined;

  constructor(aiBinding?: AiBindingLike) {
    const aiConfig = getAIModelsConfig();
    this.modelId = aiConfig.workersAi.defaultImageModel;
    this.aiBinding = aiBinding;
  }

  async generateImage(
    request: ImageGenerationRequest,
    tracker?: GenerationUsageTracker
  ): Promise<ImageGenerationResponse> {
    const activeTracker = tracker ?? getDefaultUsageTracker();

    // 1. Guard with cost protection limits before making any API call
    try {
      await assertImageGenerationAllowed(activeTracker);
    } catch (err) {
      const isQuota = isWorkersAIQuotaError(err);
      const errorMessage = err instanceof Error ? err.message : String(err);
      return {
        success: false,
        mimeType: 'image/png',
        modelUsed: this.modelId,
        error: errorMessage,
        isQuotaExceeded: isQuota,
        isRetryable: false,
      };
    }

    // 2. Validate native AI binding
    if (!this.aiBinding) {
      console.warn(
        `[WorkersAIImageGenerator] Native Workers AI binding 'AI' is not attached in current environment. ` +
        `Image generation for model '${this.modelId}' skipped safely.`
      );
      return {
        success: false,
        mimeType: 'image/png',
        modelUsed: this.modelId,
        error: "Native Workers AI binding 'AI' not attached to current execution context.",
        isQuotaExceeded: false,
        isRetryable: false,
      };
    }

    try {
      const result = await this.aiBinding.run(this.modelId, {
        prompt: request.prompt,
        width: request.width ?? 1024,
        height: request.height ?? 1024,
        num_steps: request.steps ?? 4,
        seed: request.seed,
      });

      // Record successful generation in tracker
      if (activeTracker.recordImageGeneration) {
        try {
          await activeTracker.recordImageGeneration();
        } catch (trackerErr) {
          console.warn(`[WorkersAIImageGenerator] Failed to record usage: ${trackerErr}`);
        }
      }

      // Format response based on Workers AI return payload
      if (typeof result === 'object' && result !== null && 'image' in result && typeof (result as { image?: string }).image === 'string') {
        return {
          success: true,
          imageBase64: (result as { image: string }).image,
          mimeType: 'image/png',
          modelUsed: this.modelId,
          isQuotaExceeded: false,
          isRetryable: false,
        };
      }

      if (result instanceof ArrayBuffer) {
        const base64 = typeof Buffer !== 'undefined'
          ? Buffer.from(result).toString('base64')
          : btoa(String.fromCharCode(...new Uint8Array(result)));
        return {
          success: true,
          imageBase64: base64,
          mimeType: 'image/png',
          modelUsed: this.modelId,
          isQuotaExceeded: false,
          isRetryable: false,
        };
      }

      if (typeof Response !== 'undefined' && result instanceof Response) {
        const buffer = await result.arrayBuffer();
        const base64 = typeof Buffer !== 'undefined'
          ? Buffer.from(buffer).toString('base64')
          : btoa(String.fromCharCode(...new Uint8Array(buffer)));
        return {
          success: true,
          imageBase64: base64,
          mimeType: result.headers.get('content-type') || 'image/png',
          modelUsed: this.modelId,
          isQuotaExceeded: false,
          isRetryable: false,
        };
      }

      return {
        success: false,
        mimeType: 'image/png',
        modelUsed: this.modelId,
        error: 'Unexpected response format from Workers AI binding.',
        isQuotaExceeded: false,
        isRetryable: false,
      };
    } catch (err) {
      const isQuota = isWorkersAIQuotaError(err);
      const errorMessage = err instanceof Error ? err.message : String(err);
      return {
        success: false,
        mimeType: 'image/png',
        modelUsed: this.modelId,
        error: isQuota
          ? `Workers AI quota exhausted (non-retryable): ${errorMessage}`
          : `Workers AI image generation failed: ${errorMessage}`,
        isQuotaExceeded: isQuota,
        isRetryable: !isQuota, // Quota exhaustion is strictly non-retryable
      };
    }
  }
}

/**
 * Factory for creating the configured image generator service.
 */
export function createImageGeneratorService(aiBinding?: AiBindingLike): ImageGeneratorService {
  return new CloudflareWorkersAIImageGenerator(aiBinding);
}
