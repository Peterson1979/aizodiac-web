/**
 * AI Zodiac - AI Models & Provider Configuration
 */

export interface AIModelsConfig {
  readonly groq: {
    readonly defaultModel: string;
    readonly apiKey?: string | undefined;
  };
  readonly workersAi: {
    readonly defaultImageModel: string;
  };
}

export function getAIModelsConfig(): AIModelsConfig {
  return {
    groq: {
      defaultModel: import.meta.env.GROQ_MODEL || 'openai/gpt-oss-120b',
      apiKey: import.meta.env.GROQ_API_KEY || undefined,
    },
    workersAi: {
      defaultImageModel: import.meta.env.WORKERS_AI_IMAGE_MODEL || '@cf/black-forest-labs/flux-1-schnell',
    },
  };
}
