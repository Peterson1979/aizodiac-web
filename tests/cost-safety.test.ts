import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert/strict';

import {
  getCostProtectionLimits,
  assertTextGenerationAllowed,
  assertImageGenerationAllowed,
  CostProtectionError,
  InMemoryUsageTracker,
  setDefaultUsageTracker,
  type GenerationUsageTracker,
} from '../src/config/limits.ts';

import {
  CloudflareWorkersAIImageGenerator,
  isWorkersAIQuotaError,
  type AiBindingLike,
} from '../src/lib/ai/image.ts';

import {
  GroqTextGenerator,
  isGroqQuotaError,
} from '../src/lib/ai/text.ts';

import {
  R2MediaStorage,
  buildDeterministicMediaKey,
  type R2BucketLike,
  type R2ObjectLike,
} from '../src/lib/storage/r2.ts';

describe('AI Zodiac Cost-Safety & Protection Limits', () => {
  let tracker: InMemoryUsageTracker;

  beforeEach(() => {
    tracker = new InMemoryUsageTracker();
    setDefaultUsageTracker(tracker);
  });

  describe('Cost Protection Configuration & Defaults', () => {
    it('provides conservative default limits within Cloudflare free allocations', () => {
      const limits = getCostProtectionLimits();
      assert.ok(limits.dailyTextLimit <= 100, 'Daily text limit should be conservative');
      assert.ok(limits.dailyImageLimit <= 25, 'Daily image limit must remain within 10,000 Neuron limit (FLUX ~350 Neurons)');
      assert.ok(limits.monthlyImageLimit <= 800, 'Monthly image limit should be bounded');
      assert.ok(limits.maxArticleLengthTokens <= 8000, 'Max article tokens should be bounded');
    });
  });

  describe('Text Generation Limit Enforcement', () => {
    it('allows text generation within daily and monthly limits', async () => {
      tracker.setCounts({ dailyText: 10, monthlyText: 50 });
      await assert.doesNotReject(async () => {
        await assertTextGenerationAllowed(tracker, 1000);
      });
    });

    it('blocks text generation when token count exceeds max article tokens', async () => {
      await assert.rejects(
        async () => {
          await assertTextGenerationAllowed(tracker, 10000);
        },
        (err: Error) => {
          assert.ok(err instanceof CostProtectionError);
          assert.equal(err.limitType, 'maxArticleLengthTokens');
          assert.equal(err.isQuotaExceeded, true);
          assert.equal(err.isRetryable, false);
          return true;
        }
      );
    });

    it('blocks text generation when daily text limit is reached', async () => {
      const limits = getCostProtectionLimits();
      tracker.setCounts({ dailyText: limits.dailyTextLimit });

      await assert.rejects(
        async () => {
          await assertTextGenerationAllowed(tracker, 500);
        },
        (err: Error) => {
          assert.ok(err instanceof CostProtectionError);
          assert.equal(err.limitType, 'dailyTextLimit');
          assert.equal(err.isQuotaExceeded, true);
          assert.equal(err.isRetryable, false);
          return true;
        }
      );
    });

    it('blocks text generation when monthly text limit is reached', async () => {
      const limits = getCostProtectionLimits();
      tracker.setCounts({ dailyText: 0, monthlyText: limits.monthlyTextLimit });

      await assert.rejects(
        async () => {
          await assertTextGenerationAllowed(tracker, 500);
        },
        (err: Error) => {
          assert.ok(err instanceof CostProtectionError);
          assert.equal(err.limitType, 'monthlyTextLimit');
          assert.equal(err.isQuotaExceeded, true);
          return true;
        }
      );
    });
  });

  describe('Image Generation Limit Enforcement', () => {
    it('allows image generation when under daily and monthly limits', async () => {
      tracker.setCounts({ dailyImage: 5, monthlyImage: 50 });
      await assert.doesNotReject(async () => {
        await assertImageGenerationAllowed(tracker);
      });
    });

    it('blocks image generation when daily image limit is reached', async () => {
      const limits = getCostProtectionLimits();
      tracker.setCounts({ dailyImage: limits.dailyImageLimit });

      await assert.rejects(
        async () => {
          await assertImageGenerationAllowed(tracker);
        },
        (err: Error) => {
          assert.ok(err instanceof CostProtectionError);
          assert.equal(err.limitType, 'dailyImageLimit');
          assert.equal(err.isQuotaExceeded, true);
          assert.equal(err.isRetryable, false);
          return true;
        }
      );
    });

    it('blocks image generation when monthly image limit is reached', async () => {
      const limits = getCostProtectionLimits();
      tracker.setCounts({ dailyImage: 0, monthlyImage: limits.monthlyImageLimit });

      await assert.rejects(
        async () => {
          await assertImageGenerationAllowed(tracker);
        },
        (err: Error) => {
          assert.ok(err instanceof CostProtectionError);
          assert.equal(err.limitType, 'monthlyImageLimit');
          assert.equal(err.isQuotaExceeded, true);
          return true;
        }
      );
    });
  });

  describe('Usage Tracker Fail-Closed Safety', () => {
    it('fails closed (blocks execution) if tracker throws an error on text count', async () => {
      const brokenTracker: GenerationUsageTracker = {
        getCurrentDailyTextCount: async () => {
          throw new Error('Database / KV connection timed out');
        },
        getCurrentMonthlyTextCount: async () => 0,
        getCurrentDailyImageCount: async () => 0,
        getCurrentMonthlyImageCount: async () => 0,
      };

      await assert.rejects(
        async () => {
          await assertTextGenerationAllowed(brokenTracker);
        },
        (err: Error) => {
          assert.ok(err instanceof CostProtectionError);
          assert.equal(err.limitType, 'usageTracker');
          assert.equal(err.isQuotaExceeded, true);
          assert.equal(err.isRetryable, false);
          assert.match(err.message, /fail-closed/);
          return true;
        }
      );
    });

    it('fails closed (blocks execution) if tracker throws an error on image count', async () => {
      const brokenTracker: GenerationUsageTracker = {
        getCurrentDailyTextCount: async () => 0,
        getCurrentMonthlyTextCount: async () => 0,
        getCurrentDailyImageCount: async () => {
          throw new Error('R2/KV unavailable');
        },
        getCurrentMonthlyImageCount: async () => 0,
      };

      await assert.rejects(
        async () => {
          await assertImageGenerationAllowed(brokenTracker);
        },
        (err: Error) => {
          assert.ok(err instanceof CostProtectionError);
          assert.equal(err.limitType, 'usageTracker');
          assert.equal(err.isQuotaExceeded, true);
          assert.equal(err.isRetryable, false);
          assert.match(err.message, /fail-closed/);
          return true;
        }
      );
    });

    it('fails closed if tracker returns invalid NaN or negative count', async () => {
      const invalidTracker: GenerationUsageTracker = {
        getCurrentDailyTextCount: async () => NaN,
        getCurrentMonthlyTextCount: async () => 0,
        getCurrentDailyImageCount: async () => -5,
        getCurrentMonthlyImageCount: async () => 0,
      };

      await assert.rejects(async () => {
        await assertTextGenerationAllowed(invalidTracker);
      }, /fail-closed/);

      await assert.rejects(async () => {
        await assertImageGenerationAllowed(invalidTracker);
      }, /fail-closed/);
    });
  });

  describe('Workers AI Quota Exhaustion & Non-Retryable Error Classification', () => {
    it('correctly classifies HTTP 402, 429, and Cloudflare 4006 as quota exhaustion', () => {
      assert.equal(isWorkersAIQuotaError('HTTP 402: Payment Required'), true);
      assert.equal(isWorkersAIQuotaError('HTTP 429: Too Many Requests'), true);
      assert.equal(isWorkersAIQuotaError('Cloudflare error 4006: Daily free limit exceeded'), true);
      assert.equal(isWorkersAIQuotaError('Code 10014: Neuron allocation exhausted'), true);
      assert.equal(isWorkersAIQuotaError('Daily limit reached'), true);
      assert.equal(isWorkersAIQuotaError('General network timeout'), false);
    });

    it('returns isQuotaExceeded: true and isRetryable: false when Workers AI quota is exceeded', async () => {
      const mockAiBinding: AiBindingLike = {
        run: async () => {
          throw new Error('Cloudflare error 4006: You have exceeded your daily free limit of 10,000 neurons.');
        },
      };

      const generator = new CloudflareWorkersAIImageGenerator(mockAiBinding);
      const response = await generator.generateImage({ prompt: 'Zodiac illustration' }, tracker);

      assert.equal(response.success, false);
      assert.equal(response.isQuotaExceeded, true);
      assert.equal(response.isRetryable, false);
      assert.match(response.error ?? '', /non-retryable/i);
    });

    it('returns isQuotaExceeded: true and isRetryable: false when application cost limit is breached', async () => {
      const limits = getCostProtectionLimits();
      tracker.setCounts({ dailyImage: limits.dailyImageLimit });

      const mockAiBinding: AiBindingLike = {
        run: async () => ({ image: 'base64...' }),
      };

      const generator = new CloudflareWorkersAIImageGenerator(mockAiBinding);
      const response = await generator.generateImage({ prompt: 'Aries ram constellation' }, tracker);

      assert.equal(response.success, false);
      assert.equal(response.isQuotaExceeded, true);
      assert.equal(response.isRetryable, false);
      assert.match(response.error ?? '', /Daily image generation limit reached/);
    });

    it('safely handles missing AI binding without unhandled exceptions', async () => {
      const generator = new CloudflareWorkersAIImageGenerator(undefined);
      const response = await generator.generateImage({ prompt: 'Taurus bull' }, tracker);

      assert.equal(response.success, false);
      assert.equal(response.isQuotaExceeded, false);
      assert.equal(response.isRetryable, false);
      assert.match(response.error ?? '', /not attached/i);
    });
  });

  describe('Groq Text Generation Error & Quota Classification', () => {
    it('correctly classifies Groq quota errors', () => {
      assert.equal(isGroqQuotaError(429), true);
      assert.equal(isGroqQuotaError(402), true);
      assert.equal(isGroqQuotaError('rate_limit_exceeded: TPM limit reached'), true);
      assert.equal(isGroqQuotaError('insufficient_quota'), true);
      assert.equal(isGroqQuotaError(500), false);
    });

    it('returns isQuotaExceeded: true and isRetryable: false when text limit is reached', async () => {
      const limits = getCostProtectionLimits();
      tracker.setCounts({ dailyText: limits.dailyTextLimit });

      const generator = new GroqTextGenerator();
      const response = await generator.generateText(
        { messages: [{ role: 'user', content: 'Generate horoscope' }] },
        tracker
      );

      assert.equal(response.success, false);
      assert.equal(response.isQuotaExceeded, true);
      assert.equal(response.isRetryable, false);
      assert.match(response.error ?? '', /Daily text generation limit reached/);
    });
  });

  describe('Cloudflare R2 Storage Hardening & Idempotency', () => {
    it('generates normalized, deterministic media keys', () => {
      const key1 = buildDeterministicMediaKey('articles', 'Zodiac Compatibility 2026', 'webp');
      assert.equal(key1, 'articles/zodiac-compatibility-2026.webp');

      const key2 = buildDeterministicMediaKey('/social/cards/', 'Aries-Daily-Horoscope', '.jpg');
      assert.equal(key2, 'social/cards/aries-daily-horoscope.jpg');

      const key3 = buildDeterministicMediaKey('', 'general-icon', 'png');
      assert.equal(key3, 'general-icon.png');
    });

    it('skips redundant upload when asset already exists in R2 (uploadMediaIdempotent)', async () => {
      let putCallCount = 0;
      let headCallCount = 0;

      const mockBucket: R2BucketLike = {
        put: async () => {
          putCallCount += 1;
          return { key: 'articles/test.webp', size: 1024 };
        },
        get: async () => null,
        head: async (key: string): Promise<R2ObjectLike | null> => {
          headCallCount += 1;
          if (key === 'articles/existing-asset.webp') {
            return { key, size: 2048 };
          }
          return null;
        },
        delete: async () => {},
      };

      const storage = new R2MediaStorage(mockBucket, {
        bucketName: 'aizodiac-assets',
        publicBaseUrl: 'https://assets.aizodiac.workers.dev',
      });

      // 1. Upload existing asset -> should skip PUT
      const result1 = await storage.uploadMediaIdempotent(
        'articles/existing-asset.webp',
        new Uint8Array([1, 2, 3]),
        { contentType: 'image/webp' }
      );
      assert.equal(result1.uploaded, false, 'Should skip upload for existing key');
      assert.equal(result1.url, 'https://assets.aizodiac.workers.dev/articles/existing-asset.webp');
      assert.equal(headCallCount, 1);
      assert.equal(putCallCount, 0, 'PUT should not be called when asset exists');

      // 2. Upload new asset -> should execute PUT
      const result2 = await storage.uploadMediaIdempotent(
        'articles/new-asset.webp',
        new Uint8Array([4, 5, 6]),
        { contentType: 'image/webp' }
      );
      assert.equal(result2.uploaded, true, 'Should execute upload for new key');
      assert.equal(result2.url, 'https://assets.aizodiac.workers.dev/articles/new-asset.webp');
      assert.equal(headCallCount, 2);
      assert.equal(putCallCount, 1, 'PUT should be called exactly once for new asset');
    });

    it('safely handles missing R2 binding without crashing', async () => {
      const storage = new R2MediaStorage(undefined, {
        bucketName: 'aizodiac-assets',
        publicBaseUrl: 'https://assets.aizodiac.workers.dev',
      });

      const exists = await storage.exists('articles/test.webp');
      assert.equal(exists, false);

      const url = await storage.uploadMedia('articles/test.webp', new Uint8Array([1]), { contentType: 'image/webp' });
      assert.equal(url, 'https://assets.aizodiac.workers.dev/articles/test.webp');

      const deleted = await storage.deleteMedia('articles/test.webp');
      assert.equal(deleted, false);
    });
  });
});
