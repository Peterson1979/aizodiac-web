import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

const siteUrl = process.env.SITE_URL || 'https://aizodiac.workers.dev';

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  output: 'static',
  redirects: {
    '/features/birth-chart': '/tools/birth-chart',
    '/features/chinese-horoscope': '/features/chinese-zodiac',
  },
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  integrations: [
    sitemap(),
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
