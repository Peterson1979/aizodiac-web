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
  readonly googlePlayUrl: string;
  readonly getBaseUrl: () => string;
  readonly analytics: {
    readonly cloudflareWebAnalyticsToken?: string;
  };
}

export const siteConfig: SiteConfig = {
  name: 'AI Zodiac',
  defaultTitle: 'AI Zodiac — AI Astrology App & Personalized Horoscope',
  titleTemplate: '%s | AI Zodiac',
  description: 'AI Zodiac is your personal AI astrology app. Discover birth-chart based horoscopes, deep love compatibility, natal insights, and daily guidance on Android.',
  defaultAuthor: 'AI Zodiac Editorial',
  defaultLocale: 'en_US',
  defaultOgImage: '/og-default.png',
  googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.oberon.aizodiac',
  getBaseUrl: (): string => {
    const rawUrl = import.meta.env.SITE_URL || 'https://aizodiac.workers.dev';
    return rawUrl.replace(/\/+$/, '');
  },
  analytics: {
    cloudflareWebAnalyticsToken: import.meta.env.PUBLIC_CLOUDFLARE_WEB_ANALYTICS_TOKEN || undefined,
  },
} as const;
