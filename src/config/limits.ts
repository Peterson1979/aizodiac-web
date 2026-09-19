/**
 * AI Zodiac - Cost Protection & Generation Limits Configuration
 * 
 * IMPORTANT ARCHITECTURAL NOTE:
 * Cloudflare's account-level Workers AI free allocation (10,000 Neurons/day)
 * and Groq's account tier limits are the authoritative boundaries.
 * Application-level limits defined here serve as conservative circuit-breakers
 * to safeguard against unintended API calls, infinite retry loops, or runaway scripts.
 * 
 * Fail-closed design: If usage counters cannot be determined (tracker failure or NaN),
 * generation is strictly blocked.
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

function parseEnvInt(val: string | undefined, fallback: number, min = 1, max = 100000): number {
  if (!val) return fallback;
  const parsed = parseInt(val, 10);
  if (Number.isNaN(parsed) || parsed < min) return fallback;
  return Math.min(parsed, max);
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

export function getCostProtectionLimits(): CostProtectionLimits {
  return {
    // Text limits (supporting both AI_DAILY_TEXT_LIMIT and MAX_DAILY_AI_OPERATIONS)
    dailyTextLimit: parseEnvInt(
      getEnvVar('AI_DAILY_TEXT_LIMIT') || getEnvVar('MAX_DAILY_AI_OPERATIONS'),
      50,
      1,
      1000
    ),
    monthlyTextLimit: parseEnvInt(
      getEnvVar('AI_MONTHLY_TEXT_LIMIT') || getEnvVar('MAX_MONTHLY_AI_OPERATIONS'),
      1000,
      1,
      50000
    ),
    // Image limits (supporting both AI_DAILY_IMAGE_LIMIT and MAX_DAILY_IMAGE_GENERATIONS)
    // Cloudflare Free Tier has 10k Neurons/day. FLUX-1-schnell 4-step is ~350 Neurons/image.
    // Daily cap of 20 images = ~7,000 Neurons max.
    dailyImageLimit: parseEnvInt(
      getEnvVar('AI_DAILY_IMAGE_LIMIT') || getEnvVar('MAX_DAILY_IMAGE_GENERATIONS'),
      20,
      1,
      25
    ),
    monthlyImageLimit: parseEnvInt(
      getEnvVar('AI_MONTHLY_IMAGE_LIMIT') || getEnvVar('MAX_MONTHLY_IMAGE_GENERATIONS'),
      400,
      1,
      800
    ),
    maxArticleLengthTokens: parseEnvInt(
      getEnvVar('AI_MAX_ARTICLE_LENGTH_TOKENS'),
      3500,
      100,
      8000
    ),
  };
}

export type CostLimitType = keyof CostProtectionLimits | 'usageTracker' | 'quotaExhausted';

export class CostProtectionError extends Error {
  public readonly limitType: CostLimitType;
  public readonly isQuotaExceeded: boolean;
  public readonly isRetryable: boolean;

  constructor(
    message: string,
    limitType: CostLimitType,
    isQuotaExceeded = true,
    isRetryable = false
  ) {
    super(`[CostProtection] ${message}`);
    this.name = 'CostProtectionError';
    this.limitType = limitType;
    this.isQuotaExceeded = isQuotaExceeded;
    this.isRetryable = isRetryable;
  }
}

export interface GenerationUsageTracker {
  getCurrentDailyTextCount(): Promise<number>;
  getCurrentMonthlyTextCount(): Promise<number>;
  getCurrentDailyImageCount(): Promise<number>;
  getCurrentMonthlyImageCount(): Promise<number>;
  recordTextGeneration?(tokens?: number): Promise<void>;
  recordImageGeneration?(): Promise<void>;
}

/**
 * Standard in-memory tracker implementation for process-level safety
 * and testing.
 */
export class InMemoryUsageTracker implements GenerationUsageTracker {
  private dailyTextCount = 0;
  private monthlyTextCount = 0;
  private dailyImageCount = 0;
  private monthlyImageCount = 0;

  constructor(initialCounts?: {
    dailyText?: number;
    monthlyText?: number;
    dailyImage?: number;
    monthlyImage?: number;
  }) {
    if (initialCounts) {
      this.dailyTextCount = initialCounts.dailyText ?? 0;
      this.monthlyTextCount = initialCounts.monthlyText ?? 0;
      this.dailyImageCount = initialCounts.dailyImage ?? 0;
      this.monthlyImageCount = initialCounts.monthlyImage ?? 0;
    }
  }

  async getCurrentDailyTextCount(): Promise<number> {
    return this.dailyTextCount;
  }

  async getCurrentMonthlyTextCount(): Promise<number> {
    return this.monthlyTextCount;
  }

  async getCurrentDailyImageCount(): Promise<number> {
    return this.dailyImageCount;
  }

  async getCurrentMonthlyImageCount(): Promise<number> {
    return this.monthlyImageCount;
  }

  async recordTextGeneration(_tokens?: number): Promise<void> {
    this.dailyTextCount += 1;
    this.monthlyTextCount += 1;
  }

  async recordImageGeneration(): Promise<void> {
    this.dailyImageCount += 1;
    this.monthlyImageCount += 1;
  }

