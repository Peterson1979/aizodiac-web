import type { AppFeatureId, FeatureCtaMapping, WesternZodiacSign, ContentCluster } from '@/types/content';
import { buildPlayStoreUrl } from '@/lib/conversion/playStore';

/**
 * AI Zodiac - 3-Level App-Acquisition & CTA Mapping Engine
 * 
 * Level 1: Contextual internal links (sign hubs, tools, related guides)
 * Level 2: Relevant app feature value card
 * Level 3: Google Play Store CTA button with deterministic UTM attribution
 */

export const FEATURE_CTA_MAPPINGS: Record<AppFeatureId, FeatureCtaMapping> = {
  personalized_horoscopes: {
    featureId: 'personalized_horoscopes',
    featureSlug: 'personal-horoscope',
    title: 'Personalized Horoscopes',
    badge: 'AI Zodiac Daily Guidance',
    headline: 'Experience daily, weekly, monthly & yearly forecasts calibrated to your birth data.',
    description: 'Get clear, actionable daily horoscopes and personalized cosmic timing designed for conscious decision-making in the AI Zodiac Android app.',
    icon: '/images/ic_personal.png',
    valueHighlights: [
      'Daily, weekly, monthly & yearly forecast tiers',
      'Personalized to your exact zodiac sign & birth details',
      'Actionable reflection prompts for mindful daily focus',
    ],
    utmCampaign: 'horoscope_hub',
  },
  ascendant_calculator: {
    featureId: 'ascendant_calculator',
    featureSlug: 'ascendant',
    title: 'Ascendant & Rising Calculator',
    badge: 'AI Zodiac Astrological Profile',
    headline: 'Calculate your rising sign with precision using your birth time and location.',
    description: 'Discover the exact zodiac sign rising on the horizon at your birth, shaping your persona, first impressions, and life approach.',
    icon: '/images/ic_ascendant.png',
    valueHighlights: [
      'Precise rising sign calculation from birth time & coordinates',
      'Integrated Sun, Moon & Rising Big Three profile',
      'Clear, accessible explanations of your rising persona',
    ],
    utmCampaign: 'ascendant_hub',
  },
  zodiac_traits: {
    featureId: 'zodiac_traits',
    featureSlug: 'zodiac-traits',
    title: 'Zodiac Signs & Traits',
    badge: 'AI Zodiac Personality Archetypes',
    headline: 'Explore in-depth personality profiles, elemental harmonies & growth areas.',
    description: 'Understand the psychological patterns, strengths, and communication tendencies of all 12 zodiac signs inside the AI Zodiac app.',
    icon: '/images/ic_traits.png',
    valueHighlights: [
      'Comprehensive profiles for all 12 Western signs',
      'Elemental (Fire, Earth, Air, Water) & modality dynamics',
      'Actionable self-reflection tools for daily growth',
    ],
    utmCampaign: 'zodiac_sign_hub',
  },
  love_compatibility: {
    featureId: 'love_compatibility',
    featureSlug: 'love-compatibility',
    title: 'Love Compatibility & Synastry',
    badge: 'AI Zodiac Relationship Intelligence',
    headline: 'Discover deep relationship dynamics, communication styles & emotional harmonics.',
    description: 'Explore synastry dynamics for all sign combinations with practical advice on emotional connection and conflict resolution in AI Zodiac.',
    icon: '/images/ic_love.png',
    valueHighlights: [
      'Comprehensive compatibility breakdowns for all sign pairings',
      'Romance, communication & emotional harmony insights',
      'Actionable guidance for constructive relationship growth',
    ],
    utmCampaign: 'compatibility_hub',
  },
  ask_the_ai: {
    featureId: 'ask_the_ai',
    featureSlug: 'ask-ai',
    title: 'Ask the AI Astrologer',
    badge: 'AI Zodiac Conversational AI',
    headline: 'Ask personalized questions and receive thoughtful, astrological advisory.',
    description: 'Whether curious about current timing, personal dilemmas, or relationship patterns, get thoughtful answers tailored specifically to your profile.',
    icon: '/images/ic_question.png',
    valueHighlights: [
      'Conversational AI calibrated to your birth chart & signs',
      'Personalized guidance on career, love, and life transitions',
      'Private, secure experience in the AI Zodiac Android app',
    ],
    utmCampaign: 'ask_ai_hub',
  },
  numerology: {
    featureId: 'numerology',
    featureSlug: 'numerology',
    title: 'Numerology Insights',
    badge: 'AI Zodiac Vibrational Numbers',
    headline: 'Calculate your Life Path, Expression & Soul Urge numbers.',
    description: 'Discover the complementary vibrational numbers that shape your life journey alongside your astrological profile.',
    icon: '/images/ic_numbers.png',
    valueHighlights: [
      'Automated Life Path and Expression calculations',
      'Harmonious integration with your zodiac profile',
      'Actionable insights for personal growth and timing',
    ],
    utmCampaign: 'numerology_hub',
  },
  chinese_zodiac: {
    featureId: 'chinese_zodiac',
    featureSlug: 'chinese-zodiac',
    title: 'Chinese Zodiac & Elements',
    badge: 'AI Zodiac Lunar Wisdom',
    headline: 'Discover your authentic Chinese animal sign, natural element & annual guidance.',
    description: 'Explore the 12 lunar animals and 5 natural elements to understand your personality through traditional Eastern astrology.',
    icon: '/images/ic_chinese.png',
    valueHighlights: [
      'Accurate lunar calendar conversion based on birth year',
      'Profiles for all 12 animal archetypes and 5 natural elements',
      'Integrated East-meets-West personality perspective',
    ],
    utmCampaign: 'chinese_zodiac_hub',
  },
  personal_astro_calendar: {
    featureId: 'personal_astro_calendar',
    featureSlug: 'personal-calendar',
    title: 'Personal Astro Calendar',
    badge: 'AI Zodiac Cosmic Timing',
    headline: 'Track key astrological periods, lunar phases & personal focus windows.',
    description: 'Stay ahead of upcoming retrogrades, new moons, full moons, and supportive transit phases tailored to your sign.',
    icon: '/images/ic_calendar.png',
    valueHighlights: [
      'Personalized cosmic calendar tailored to your sign',
      'Tracking for lunar phases and major transit periods',
      'Practical timing guidance for decisions and projects',
    ],
    utmCampaign: 'calendar_hub',
  },
};

