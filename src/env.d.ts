/// <reference path="../.astro/types.d.ts" />

type Runtime = import('@astrojs/cloudflare').Runtime<{
  MEDIA_BUCKET: import('./lib/storage/r2').R2BucketLike;
  AI: import('./lib/ai/image').AiBindingLike;
}>;

declare namespace App {
  interface Locals extends Runtime {}
}
