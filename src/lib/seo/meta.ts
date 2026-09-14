/**
 * AI Zodiac - SEO & Structured Data (JSON-LD) Infrastructure
 */

import { siteConfig } from '@/config/site';

export interface SEOProps {
  readonly title?: string | undefined;
  readonly description?: string | undefined;
  readonly canonicalUrl?: string | undefined;
  readonly ogImage?: string | undefined;
  readonly ogType?: 'website' | 'article' | undefined;
  readonly publishedTime?: string | undefined;
  readonly modifiedTime?: string | undefined;
  readonly author?: string | undefined;
  readonly noindex?: boolean | undefined;
}

/**
 * Builds an absolute canonical URL using the configured site base URL.
 */
export function buildCanonicalUrl(path: string = ''): string {
  const base = siteConfig.getBaseUrl();
  const cleanPath = path.replace(/^\/+/, '');
  return cleanPath ? `${base}/${cleanPath}` : base;
}

/**
 * Generates schema.org Organization JSON-LD structure.
 */
export function generateOrganizationSchema() {
  const baseUrl = siteConfig.getBaseUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: baseUrl,
    logo: `${baseUrl}/favicon.svg`,
    description: siteConfig.description,
  };
}

/**
 * Generates schema.org WebSite JSON-LD structure with search potential.
 */
export function generateWebSiteSchema() {
  const baseUrl = siteConfig.getBaseUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: baseUrl,
    description: siteConfig.description,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
  };
}

/**
 * Generates schema.org Article JSON-LD structure for editorial content.
 */
export function generateArticleSchema(options: {
  readonly title: string;
  readonly description: string;
  readonly url: string;
  readonly imageUrl?: string;
  readonly publishedTime: string;
  readonly modifiedTime?: string;
  readonly authorName?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: options.title,
    description: options.description,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': options.url,
    },
    url: options.url,
    image: options.imageUrl,
    datePublished: options.publishedTime,
    dateModified: options.modifiedTime || options.publishedTime,
    author: {
      '@type': 'Person',
      name: options.authorName || siteConfig.defaultAuthor,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.getBaseUrl()}/favicon.svg`,
      },
    },
  };
}
