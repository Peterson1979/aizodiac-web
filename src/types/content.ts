/**
 * AI Zodiac - Content & Taxonomy Types
 * 
 * Strict TypeScript models for editorial clusters, feature landing pages,
 * interactive tools, multi-channel distribution, and future monetization slots.
 */

// -----------------------------------------------------------------------------
// Content Types & Multi-Channel Mapping
// -----------------------------------------------------------------------------

export type ContentType = 'article' | 'feature' | 'tool';

export interface SocialChannelMapping {
  readonly coreTopicId: string;
  readonly articleSlug: string;
  readonly featureSlug: string;
  readonly targetChannels: readonly ('facebook' | 'instagram' | 'pinterest')[];
}

export interface MonetizationSlot {
  readonly slotId: string;
  readonly type: 'app_install' | 'premium_report' | 'display_ad';
  readonly placement: 'header_banner' | 'in_content' | 'footer_cta';
  readonly enabled: boolean;
}

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
    icon: '/images/ic_personal.png',
  },
  {
    id: 'relationships',
    name: 'Relationship Dynamics',
    description: 'Understand love compatibility, emotional communication, and relationship harmonics through synastry.',
    icon: '/images/ic_love.png',
  },
  {
    id: 'astrology-guides',
    name: 'Astrology Guides',
    description: 'Master the fundamentals of natal charts, planetary houses, transits, and celestial mechanics.',
    icon: '/images/ic_extras.png',
  },
  {
    id: 'ai-astrology',
    name: 'AI & Modern Astrology',
    description: 'Discover how advanced artificial intelligence synthesizes complex planetary data for tailored clarity.',
    icon: '/images/ic_horoscope.png',
  },
  {
    id: 'zodiac',
    name: 'Zodiac Archetypes',
    description: 'Deep dives into each of the twelve zodiac signs, rulers, elements, and seasonal expressions.',
    icon: '/images/ic_traits.png',
  },
  {
    id: 'insights',
    name: 'Cosmic Insights',
    description: 'Reflections on transits, retrogrades, lunations, and modern astrological perspectives.',
    icon: '/images/ic_horoscope.png',
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
export type ZodiacModality = 'cardinal' | 'fixed' | 'mutable';

export interface ZodiacSignMeta {
  readonly id: WesternZodiacSign;
  readonly name: string;
  readonly symbol: string;
  readonly iconUrl: string;
  readonly dateRange: string;
  readonly element: ZodiacElement;
  readonly modality: ZodiacModality;
  readonly rulingPlanet: string;
  readonly traits: readonly string[];
  readonly description: string;
}

export interface ZodiacSignHubData extends ZodiacSignMeta {
  readonly polarity: 'Yang / Masculine / Assertive' | 'Yin / Feminine / Receptive';
  readonly house: string;
  readonly tarotCard: string;
  readonly luckyNumbers: readonly number[];
  readonly luckyDay: string;
  readonly overviewParagraphs: readonly string[];
  readonly strengths: readonly { readonly title: string; readonly description: string }[];
  readonly growthAreas: readonly { readonly title: string; readonly description: string }[];
  readonly relationshipOverview: string;
  readonly communicationStyle: {
    readonly summary: string;
    readonly inDialogue: string;
    readonly inConflict: string;
  };
  readonly birthChartContext: {
    readonly summary: string;
    readonly sunRole: string;
    readonly moonInteraction: string;
    readonly risingInteraction: string;
  };
  readonly bestCompatibility: readonly { readonly sign: WesternZodiacSign; readonly why: string }[];
  readonly challengingCompatibility: readonly { readonly sign: WesternZodiacSign; readonly why: string }[];
  readonly horoscopeFocus: string;
  readonly relatedGuideSlugs: readonly string[];
  readonly relatedToolSlugs: readonly string[];
  readonly recommendedFeatureSlug: string;
  readonly recommendedFeatureTitle: string;
  readonly seoTitle: string;
  readonly seoDescription: string;
}

export const WESTERN_ZODIAC_SIGNS: readonly ZodiacSignMeta[] = [
  {
    id: 'aries',
    name: 'Aries',
    symbol: '♈',
    iconUrl: '/images/ic_aries.png',
    dateRange: 'Mar 21 - Apr 19',
    element: 'fire',
    modality: 'cardinal',
    rulingPlanet: 'Mars',
    traits: ['Pioneering', 'Courageous', 'Direct', 'Passionate'],
    description: 'The first sign of the zodiac, Aries initiates new cycles with bold energy, vitality, and unhesitating leadership.',
  },
  {
    id: 'taurus',
    name: 'Taurus',
    symbol: '♉',
    iconUrl: '/images/ic_taurus.png',
    dateRange: 'Apr 20 - May 20',
    element: 'earth',
    modality: 'fixed',
    rulingPlanet: 'Venus',
    traits: ['Steadfast', 'Grounded', 'Sensual', 'Patient'],
    description: 'Taurus brings stability, tactile appreciation for beauty, and deliberate persistence to manifest enduring value.',
  },
  {
    id: 'gemini',
    name: 'Gemini',
    symbol: '♊',
    iconUrl: '/images/ic_gemini.png',
    dateRange: 'May 21 - Jun 20',
    element: 'air',
    modality: 'mutable',
    rulingPlanet: 'Mercury',
    traits: ['Curious', 'Adaptable', 'Articulate', 'Versatile'],
    description: 'Gemini weaves ideas and social connections together with intellectual agility and a multifaceted perspective.',
  },
  {
    id: 'cancer',
    name: 'Cancer',
    symbol: '♋',
    iconUrl: '/images/ic_cancer.png',
    dateRange: 'Jun 21 - Jul 22',
    element: 'water',
    modality: 'cardinal',
    rulingPlanet: 'Moon',
    traits: ['Intuitive', 'Nurturing', 'Protective', 'Empathetic'],
    description: 'Cancer operates through emotional depth, creating sanctuaries of safety, loyalty, and profound psychological insight.',
  },
  {
    id: 'leo',
    name: 'Leo',
    symbol: '♌',
    iconUrl: '/images/ic_leo.png',
    dateRange: 'Jul 23 - Aug 22',
    element: 'fire',
    modality: 'fixed',
    rulingPlanet: 'Sun',
    traits: ['Radiant', 'Generous', 'Creative', 'Heart-centered'],
    description: 'Leo radiates vitality and warm self-expression, inspiring others through creative authenticity and bold leadership.',
  },
  {
    id: 'virgo',
    name: 'Virgo',
    symbol: '♍',
    iconUrl: '/images/ic_virgo.png',
    dateRange: 'Aug 23 - Sep 22',
    element: 'earth',
    modality: 'mutable',
    rulingPlanet: 'Mercury',
    traits: ['Analytical', 'Discerning', 'Service-oriented', 'Precise'],
    description: 'Virgo refines and perfects, applying keen observational discernment and practical craftsmanship to everyday life.',
  },
  {
    id: 'libra',
    name: 'Libra',
    symbol: '♎',
    iconUrl: '/images/ic_libra.png',
    dateRange: 'Sep 23 - Oct 22',
    element: 'air',
    modality: 'cardinal',
    rulingPlanet: 'Venus',
    traits: ['Harmonious', 'Diplomatic', 'Aesthetic', 'Fair-minded'],
    description: 'Libra seeks equilibrium, interpersonal symmetry, and aesthetic refinement through thoughtful collaboration.',
  },
  {
    id: 'scorpio',
    name: 'Scorpio',
    symbol: '♏',
    iconUrl: '/images/ic_scorpio.png',
    dateRange: 'Oct 23 - Nov 21',
    element: 'water',
    modality: 'fixed',
    rulingPlanet: 'Pluto & Mars',
    traits: ['Transformative', 'Perceptive', 'Magnetic', 'Resilient'],
    description: 'Scorpio delves beneath surface appearances, fostering psychological transformation, emotional truth, and profound focus.',
  },
  {
    id: 'sagittarius',
    name: 'Sagittarius',
    symbol: '♐',
    iconUrl: '/images/ic_sagittarius.png',
    dateRange: 'Nov 22 - Dec 21',
    element: 'fire',
    modality: 'mutable',
    rulingPlanet: 'Jupiter',
    traits: ['Philosophical', 'Expansive', 'Optimistic', 'Free-spirited'],
    description: 'Sagittarius quests for truth and higher meaning through adventure, philosophical exploration, and expansive optimism.',
  },
  {
    id: 'capricorn',
    name: 'Capricorn',
    symbol: '♑',
    iconUrl: '/images/ic_capricorn.png',
    dateRange: 'Dec 22 - Jan 19',
    element: 'earth',
    modality: 'cardinal',
    rulingPlanet: 'Saturn',
    traits: ['Architectural', 'Disciplined', 'Strategic', 'Patient'],
    description: 'Capricorn builds lasting legacies through methodical mastery, practical resilience, and structural integrity.',
  },
  {
    id: 'aquarius',
    name: 'Aquarius',
    symbol: '♒',
    iconUrl: '/images/ic_aquarius.png',
    dateRange: 'Jan 20 - Feb 18',
    element: 'air',
    modality: 'fixed',
    rulingPlanet: 'Uranus & Saturn',
    traits: ['Visionary', 'Innovative', 'Humanitarian', 'Independent'],
    description: 'Aquarius champions collective progress, innovative conceptual models, and authentic individuality.',
  },
  {
    id: 'pisces',
    name: 'Pisces',
    symbol: '♓',
    iconUrl: '/images/ic_pisces.png',
    dateRange: 'Feb 19 - Mar 20',
    element: 'water',
    modality: 'mutable',
    rulingPlanet: 'Neptune & Jupiter',
    traits: ['Compassionate', 'Mystical', 'Imaginative', 'Boundless'],
    description: 'The final sign of the zodiac, Pisces integrates all experience through transcendent empathy, artistic imagination, and spiritual depth.',
  },
] as const;

// -----------------------------------------------------------------------------
// App Features & Feature Landing Page Definitions
// -----------------------------------------------------------------------------

export type AppFeatureId =
  | 'personalized_horoscopes'
  | 'ascendant_calculator'
  | 'zodiac_traits'
  | 'love_compatibility'
  | 'ask_the_ai'
  | 'numerology'
  | 'chinese_zodiac'
  | 'personal_astro_calendar';

export interface FeaturePageData {
  readonly slug: string;
  readonly id: AppFeatureId;
  readonly title: string;
  readonly tagline: string;
  readonly icon: string;
  readonly userBenefit: string;
  readonly description: string;
  readonly exampleUseCases: readonly {
    readonly title: string;
    readonly description: string;
  }[];
  readonly appValueHighlights: readonly string[];
  readonly relatedCluster: ContentCluster;
  readonly seoTitle: string;
  readonly seoDescription: string;
}

export const FEATURE_PAGES: readonly FeaturePageData[] = [
  {
    slug: 'personal-horoscope',
    id: 'personalized_horoscopes',
    title: 'Personalized Horoscopes',
    tagline: 'Explore daily, weekly, monthly, and yearly horoscope forecasts with personalized astrology insights based on your zodiac sign and birth details.',
    icon: '/images/ic_personal.png',
    userBenefit: 'Explore daily, weekly, monthly, and yearly horoscope forecasts with personalized astrology insights based on your zodiac sign and birth details.',
    description: 'Explore daily, weekly, monthly, and yearly horoscope forecasts with personalized astrology insights based on your zodiac sign and birth details. AI Zodiac translates planetary timing into clear, actionable daily guidance for your personal life, relationships, and focus.',
    exampleUseCases: [
      {
        title: 'Daily Horoscope & Focus',
        description: 'Start your morning with personalized insights tailored to your zodiac sign and current astrological timing.',
      },
      {
        title: 'Weekly & Monthly Outlook',
        description: 'Plan ahead with broader cosmic guidance covering personal growth, career focus, and emotional rhythm.',
      },
      {
        title: 'Yearly Forecasts',
        description: 'Explore annual trends, major opportunities, and key themes for your sign across the entire year.',
      },
    ],
    appValueHighlights: [
      'Daily, weekly, monthly, and yearly forecast layers',
      'Personalized insights calibrated to your sign and birth details',
      'Actionable reflection prompts for conscious daily planning',
      'Clear, accessible guidance designed for self-discovery',
    ],
    relatedCluster: 'personality',
    seoTitle: 'Personalized Horoscopes & Daily Forecasts | AI Zodiac App',
    seoDescription: 'Explore daily, weekly, monthly, and yearly horoscope forecasts with personalized astrology insights based on your zodiac sign in the AI Zodiac app.',
  },
  {
    slug: 'ascendant',
    id: 'ascendant_calculator',
    title: 'Ascendant & Rising Sign Calculator',
    tagline: 'Enter your birth date, birth time, and location to calculate your ascendant (rising sign) and discover another important part of your astrological profile.',
    icon: '/images/ic_ascendant.png',
    userBenefit: 'Enter your birth date, birth time, and location to calculate your ascendant (rising sign) and discover another important part of your astrological profile.',
    description: 'Enter your birth date, birth time, and location to calculate your ascendant (rising sign) and discover another important part of your astrological profile. Your rising sign represents how you meet the world, your first impressions, and provides key context for your complete zodiac personality.',
    exampleUseCases: [
      {
        title: 'Discover Your Rising Sign',
        description: 'Calculate the exact zodiac sign that was rising on the eastern horizon at the moment you were born.',
      },
      {
        title: 'Understand Your Persona',
        description: 'Explore how your rising sign influences your natural instincts, personal energy, and outward style.',
      },
      {
        title: 'Complete Astrological Profile',
        description: 'Combine your Sun sign, Moon sign, and Ascendant for a well-rounded understanding of your character.',
      },
    ],
    appValueHighlights: [
      'Accurate ascendant calculation based on birth time and location',
      'In-depth rising sign personality characteristics and traits',
      'Integration with your Sun sign and complete profile',
      'Easy-to-understand breakdown without complicated jargon',
    ],
    relatedCluster: 'astrology-guides',
    seoTitle: 'Ascendant & Rising Sign Calculator | AI Zodiac App',
    seoDescription: 'Calculate your ascendant (rising sign) with your birth date, time, and location to discover key insights into your astrological profile in AI Zodiac.',
  },
  {
    slug: 'zodiac-traits',
    id: 'zodiac_traits',
    title: 'Zodiac Signs & Personality',
    tagline: 'Learn more about all 12 zodiac signs, including personality traits, strengths, weaknesses, compatibility, and astrological characteristics.',
    icon: '/images/ic_traits.png',
    userBenefit: 'Learn more about all 12 zodiac signs, including personality traits, strengths, weaknesses, compatibility, and astrological characteristics.',
    description: 'Learn more about all 12 zodiac signs, including personality traits, strengths, weaknesses, compatibility, and astrological characteristics. Explore elemental energies (Fire, Earth, Air, Water) and modalities to better understand yourself, your friends, and your loved ones.',
    exampleUseCases: [
      {
        title: 'Explore All 12 Signs',
        description: 'Deep dive into the core traits, symbols, ruling planets, and dates for every zodiac sign.',
      },
      {
        title: 'Strengths & Growth Areas',
        description: 'Discover the unique gifts, natural motivations, and personal focus areas associated with your sign.',
      },
      {
        title: 'Elemental Energies',
        description: 'Understand how Fire, Earth, Air, and Water elements shape different personality dynamics and temperaments.',
      },
    ],
    appValueHighlights: [
      'Comprehensive profiles for all 12 zodiac signs',
      'Clear breakdowns of strengths, weaknesses, and key traits',
      'Elemental (Fire, Earth, Air, Water) and modality guides',
      'Actionable self-reflection tools for everyday life',
    ],
    relatedCluster: 'personality',
    seoTitle: 'Zodiac Signs & Personality Traits | AI Zodiac App',
    seoDescription: 'Learn about all 12 zodiac signs, personality traits, strengths, weaknesses, and astrological characteristics in the AI Zodiac app.',
  },
  {
    slug: 'love-compatibility',
    id: 'love_compatibility',
    title: 'Love Compatibility',
    tagline: 'Explore zodiac compatibility and relationship insights based on astrology and your personal birth information.',
    icon: '/images/ic_love.png',
    userBenefit: 'Explore zodiac compatibility and relationship insights based on astrology and your personal birth information.',
    description: 'Explore zodiac compatibility and relationship insights based on astrology and your personal birth information. Discover how different signs interact in romance, friendship, and communication, with practical guidance for building harmonious connections.',
    exampleUseCases: [
      {
        title: 'Zodiac Sign Matching',
        description: 'Compare any two zodiac signs to explore mutual attraction, emotional resonance, and communication styles.',
      },
      {
        title: 'Relationship Harmony',
        description: 'Discover the natural strengths and complementary qualities that bring two people together.',
      },
      {
        title: 'Navigating Differences',
        description: 'Receive thoughtful, constructive tips on how to bridge differing perspectives and communicate with empathy.',
      },
    ],
    appValueHighlights: [
      'Detailed compatibility breakdowns for all 144 sign combinations',
      'Insights into romance, communication, and emotional connection',
      'Personalized compatibility matching using birth details',
      'Constructive advice for conscious relationship growth',
    ],
    relatedCluster: 'relationships',
    seoTitle: 'Zodiac Compatibility & Love Insights | AI Zodiac App',
    seoDescription: 'Explore zodiac compatibility and relationship insights based on astrology and your personal birth information in the AI Zodiac app.',
  },
  {
    slug: 'ask-ai',
    id: 'ask_the_ai',
    title: 'Ask the AI Astrologer',
    tagline: 'Ask your astrology questions and receive personalized AI-powered guidance based on your profile and zodiac information.',
    icon: '/images/ic_question.png',
    userBenefit: 'Ask your astrology questions and receive personalized AI-powered guidance based on your profile and zodiac information.',
    description: 'Ask your astrology questions and receive personalized AI-powered guidance based on your profile and zodiac information. Whether you are curious about current timing, personal strengths, or relationship dynamics, get thoughtful answers tailored specifically to you in the Android app.',
    exampleUseCases: [
      {
        title: 'Personal & Timing Questions',
        description: 'Ask how current astrological periods influence your career focus, decision-making, or personal goals.',
      },
      {
        title: 'Relationship Guidance',
        description: 'Ask contextual questions about communication patterns and emotional connection with loved ones.',
      },
      {
        title: 'Self-Discovery & Growth',
        description: 'Gain deeper clarity on your personality strengths, hidden talents, and personal development.',
      },
    ],
    appValueHighlights: [
      'Interactive conversational guidance calibrated to your zodiac profile',
      'Thoughtful answers tailored to your personal questions and life stage',
      'Private, secure environment inside the AI Zodiac mobile app',
      'Continuous personalized context for thoughtful self-reflection',
    ],
    relatedCluster: 'ai-astrology',
    seoTitle: 'Ask the AI Astrologer — Personalized Advisory | AI Zodiac App',
    seoDescription: 'Ask your astrology questions and receive personalized AI-powered guidance based on your profile and zodiac information in the AI Zodiac app.',
  },
  {
    slug: 'numerology',
    id: 'numerology',
    title: 'Numerology',
    tagline: 'Discover personalized numerology insights and explore the meanings associated with your numbers.',
    icon: '/images/ic_numbers.png',
    userBenefit: 'Discover personalized numerology insights and explore the meanings associated with your numbers.',
    description: 'Discover personalized numerology insights and explore the meanings associated with your numbers. Calculate your core Life Path, Expression, and Soul numbers from your birth date and name to uncover complementary personal insights alongside your zodiac profile.',
    exampleUseCases: [
      {
        title: 'Life Path Number',
        description: 'Calculate your core Life Path number to discover your overarching life journey and natural strengths.',
      },
      {
        title: 'Expression & Soul Numbers',
        description: 'Explore the deeper vibrational meanings behind your full birth name and innermost motivations.',
      },
      {
        title: 'Cycle & Timing Trends',
        description: 'Understand which personal numerological cycle you are experiencing to guide your current focus.',
      },
    ],
    appValueHighlights: [
      'Automated Life Path, Expression, and Soul Urge calculations',
      'Harmonious integration with your zodiac profile and signs',
      'Clear, accessible explanations of numerical meanings',
      'Actionable insights for personal growth and timing',
    ],
    relatedCluster: 'personality',
    seoTitle: 'Numerology & Life Path Insights | AI Zodiac App',
    seoDescription: 'Discover personalized numerology insights and explore the meanings associated with your life numbers in the AI Zodiac app.',
  },
  {
    slug: 'chinese-zodiac',
    id: 'chinese_zodiac',
    title: 'Chinese Zodiac',
    tagline: 'Discover your Chinese zodiac animal and element and explore personalized Chinese horoscope insights.',
    icon: '/images/ic_chinese.png',
    userBenefit: 'Discover your Chinese zodiac animal and element and explore personalized Chinese horoscope insights.',
    description: 'Discover your Chinese zodiac animal and element and explore personalized Chinese horoscope insights. Rooted in traditional Eastern lunar wisdom, explore how the 12 animal archetypes and 5 natural elements (Wood, Fire, Earth, Metal, Water) provide a rich, holistic perspective.',
    exampleUseCases: [
      {
        title: 'Lunar Animal Sign',
        description: 'Find your authentic Chinese zodiac animal based on your exact lunar birth year.',
      },
      {
        title: 'The Five Elements',
        description: 'Learn whether your year corresponds to Wood, Fire, Earth, Metal, or Water, and what that reveals.',
      },
      {
        title: 'Annual Lunar Guidance',
        description: 'Explore how the reigning animal sign of the current lunar year interacts with your personal energy.',
      },
    ],
    appValueHighlights: [
      'Accurate lunar calendar conversion for exact birth dates',
      'Profiles for all 12 animal signs and 5 elemental cycles',
      'Personalized Chinese horoscope insights for the lunar year',
      'East-meets-West integrated personality perspective',
    ],
    relatedCluster: 'personality',
    seoTitle: 'Chinese Zodiac & Lunar Horoscope Insights | AI Zodiac App',
    seoDescription: 'Discover your Chinese zodiac animal, five elements, and personalized lunar horoscope insights in the AI Zodiac app.',
  },
  {
    slug: 'personal-calendar',
    id: 'personal_astro_calendar',
    title: 'Personal Astro Calendar',
    tagline: 'Explore important astrological periods and personalized cosmic timing with your personal astrology calendar.',
    icon: '/images/ic_calendar.png',
    userBenefit: 'Explore important astrological periods and personalized cosmic timing with your personal astrology calendar.',
    description: 'Explore important astrological periods and personalized cosmic timing with your personal astrology calendar. Stay informed about upcoming key transit phases, lunar cycles, and peak focus windows to pace your activities and personal decisions with clarity.',
    exampleUseCases: [
      {
        title: 'Cosmic Timing Windows',
        description: 'Identify supportive astrological periods for initiating projects, creative pursuits, or relaxation.',
      },
      {
        title: 'Moon Phases & Lunations',
        description: 'Follow New Moon and Full Moon cycles and their unique significance for your personal sign.',
      },
      {
        title: 'Planetary Highlights',
        description: 'Receive thoughtful guidance on how to navigate key astrological cycles throughout the month.',
      },
    ],
    appValueHighlights: [
      'Interactive personal astrological calendar tailored to your sign',
      'Tracking for important astrological periods and lunar phases',
      'Practical guidance for timing personal decisions and focus',
      'Seamless companion to your daily and weekly horoscopes',
    ],
    relatedCluster: 'personality',
    seoTitle: 'Personal Astro Calendar & Cosmic Timing | AI Zodiac App',
    seoDescription: 'Explore important astrological periods and personalized cosmic timing with your personal astrology calendar in the AI Zodiac app.',
  },
] as const;

// -----------------------------------------------------------------------------
// Interactive Tools Definitions
// -----------------------------------------------------------------------------

export interface ToolMeta {
  readonly slug: string;
  readonly title: string;
  readonly tagline: string;
  readonly icon: string;
  readonly description: string;
  readonly features: readonly string[];
}

export const TOOLS_LIST: readonly ToolMeta[] = [
  {
    slug: 'zodiac-sign',
    title: 'Zodiac Sign Finder',
    tagline: 'Calculate your exact Sun sign, element, and modality from your birth date.',
    icon: '/images/ic_traits.png',
    description: 'A lightweight, instant calculator that determines your Western zodiac sign, elemental group, and core personality traits.',
    features: [
      'Instant birth date lookup',
      'Elemental & modality categorization',
      'Ruling planet overview',
      'Core archetype strengths and focus areas',
    ],
  },
  {
    slug: 'compatibility',
    title: 'Compatibility Preview',
    tagline: 'Explore the elemental chemistry and communication dynamics between two signs.',
    icon: '/images/ic_love.png',
    description: 'Select any two zodiac signs to view an elemental compatibility overview, relationship strengths, and conscious dialogue tips.',
    features: [
      '144 sign-pair combinations',
      'Elemental dynamics (Fire, Earth, Air, Water)',
      'Communication & friction insights',
      'Relationship harmony guide',
    ],
  },
  {
    slug: 'birth-chart',
    title: 'Birth Chart Preview',
    tagline: 'Explore the key dimensions of your astrological profile and houses.',
    icon: '/images/ic_horoscope.png',
    description: 'Input your birth details to preview the core components of your astrological profile and see what full chart insights reveal.',
    features: [
      'Sun sign and core personality baseline',
      'Educational breakdown of the 12 astrological houses',
      'Planetary influences overview',
      'Interactive chart preview categories',
    ],
  },
] as const;

// -----------------------------------------------------------------------------
// Intent & CTA Taxonomy
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

import { buildPlayStoreUrl } from '@/lib/conversion/playStore';

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
    headline: 'Get personalized astrological insights calibrated to your zodiac sign and birth details.',
    buttonText: 'Get AI Zodiac App',
    buttonLink: buildPlayStoreUrl({ utmSource: 'website', utmMedium: 'editorial_cta', utmCampaign: 'personalized_insights', utmContent: 'article_cta' }),
  },
  birth_chart: {
    type: 'birth_chart',
    headline: 'Calculate your ascendant, explore your sign, and discover personalized horoscope insights.',
    buttonText: 'Get AI Zodiac App',
    buttonLink: buildPlayStoreUrl({ utmSource: 'website', utmMedium: 'editorial_cta', utmCampaign: 'birth_chart', utmContent: 'article_cta' }),
  },
  ask_ai: {
    type: 'ask_ai',
    headline: 'Ask the AI astrologer personalized questions about your profile and zodiac information.',
    buttonText: 'Get AI Zodiac App',
    buttonLink: buildPlayStoreUrl({ utmSource: 'website', utmMedium: 'editorial_cta', utmCampaign: 'ask_ai', utmContent: 'article_cta' }),
  },
  compatibility: {
    type: 'compatibility',
    headline: 'Explore love compatibility and relationship dynamics based on astrology and birth details.',
    buttonText: 'Get AI Zodiac App',
    buttonLink: buildPlayStoreUrl({ utmSource: 'website', utmMedium: 'editorial_cta', utmCampaign: 'compatibility', utmContent: 'article_cta' }),
  },
  explore_zodiac: {
    type: 'explore_zodiac',
    headline: 'Discover your zodiac personality traits, ascendant, and personalized daily horoscopes.',
    buttonText: 'Get AI Zodiac App',
    buttonLink: buildPlayStoreUrl({ utmSource: 'website', utmMedium: 'editorial_cta', utmCampaign: 'explore_zodiac', utmContent: 'article_cta' }),
  },
};

