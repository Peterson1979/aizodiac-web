/**
 * AI Zodiac - Cloudflare Workers AI (FLUX) Image Generation Abstraction
 * 
 * Target Image Model: `@cf/black-forest-labs/flux-1-schnell`
 * Native Worker Binding: `AI`
 * 
 * Provides an isolated image-generation interface targeting Cloudflare Workers AI
 * via native Worker binding with strict cost protection guards.
 */

import { assertImageGenerationAllowed, type GenerationUsageTracker } from '@/config/limits';
import { getAIModelsConfig } from '@/config/ai';

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
    // 1. Guard with cost protection limits before making any API call
    await assertImageGenerationAllowed(tracker);

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

      // Format response based on Workers AI return payload
      if (typeof result === 'object' && result !== null && 'image' in result && typeof (result as { image?: string }).image === 'string') {
        return {
          success: true,
          imageBase64: (result as { image: string }).image,
          mimeType: 'image/png',
          modelUsed: this.modelId,
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
        };
      }

      return {
        success: false,
        mimeType: 'image/png',
        modelUsed: this.modelId,
        error: 'Unexpected response format from Workers AI binding.',
      };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      return {
        success: false,
        mimeType: 'image/png',
        modelUsed: this.modelId,
        error: `Workers AI image generation failed: ${errorMessage}`,
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
