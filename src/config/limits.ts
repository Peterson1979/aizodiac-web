/**
 * AI Zodiac - Cost Protection & Generation Limits Configuration
 * 
 * IMPORTANT ARCHITECTURAL NOTE:
 * Cloudflare's account-level Workers AI free allocation and Groq's account tier limits
 * are the authoritative boundaries. Application-level limits defined here serve as
 * conservative circuit-breakers to safeguard against unintended API calls or runaway loops.
 * They do NOT guarantee that Cloudflare account limits will not be reached.
 * 
 * No neuron pricing or cost values are assumed or hardcoded.
 */

export interface CostProtectionLimits {
  /** Conservative application-level daily limit for LLM text generation requests */
  readonly dailyTextLimit: number;
  /** Conservative application-level monthly limit for LLM text generation requests */
  readonly monthlyTextLimit: number;
  /** Conservative application-level daily limit for image generation calls (FLUX / Workers AI) */
  readonly dailyImageLimit: number;
  /** Conservative application-level monthly limit for image generation calls (FLUX / Workers AI) */
  readonly monthlyImageLimit: number;
  /** Maximum token length permitted for single article generation */
  readonly maxArticleLengthTokens: number;
}

function parseEnvInt(val: string | undefined, fallback: number): number {
  if (!val) return fallback;
  const parsed = parseInt(val, 10);
  return Number.isNaN(parsed) || parsed < 0 ? fallback : parsed;
}

export function getCostProtectionLimits(): CostProtectionLimits {
  return {
    dailyTextLimit: parseEnvInt(import.meta.env.AI_DAILY_TEXT_LIMIT, 50),
    monthlyTextLimit: parseEnvInt(import.meta.env.AI_MONTHLY_TEXT_LIMIT, 1000),
    dailyImageLimit: parseEnvInt(import.meta.env.AI_DAILY_IMAGE_LIMIT, 20),
    monthlyImageLimit: parseEnvInt(import.meta.env.AI_MONTHLY_IMAGE_LIMIT, 400),
    maxArticleLengthTokens: parseEnvInt(import.meta.env.AI_MAX_ARTICLE_LENGTH_TOKENS, 3500),
  };
}

export class CostProtectionError extends Error {
  constructor(message: string, public readonly limitType: keyof CostProtectionLimits) {
    super(`[CostProtection] Limit exceeded for ${limitType}: ${message}`);
    this.name = 'CostProtectionError';
  }
}

export interface GenerationUsageTracker {
  getCurrentDailyTextCount(): Promise<number>;
  getCurrentMonthlyTextCount(): Promise<number>;
  getCurrentDailyImageCount(): Promise<number>;
  getCurrentMonthlyImageCount(): Promise<number>;
}

/**
 * Validates text generation boundaries before executing any AI request.
 * Fails safely by throwing a CostProtectionError if limits are breached.
 */
export async function assertTextGenerationAllowed(
  tracker?: GenerationUsageTracker,
  requestedTokens?: number
): Promise<void> {
  const limits = getCostProtectionLimits();

  if (requestedTokens && requestedTokens > limits.maxArticleLengthTokens) {
    throw new CostProtectionError(
      `Requested tokens (${requestedTokens}) exceeds max allowed (${limits.maxArticleLengthTokens})`,
      'maxArticleLengthTokens'
    );
  }

  if (tracker) {
    const dailyCount = await tracker.getCurrentDailyTextCount();
    if (dailyCount >= limits.dailyTextLimit) {
      throw new CostProtectionError(
        `Daily text generation limit reached (${dailyCount}/${limits.dailyTextLimit})`,
        'dailyTextLimit'
      );
    }

    const monthlyCount = await tracker.getCurrentMonthlyTextCount();
    if (monthlyCount >= limits.monthlyTextLimit) {
      throw new CostProtectionError(
        `Monthly text generation limit reached (${monthlyCount}/${limits.monthlyTextLimit})`,
        'monthlyTextLimit'
      );
    }
  }
}

/**
 * Validates image generation boundaries before dispatching image requests.
 */
export async function assertImageGenerationAllowed(tracker?: GenerationUsageTracker): Promise<void> {
  const limits = getCostProtectionLimits();

  if (tracker) {
    const dailyCount = await tracker.getCurrentDailyImageCount();
    if (dailyCount >= limits.dailyImageLimit) {
      throw new CostProtectionError(
        `Daily image generation limit reached (${dailyCount}/${limits.dailyImageLimit})`,
        'dailyImageLimit'
      );
    }

    const monthlyCount = await tracker.getCurrentMonthlyImageCount();
    if (monthlyCount >= limits.monthlyImageLimit) {
      throw new CostProtectionError(
        `Monthly image generation limit reached (${monthlyCount}/${limits.monthlyImageLimit})`,
        'monthlyImageLimit'
      );
    }
  }
}