// -----------------------------------------------------------------------------
// Layer B: Compatibility Taxonomy & Pair Model Foundation
// -----------------------------------------------------------------------------

export interface CompatibilityPairMeta {
  readonly sign1: WesternZodiacSign;
  readonly sign2: WesternZodiacSign;
  readonly pairSlug: string;
  readonly title: string;
  readonly elementMatch: string;
  readonly score: number;
  readonly headline: string;
  readonly dynamicSummary: string;
  readonly communicationTips: string;
}

export interface CompatibilityPairPageData {
  readonly slug: string;
  readonly sign1Id: WesternZodiacSign;
  readonly sign2Id: WesternZodiacSign;
  readonly title: string;
  readonly elementDynamic: string;
  readonly modalityDynamic: string;
  readonly overviewParagraphs: readonly string[];
  readonly attractionFactors: readonly { readonly title: string; readonly description: string }[];
  readonly relationshipStrengths: readonly { readonly title: string; readonly description: string }[];
  readonly potentialChallenges: readonly { readonly title: string; readonly description: string }[];
  readonly communicationDynamics: {
    readonly overview: string;
    readonly sign1Style: string;
    readonly sign2Style: string;
    readonly bridgeStrategy: string;
  };
  readonly romanticDynamics: string;
  readonly friendshipDynamics: string;
  readonly mutualNeeds: {
    readonly sign1NeedsFromSign2: readonly string[];
    readonly sign2NeedsFromSign1: readonly string[];
  };
  readonly deeperAstrologyContext: {
    readonly summary: string;
    readonly synastryFactors: readonly string[];
  };
  readonly relatedPairSlugs: readonly string[];
  readonly relatedArticleSlugs: readonly string[];
  readonly seoTitle: string;
  readonly seoDescription: string;
}

