/**
 * AI Zodiac - Cloudflare R2 Media Storage Abstraction
 * 
 * Target Bucket: `aizodiac-assets` (Native Worker Binding: `MEDIA_BUCKET`)
 * 
 * Provides a decoupled media storage interface for uploading, resolving, and
 * managing website assets via native Cloudflare Worker R2Bucket binding.
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

export interface MediaStorageService {
  /**
   * Uploads a media asset and returns its canonical public URL.
   */
  uploadMedia(key: string, data: Uint8Array | ArrayBuffer | Blob, options: MediaUploadOptions): Promise<string>;

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

export function getR2Config(): R2Config {
  return {
    bucketName: import.meta.env.R2_BUCKET_NAME || 'aizodiac-assets',
    publicBaseUrl: (import.meta.env.R2_PUBLIC_BASE_URL || 'https://assets.aizodiac.workers.dev').replace(/\/+$/, ''),
  };
}

/**
 * Cloudflare R2 Storage Service Implementation.
 * 
 * Uses native Worker `MEDIA_BUCKET` R2 binding with graceful local fallback.
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
    if (this.bucket) {
      await this.bucket.put(key, data, {
        httpMetadata: {
          contentType: options.contentType,
          cacheControl: options.cacheControl,
        },
        customMetadata: options.customMetadata,
      });
      return this.getPublicUrl(key);
    }

    // In local development without native binding, degrade safely
    console.warn(
      `[R2MediaStorage] Native R2 binding 'MEDIA_BUCKET' not attached in current runtime. ` +
      `Media upload skipped for '${key}'. Target bucket: '${this.config.bucketName}'.`
    );
    return this.getPublicUrl(key);
  }

  async exists(key: string): Promise<boolean> {
    if (this.bucket) {
      const obj = await this.bucket.head(key);
      return obj !== null;
    }
    return false;
  }

  async deleteMedia(key: string): Promise<boolean> {
    if (this.bucket) {
      await this.bucket.delete(key);
      return true;
    }
    console.warn(`[R2MediaStorage] Delete skipped: native binding 'MEDIA_BUCKET' not attached for key '${key}'.`);
    return false;
  }
}

/**
 * Factory for creating the configured media storage service.
 */
export function createMediaStorageService(bucket?: R2BucketLike): MediaStorageService {
  return new R2MediaStorage(bucket);
}
