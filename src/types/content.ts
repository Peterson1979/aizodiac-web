/**
 * AI Zodiac - Content & Taxonomy Types
 * 
 * Strict TypeScript models for editorial content clusters, topics,
 * search intent, audiences, and mobile app feature integration.
 */

// -----------------------------------------------------------------------------
// Editorial Clusters
// -----------------------------------------------------------------------------

export type ContentCluster =
  | 'personality'
  | 'relationships'
  | 'astrology-guides'
  | 'ai-astrology'
  | 'zodiac'
  | 'insights';

export interface ClusterMeta {
  readonly id: ContentCluster;
  readonly name: string;
  readonly description: string;
  readonly icon: string;
}

export const CONTENT_CLUSTERS: readonly ClusterMeta[] = [
  {
    id: 'personality',
    name: 'Personality Insights',
    description: 'Explore the psychological patterns, elemental archetypes, and intrinsic traits of zodiac signs.',
    icon: '✨',
  },
  {
    id: 'relationships',
    name: 'Relationship Dynamics',
    description: 'Understand love compatibility, emotional communication, and relationship harmonics through synastry.',
    icon: '💫',
  },
  {
    id: 'astrology-guides',
    name: 'Astrology Guides',
    description: 'Master the fundamentals of natal charts, planetary houses, transits, and celestial mechanics.',
    icon: '🪐',
  },
  {
    id: 'ai-astrology',
    name: 'AI & Modern Astrology',
    description: 'Discover how advanced artificial intelligence synthesizes complex planetary data for tailored clarity.',
    icon: '🔮',
  },
  {
    id: 'zodiac',
    name: 'Zodiac Archetypes',
    description: 'Deep dives into each of the twelve zodiac signs, rulers, elements, and seasonal expressions.',
    icon: '♈',
  },
  {
    id: 'insights',
    name: 'Cosmic Insights',
    description: 'Reflections on transits, retrogrades, lunations, and modern astrological perspectives.',
    icon: '🌙',
  },
] as const;

// -----------------------------------------------------------------------------
// Zodiac Signs Taxonomy
// -----------------------------------------------------------------------------

export type WesternZodiacSign =
  | 'aries'
  | 'taurus'
  | 'gemini'
  | 'cancer'
  | 'leo'
  | 'virgo'
  | 'libra'
  | 'scorpio'
  | 'sagittarius'
  | 'capricorn'
  | 'aquarius'
  | 'pisces';

export type ChineseZodiacSign =
  | 'rat'
  | 'ox'
  | 'tiger'
  | 'rabbit'
  | 'dragon'
  | 'snake'
  | 'horse'
  | 'goat'
  | 'monkey'
  | 'rooster'
  | 'dog'
  | 'pig';

export type ZodiacElement = 'fire' | 'earth' | 'air' | 'water';

export interface ZodiacSignMeta {
  readonly id: WesternZodiacSign;
  readonly name: string;
  readonly symbol: string;
  readonly dateRange: string;
  readonly element: ZodiacElement;
  readonly rulingPlanet: string;
}

export const WESTERN_ZODIAC_SIGNS: readonly ZodiacSignMeta[] = [
  { id: 'aries', name: 'Aries', symbol: '♈', dateRange: 'Mar 21 - Apr 19', element: 'fire', rulingPlanet: 'Mars' },
  { id: 'taurus', name: 'Taurus', symbol: '♉', dateRange: 'Apr 20 - May 20', element: 'earth', rulingPlanet: 'Venus' },
  { id: 'gemini', name: 'Gemini', symbol: '♊', dateRange: 'May 21 - Jun 20', element: 'air', rulingPlanet: 'Mercury' },
  { id: 'cancer', name: 'Cancer', symbol: '♋', dateRange: 'Jun 21 - Jul 22', element: 'water', rulingPlanet: 'Moon' },
  { id: 'leo', name: 'Leo', symbol: '♌', dateRange: 'Jul 23 - Aug 22', element: 'fire', rulingPlanet: 'Sun' },
  { id: 'virgo', name: 'Virgo', symbol: '♍', dateRange: 'Aug 23 - Sep 22', element: 'earth', rulingPlanet: 'Mercury' },
  { id: 'libra', name: 'Libra', symbol: '♎', dateRange: 'Sep 23 - Oct 22', element: 'air', rulingPlanet: 'Venus' },
  { id: 'scorpio', name: 'Scorpio', symbol: '♏', dateRange: 'Oct 23 - Nov 21', element: 'water', rulingPlanet: 'Pluto / Mars' },
  { id: 'sagittarius', name: 'Sagittarius', symbol: '♐', dateRange: 'Nov 22 - Dec 21', element: 'fire', rulingPlanet: 'Jupiter' },
  { id: 'capricorn', name: 'Capricorn', symbol: '♑', dateRange: 'Dec 22 - Jan 19', element: 'earth', rulingPlanet: 'Saturn' },
  { id: 'aquarius', name: 'Aquarius', symbol: '♒', dateRange: 'Jan 20 - Feb 18', element: 'air', rulingPlanet: 'Uranus / Saturn' },
  { id: 'pisces', name: 'Pisces', symbol: '♓', dateRange: 'Feb 19 - Mar 20', element: 'water', rulingPlanet: 'Neptune / Jupiter' },
] as const;

// -----------------------------------------------------------------------------
// App Features Taxonomy
// -----------------------------------------------------------------------------