// -----------------------------------------------------------------------------
// Layer C: Horoscope Tiers Taxonomy Foundation
// -----------------------------------------------------------------------------

export type HoroscopeTier = 'daily' | 'weekly' | 'monthly' | 'yearly';

export interface HoroscopeTierMeta {
  readonly id: HoroscopeTier;
  readonly name: string;
  readonly frequency: string;
  readonly description: string;
  readonly icon: string;
  readonly valueHighlights: readonly string[];
}

export const HOROSCOPE_TIERS: readonly HoroscopeTierMeta[] = [
  {
    id: 'daily',
    name: 'Daily Horoscopes',
    frequency: 'Every Morning',
    description: 'Instant morning calibration on planetary transits, moon phases, and current opportunities.',
    icon: '/images/ic_personal.png',
    valueHighlights: [
      'Morning focus and emotional clarity',
      'Daily transit reflections calibrated to your sign',
      'Actionable self-reflection prompts',
    ],
  },
  {
    id: 'weekly',
    name: 'Weekly Forecasts',
    frequency: 'Every Monday',
    description: '7-day cosmic outlook covering professional momentum, emotional shifts, and key opportunities.',
    icon: '/images/ic_calendar.png',
    valueHighlights: [
      'Weekly rhythm and strategic pacing',
      'Key transit highlights for career and relationships',
      'Mindful goal-setting guidance',
    ],
  },
  {
    id: 'monthly',
    name: 'Monthly Overviews',
    frequency: '1st of Every Month',
    description: 'In-depth breakdown of major solar seasons, retrogrades, and seasonal transitions.',
    icon: '/images/ic_horoscope.png',
    valueHighlights: [
      'Major planetary shifts and retrogrades',
      'New Moon and Full Moon integration',
      'Longer-term thematic alignment',
    ],
  },
  {
    id: 'yearly',
    name: 'Yearly Forecasts',
    frequency: 'Annual Blueprint',
    description: 'Macro-astrology landscape detailing annual themes, eclipses, and milestone growth windows.',
    icon: '/images/ic_extras.png',
    valueHighlights: [
      'Year-long planetary transit map',
      'Major eclipse and transit cycles',
      'Annual life-path evolution',
    ],
  },
] as const;

// -----------------------------------------------------------------------------
// App Acquisition: 3-Level CTA System Taxonomy
// -----------------------------------------------------------------------------

export type CtaLevel = 1 | 2 | 3;

export type AcquisitionIntent = 'awareness' | 'consideration' | 'conversion' | 'retention';

export interface ContextualLinkMeta {
  readonly title: string;
  readonly description: string;
  readonly href: string;
  readonly badge?: string | undefined;
  readonly icon?: string | undefined;
}

export interface FeatureCtaMapping {
  readonly featureId: AppFeatureId;
  readonly featureSlug: string;
  readonly title: string;
  readonly badge: string;
  readonly headline: string;
  readonly description: string;
  readonly icon: string;
  readonly valueHighlights: readonly string[];
  readonly utmCampaign: string;
}

