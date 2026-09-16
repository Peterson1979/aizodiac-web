import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    cluster: z.enum([
      'personality',
      'relationships',
      'astrology-guides',
      'ai-astrology',
      'zodiac',
      'insights',
    ]),
    topic: z.string(),
    audience: z.enum([
      'beginner',
      'enthusiast',
      'curious',
      'dating',
      'general',
      'spiritual_seeker',
    ]).default('general'),
    searchIntent: z.enum([
      'informational',
      'navigational',
      'commercial',
      'transactional',
    ]).default('informational'),
    relatedAppFeatures: z.array(z.string()).default([]),
    ctaType: z.enum([
      'personalized_insights',
      'birth_chart',
      'ask_ai',
      'compatibility',
      'explore_zodiac',
    ]).default('personalized_insights'),
    readingTime: z.string().default('4 min read'),
    image: z.string().optional(),
    ogImage: z.string().optional(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    publishedDate: z.string(),
    updatedDate: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