export type AppFeatureId =
  | 'personalized_astrology'
  | 'birth_chart'
  | 'daily_horoscope'
  | 'weekly_horoscope'
  | 'monthly_horoscope'
  | 'annual_horoscope'
  | 'ask_the_ai'
  | 'love_compatibility'
  | 'zodiac_characteristics'
  | 'numerology'
  | 'ascendant_number'
  | 'personal_astrological_calendar'
  | 'chinese_horoscope';

export interface AppFeatureMeta {
  readonly id: AppFeatureId;
  readonly title: string;
  readonly description: string;
  readonly icon: string;
}

export const APP_FEATURES: readonly AppFeatureMeta[] = [
  {
    id: 'personalized_astrology',
    title: 'Personalized Astrology',
    description: 'Multi-layered astrological insights computed from your exact birth coordinates and ongoing transits.',
    icon: '✨',
  },
  {
    id: 'birth_chart',
    title: 'Birth Chart (Natal Chart)',
    description: 'Complete celestial snapshot with planetary placements, house cusps, and harmonic aspects.',
    icon: '🌌',
  },
  {
    id: 'daily_horoscope',
    title: 'Daily Insights',
    description: 'Clear daily cosmic energy forecasts focused on mindfulness, productivity, and personal flow.',
    icon: '☀️',
  },
  {
    id: 'weekly_horoscope',
    title: 'Weekly Forecasts',
    description: '7-day strategic planetary overview highlighting key transits and focal areas.',
    icon: '🗓️',
  },
  {
    id: 'monthly_horoscope',
    title: 'Monthly Horoscopes',
    description: 'Deep-dive into seasonal shifts, new and full moon lunations, and retrograde cycles.',
    icon: '🌙',
  },
  {
    id: 'annual_horoscope',
    title: 'Annual Trajectory',
    description: 'Year-ahead astrological themes, major outer-planet transits, and milestone periods.',
    icon: '🌟',
  },
  {
    id: 'ask_the_ai',
    title: 'Ask the AI',
    description: 'Interactive astrological advisor for contextual answers to your specific life questions.',
    icon: '💬',
  },
  {
    id: 'love_compatibility',
    title: 'Love & Relationship Harmonics',
    description: 'Comprehensive synastry analysis evaluating emotional, communicative, and romantic connections.',
    icon: '💖',
  },
  {
    id: 'zodiac_characteristics',
    title: 'Zodiac Characteristics',
    description: 'In-depth personality profiles, element influences, modalities, and ruling planets.',
    icon: '♈',
  },
  {
    id: 'numerology',
    title: 'Numerology Alignments',
    description: 'Life path, expression, and soul urge numerical vibrations decoded alongside your chart.',
    icon: '🔢',
  },
  {
    id: 'ascendant_number',
    title: 'Ascendant & Rising Insights',
    description: 'Rising sign dynamics and outer persona harmonics calculation.',
    icon: '🌅',
  },
  {
    id: 'personal_astrological_calendar',
    title: 'Personal Cosmic Calendar',
    description: 'Custom calendar tracking personal power days, void moons, and planetary transits.',
    icon: '📅',
  },
  {
    id: 'chinese_horoscope',
    title: 'Chinese Horoscope',
    description: 'Eastern zodiac animal archetypes and five-element cycles (Wood, Fire, Earth, Metal, Water).',
    icon: '🐉',
  },
] as const;

// -----------------------------------------------------------------------------
// Intent, Audience & Conversion CTA Taxonomy
// -----------------------------------------------------------------------------

export type SearchIntent =
  | 'informational'
  | 'navigational'
  | 'commercial'
  | 'transactional';

export type TargetAudience =
  | 'beginner'
  | 'enthusiast'
  | 'curious'
  | 'dating'
  | 'general'
  | 'spiritual_seeker';

export type CtaType =
  | 'personalized_insights'
  | 'birth_chart'
  | 'ask_ai'
  | 'compatibility'
  | 'explore_zodiac';

export interface CtaMeta {
  readonly type: CtaType;
  readonly headline: string;
  readonly buttonText: string;
  readonly buttonLink: string;
}

export const CTA_CONFIGS: Record<CtaType, CtaMeta> = {
  personalized_insights: {
    type: 'personalized_insights',
    headline: 'Ready for personalized astrological clarity tailored to your exact birth chart?',
    buttonText: 'Explore Your Profile',
    buttonLink: '/#features',
  },
  birth_chart: {
    type: 'birth_chart',
    headline: 'Discover the full celestial blueprint of your birth chart with AI Zodiac.',
    buttonText: 'Calculate Your Chart',
    buttonLink: '/#features',
  },
  ask_ai: {
    type: 'ask_ai',
    headline: 'Have a specific question about your transits, career, or relationships?',
    buttonText: 'Ask AI Zodiac',
    buttonLink: '/#features',
  },
  compatibility: {
    type: 'compatibility',
    headline: 'Understand the relational dynamics between your sign and your partner.',
    buttonText: 'Explore Compatibility',
    buttonLink: '/#features',
  },
  explore_zodiac: {
    type: 'explore_zodiac',
    headline: 'Dive deeper into the 12 zodiac archetypes and celestial mechanics.',
    buttonText: 'Discover Zodiac Signs',
    buttonLink: '/#zodiac',
  },
};