/**
 * Maps a Zodiac Sign to its most relevant App Feature CTA
 */
export function getSignFeatureMapping(signId: WesternZodiacSign): FeatureCtaMapping {
  switch (signId) {
    case 'aries':
    case 'leo':
    case 'sagittarius':
      return FEATURE_CTA_MAPPINGS.zodiac_traits;
    case 'taurus':
    case 'virgo':
    case 'capricorn':
      return FEATURE_CTA_MAPPINGS.personalized_horoscopes;
    case 'gemini':
    case 'libra':
    case 'aquarius':
      return FEATURE_CTA_MAPPINGS.ask_the_ai;
    case 'cancer':
    case 'scorpio':
    case 'pisces':
      return FEATURE_CTA_MAPPINGS.love_compatibility;
  }
}

/**
 * Maps a Content Cluster to its primary Feature CTA
 */
export function getClusterFeatureMapping(cluster: ContentCluster): FeatureCtaMapping {
  switch (cluster) {
    case 'personality':
    case 'zodiac':
      return FEATURE_CTA_MAPPINGS.zodiac_traits;
    case 'relationships':
      return FEATURE_CTA_MAPPINGS.love_compatibility;
    case 'astrology-guides':
      return FEATURE_CTA_MAPPINGS.ascendant_calculator;
    case 'ai-astrology':
      return FEATURE_CTA_MAPPINGS.ask_the_ai;
    case 'insights':
      return FEATURE_CTA_MAPPINGS.personal_astro_calendar;
  }
}

/**
 * Generates an attribution-tracked Google Play Store URL for a specific CTA placement.
 */
export function buildAttributedPlayStoreUrl(options: {
  readonly campaign: string;
  readonly placement: string;
  readonly content?: string | undefined;
}): string {
  return buildPlayStoreUrl({
    utmSource: 'website',
    utmMedium: 'app_cta',
    utmCampaign: options.campaign,
    utmContent: options.content || options.placement,
  });
}
