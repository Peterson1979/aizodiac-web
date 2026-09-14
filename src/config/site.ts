/**
 * AI Zodiac - Site Configuration
 * 
 * Central site metadata, base URLs, SEO defaults, and optional analytics configuration.
 */

export interface SiteConfig {
  readonly name: string;
  readonly defaultTitle: string;
  readonly titleTemplate: string;
  readonly description: string;
  readonly defaultAuthor: string;
  readonly defaultLocale: string;
  readonly defaultOgImage: string;
  readonly getBaseUrl: () => string;
  readonly analytics: {
    readonly cloudflareWebAnalyticsToken?: string;
  };
}

export const siteConfig: SiteConfig = {
  name: 'AI Zodiac',
  defaultTitle: 'AI Zodiac — Next-Generation Astrological Intelligence',
  titleTemplate: '%s | AI Zodiac',
  description: 'AI Zodiac combines advanced artificial intelligence with timeless astrological wisdom for personalized horoscopes, birth charts, compatibility, and transit insights.',
  defaultAuthor: 'AI Zodiac Team',
  defaultLocale: 'en_US',
  defaultOgImage: '/og-default.png',
  getBaseUrl: (): string => {
    const rawUrl = import.meta.env.SITE_URL || 'https://aizodiac.workers.dev';
    return rawUrl.replace(/\/+$/, '');
  },
  analytics: {
    cloudflareWebAnalyticsToken: import.meta.env.PUBLIC_CLOUDFLARE_WEB_ANALYTICS_TOKEN || undefined,
  },
} as const;
