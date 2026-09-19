/**
 * AI Zodiac - Cloudflare R2 Media Storage Abstraction
 * 
 * Target Bucket: `aizodiac-assets` (Native Worker Binding: `MEDIA_BUCKET`)
 * 
 * Provides a decoupled media storage interface for uploading, resolving, and
 * managing website assets via native Cloudflare Worker R2Bucket binding with
 * deterministic key helpers and idempotent upload safeguards.
 */

export interface MediaUploadOptions {
  readonly contentType: string;
  readonly cacheControl?: string | undefined;
  readonly customMetadata?: Record<string, string> | undefined;
}

export interface R2ObjectLike {
  readonly key: string;
  readonly size: number;
  readonly httpMetadata?: {
    contentType?: string | undefined;
  } | undefined;
}

export interface R2BucketLike {
  put(
    key: string,
    value: ReadableStream | ArrayBuffer | ArrayBufferView | string | Blob | null,
    options?: {
      httpMetadata?: { contentType?: string | undefined; cacheControl?: string | undefined } | undefined;
      customMetadata?: Record<string, string> | undefined;
    }
  ): Promise<R2ObjectLike | null>;
  get(key: string): Promise<{ body: ReadableStream } | null>;
  head(key: string): Promise<R2ObjectLike | null>;
  delete(keys: string | string[]): Promise<void>;
}

export interface IdempotentUploadResult {
  readonly url: string;
  readonly uploaded: boolean;
  readonly error?: string | undefined;
}

export interface MediaStorageService {
  /**
   * Uploads a media asset and returns its canonical public URL.
   */
  uploadMedia(key: string, data: Uint8Array | ArrayBuffer | Blob, options: MediaUploadOptions): Promise<string>;

  /**
   * Uploads a media asset idempotently, checking whether the asset key exists first.
   * If the asset exists, avoids redundant Class A write operations.
   */
  uploadMediaIdempotent(
    key: string,
    data: Uint8Array | ArrayBuffer | Blob,
    options: MediaUploadOptions
  ): Promise<IdempotentUploadResult>;

  /**
   * Generates or resolves the public URL for a given asset key.
   */
  getPublicUrl(key: string): string;

  /**
   * Checks whether a media key exists in the storage bucket.
   */
  exists(key: string): Promise<boolean>;

  /**
   * Deletes a media asset by key.
   */
  deleteMedia(key: string): Promise<boolean>;
}

export interface R2Config {
  readonly bucketName: string;
  readonly publicBaseUrl: string;
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

export function getR2Config(): R2Config {
  return {
    bucketName: getEnvVar('R2_BUCKET_NAME') || 'aizodiac-assets',
    publicBaseUrl: (getEnvVar('R2_PUBLIC_BASE_URL') || 'https://assets.aizodiac.workers.dev').replace(/\/+$/, ''),
  };
}

/**
 * Builds a normalized, deterministic R2 object key from prefix, identifier/slug, and extension.
 * Ensures consistent naming without illegal characters or directory traversal risk.
 */
export function buildDeterministicMediaKey(prefix: string, identifier: string, extension = 'webp'): string {
  const cleanPrefix = prefix.replace(/^\/+|\/+$/g, '').toLowerCase();
  const cleanIdentifier = identifier
    .replace(/^\/+|\/+$/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9_-]/g, '-');
  const cleanExt = extension.replace(/^\./, '').toLowerCase();
  return cleanPrefix ? `${cleanPrefix}/${cleanIdentifier}.${cleanExt}` : `${cleanIdentifier}.${cleanExt}`;
}

/**
 * Cloudflare R2 Storage Service Implementation.
 * 
 * Uses native Worker `MEDIA_BUCKET` R2 binding with graceful local fallback
 * and idempotent upload protection.
 */
export class R2MediaStorage implements MediaStorageService {
  private readonly config: R2Config;
  private readonly bucket: R2BucketLike | undefined;

  constructor(bucket?: R2BucketLike, config: R2Config = getR2Config()) {
    this.bucket = bucket;
    this.config = config;
  }

  getPublicUrl(key: string): string {
    const cleanKey = key.replace(/^\/+/, '');
    return `${this.config.publicBaseUrl}/${cleanKey}`;
  }

  async uploadMedia(
    key: string,
    data: Uint8Array | ArrayBuffer | Blob,
    options: MediaUploadOptions
  ): Promise<string> {
    const cleanKey = key.replace(/^\/+/, '');
    if (!cleanKey) {
      throw new Error('[R2MediaStorage] Media key cannot be empty.');
    }

    if (this.bucket) {
      await this.bucket.put(cleanKey, data, {
        httpMetadata: {
          contentType: options.contentType,
          cacheControl: options.cacheControl,
        },
        customMetadata: options.customMetadata,
      });
      return this.getPublicUrl(cleanKey);
    }

    // In local development without native binding, degrade safely
    console.warn(
      `[R2MediaStorage] Native R2 binding 'MEDIA_BUCKET' not attached in current runtime. ` +
      `Media upload skipped for '${cleanKey}'. Target bucket: '${this.config.bucketName}'.`
    );
    return this.getPublicUrl(cleanKey);
  }

  async uploadMediaIdempotent(
    key: string,
    data: Uint8Array | ArrayBuffer | Blob,
    options: MediaUploadOptions
  ): Promise<IdempotentUploadResult> {
    const cleanKey = key.replace(/^\/+/, '');
    if (!cleanKey) {
      return { url: '', uploaded: false, error: 'Invalid or empty media key.' };
    }

    // 1. Idempotency check: if the asset already exists in R2, skip the upload
    if (this.bucket) {
      try {
        const alreadyExists = await this.exists(cleanKey);
        if (alreadyExists) {
          return {
            url: this.getPublicUrl(cleanKey),
            uploaded: false,
          };
        }
      } catch (err) {
        console.warn(
          `[R2MediaStorage] Exists check failed for '${cleanKey}': ${err instanceof Error ? err.message : String(err)}`
        );
      }
    }

    // 2. Perform upload
    const url = await this.uploadMedia(cleanKey, data, options);
    return {
      url,
      uploaded: Boolean(this.bucket),
    };
  }

  async exists(key: string): Promise<boolean> {
    const cleanKey = key.replace(/^\/+/, '');
    if (!cleanKey) return false;

    if (this.bucket) {
      const obj = await this.bucket.head(cleanKey);
      return obj !== null;
    }
    return false;
  }

  async deleteMedia(key: string): Promise<boolean> {
    const cleanKey = key.replace(/^\/+/, '');
    if (!cleanKey) return false;

    if (this.bucket) {
      await this.bucket.delete(cleanKey);
      return true;
    }
    console.warn(`[R2MediaStorage] Delete skipped: native binding 'MEDIA_BUCKET' not attached for key '${cleanKey}'.`);
    return false;
  }
}

/**
 * Factory for creating the configured media storage service.
 */
export function createMediaStorageService(bucket?: R2BucketLike): MediaStorageService {
  return new R2MediaStorage(bucket);
}