  setCounts(counts: {
    dailyText?: number;
    monthlyText?: number;
    dailyImage?: number;
    monthlyImage?: number;
  }): void {
    if (counts.dailyText !== undefined) this.dailyTextCount = counts.dailyText;
    if (counts.monthlyText !== undefined) this.monthlyTextCount = counts.monthlyText;
    if (counts.dailyImage !== undefined) this.dailyImageCount = counts.dailyImage;
    if (counts.monthlyImage !== undefined) this.monthlyImageCount = counts.monthlyImage;
  }

  reset(): void {
    this.dailyTextCount = 0;
    this.monthlyTextCount = 0;
    this.dailyImageCount = 0;
    this.monthlyImageCount = 0;
  }
}

let defaultTrackerInstance: GenerationUsageTracker = new InMemoryUsageTracker();

export function getDefaultUsageTracker(): GenerationUsageTracker {
  return defaultTrackerInstance;
}

export function setDefaultUsageTracker(tracker: GenerationUsageTracker): void {
  defaultTrackerInstance = tracker;
}

/**
 * Validates text generation boundaries before executing any AI request.
 * Fails safely (fail-closed) by throwing a CostProtectionError if limits are breached
 * or if tracker count retrieval fails.
 */
export async function assertTextGenerationAllowed(
  tracker?: GenerationUsageTracker,
  requestedTokens?: number
): Promise<void> {
  const limits = getCostProtectionLimits();

  if (requestedTokens && requestedTokens > limits.maxArticleLengthTokens) {
    throw new CostProtectionError(
      `Requested tokens (${requestedTokens}) exceeds max allowed (${limits.maxArticleLengthTokens})`,
      'maxArticleLengthTokens',
      true,
      false
    );
  }

  const activeTracker = tracker ?? getDefaultUsageTracker();

  let dailyCount: number;
  try {
    dailyCount = await activeTracker.getCurrentDailyTextCount();
  } catch (err) {
    throw new CostProtectionError(
      `Failed to retrieve daily text count (fail-closed): ${err instanceof Error ? err.message : String(err)}`,
      'usageTracker',
      true,
      false
    );
  }

  if (Number.isNaN(dailyCount) || dailyCount < 0) {
    throw new CostProtectionError(
      `Invalid daily text count '${dailyCount}' returned from tracker (fail-closed)`,
      'usageTracker',
      true,
      false
    );
  }

  if (dailyCount >= limits.dailyTextLimit) {
    throw new CostProtectionError(
      `Daily text generation limit reached (${dailyCount}/${limits.dailyTextLimit})`,
      'dailyTextLimit',
      true,
      false
    );
  }

  let monthlyCount: number;
  try {
    monthlyCount = await activeTracker.getCurrentMonthlyTextCount();
  } catch (err) {
    throw new CostProtectionError(
      `Failed to retrieve monthly text count (fail-closed): ${err instanceof Error ? err.message : String(err)}`,
      'usageTracker',
      true,
      false
    );
  }

  if (Number.isNaN(monthlyCount) || monthlyCount < 0) {
    throw new CostProtectionError(
      `Invalid monthly text count '${monthlyCount}' returned from tracker (fail-closed)`,
      'usageTracker',
      true,
      false
    );
  }

  if (monthlyCount >= limits.monthlyTextLimit) {
    throw new CostProtectionError(
      `Monthly text generation limit reached (${monthlyCount}/${limits.monthlyTextLimit})`,
      'monthlyTextLimit',
      true,
      false
    );
  }
}

/**
 * Validates image generation boundaries before dispatching image requests.
 * Fails safely (fail-closed) by throwing a CostProtectionError if limits are breached
 * or if tracker count retrieval fails.
 */
export async function assertImageGenerationAllowed(tracker?: GenerationUsageTracker): Promise<void> {
  const limits = getCostProtectionLimits();
  const activeTracker = tracker ?? getDefaultUsageTracker();

  let dailyCount: number;
  try {
    dailyCount = await activeTracker.getCurrentDailyImageCount();
  } catch (err) {
    throw new CostProtectionError(
      `Failed to retrieve daily image count (fail-closed): ${err instanceof Error ? err.message : String(err)}`,
      'usageTracker',
      true,
      false
    );
  }

  if (Number.isNaN(dailyCount) || dailyCount < 0) {
    throw new CostProtectionError(
      `Invalid daily image count '${dailyCount}' returned from tracker (fail-closed)`,
      'usageTracker',
      true,
      false
    );
  }

  if (dailyCount >= limits.dailyImageLimit) {
    throw new CostProtectionError(
      `Daily image generation limit reached (${dailyCount}/${limits.dailyImageLimit})`,
      'dailyImageLimit',
      true,
      false
    );
  }

  let monthlyCount: number;
  try {
    monthlyCount = await activeTracker.getCurrentMonthlyImageCount();
  } catch (err) {
    throw new CostProtectionError(
      `Failed to retrieve monthly image count (fail-closed): ${err instanceof Error ? err.message : String(err)}`,
      'usageTracker',
      true,
      false
    );
  }

  if (Number.isNaN(monthlyCount) || monthlyCount < 0) {
    throw new CostProtectionError(
      `Invalid monthly image count '${monthlyCount}' returned from tracker (fail-closed)`,
      'usageTracker',
      true,
      false
    );
  }

  if (monthlyCount >= limits.monthlyImageLimit) {
    throw new CostProtectionError(
      `Monthly image generation limit reached (${monthlyCount}/${limits.monthlyImageLimit})`,
      'monthlyImageLimit',
      true,
      false
    );
  }
}
