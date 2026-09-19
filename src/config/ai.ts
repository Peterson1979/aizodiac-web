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

function getEnvVar(key: string): string | undefined {
  if (typeof process !== 'undefined' && process.env && process.env[key] !== undefined) {
    return process.env[key];
  }
  if (typeof import.meta !== 'undefined' && import.meta.env && (import.meta.env as Record<string, string>)[key] !== undefined) {
    return (import.meta.env as Record<string, string>)[key];
  }
  return undefined;
}

export function getAIModelsConfig(): AIModelsConfig {
  return {
    groq: {
      defaultModel: getEnvVar('GROQ_MODEL') || 'openai/gpt-oss-120b',
      apiKey: getEnvVar('GROQ_API_KEY') || undefined,
    },
    workersAi: {
      defaultImageModel: getEnvVar('WORKERS_AI_IMAGE_MODEL') || '@cf/black-forest-labs/flux-1-schnell',
    },
  };
}
