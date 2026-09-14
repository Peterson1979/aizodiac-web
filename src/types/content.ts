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
export type ZodiacModality = 'cardinal' | 'fixed' | 'mutable';

export interface ZodiacSignMeta {
  readonly id: WesternZodiacSign;
  readonly name: string;
  readonly symbol: string;
  readonly dateRange: string;
  readonly element: ZodiacElement;
  readonly modality: ZodiacModality;
  readonly rulingPlanet: string;
  readonly traits: readonly string[];
  readonly description: string;
}

export const WESTERN_ZODIAC_SIGNS: readonly ZodiacSignMeta[] = [
  {
    id: 'aries',
    name: 'Aries',
    symbol: '♈',
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
    id: 'personalized_astrology',
    title: 'Personal Horoscope',
    tagline: 'Astrological guidance calibrated to your exact planetary transits and natal coordinates.',
    icon: '✨',
    userBenefit: 'Transcend broad sun-sign forecasts with daily, weekly, and monthly insights computed specifically for your unique birth chart.',
    description: 'Traditional horoscopes address 1/12th of the global population as a uniform group. AI Zodiac synthesizes current planetary movements with your exact natal houses and aspect degrees to deliver timely, actionable mindfulness and planning guidance.',
    exampleUseCases: [
      {
        title: 'Daily Rhythm & Focus',
        description: 'Understand how today’s lunar ingress and planetary aspects influence your energy levels and mental clarity.',
      },
      {
        title: 'Transit Cycle Timing',
        description: 'Prepare in advance for upcoming personal transits such as Jupiter returns, Saturn aspects, or Venus activations.',
      },
      {
        title: 'Retrograde Navigation',
        description: 'Receive thoughtful, constructive advice on how to use Mercury or Mars retrogrades for reflection rather than panic.',
      },
    ],
    appValueHighlights: [
      'Multi-planetary transit calculation updated in real time',
      'Daily, weekly, and monthly forecasting layers',
      'Actionable reflection prompts for conscious daily planning',
      'Contextual integration with your complete natal chart',
    ],
    relatedCluster: 'personality',
    seoTitle: 'Personal Horoscope & Real-Time Transits | AI Zodiac',
    seoDescription: 'Discover personalized daily and weekly horoscopes calibrated to your exact birth chart and planetary transits in AI Zodiac.',
  },
  {
    slug: 'birth-chart',
    id: 'birth_chart',
    title: 'Birth Chart (Natal Chart)',
    tagline: 'Your complete celestial blueprint decoded through modern astronomical calculation.',
    icon: '🌌',
    userBenefit: 'Explore your Sun, Moon, Rising, 10 planetary placements, 12 astrological houses, and geometric aspects.',
    description: 'A natal chart is the astronomical snapshot of the sky at your exact minute and location of birth. AI Zodiac maps out your full chart wheel, providing deep psychological interpretations for each placement and aspect without mystical jargon.',
    exampleUseCases: [
      {
        title: 'The Big Three Synthesis',
        description: 'Uncover how your conscious purpose (Sun), emotional core (Moon), and outer lens (Rising) work together.',
      },
      {
        title: 'House Placements & Life Arenas',
        description: 'Discover how planets in your 10th (career), 7th (partnership), and 4th (home) houses shape your priorities.',
      },
      {
        title: 'Geometric Aspects',
        description: 'Understand the collaborative trines and creative tension of squares and oppositions between your planets.',
      },
    ],
    appValueHighlights: [
      'Interactive visual chart wheel with tap-to-inspect placements',
      'Accurate Placidus & Whole Sign house system calculations',
      'Aspect grids detailing exact degrees and harmonic orbs',
      'In-depth psychological synthesis for each placement',
    ],
    relatedCluster: 'astrology-guides',
    seoTitle: 'Birth Chart Synthesis & Natal Chart Calculator | AI Zodiac',
    seoDescription: 'Calculate and decode your complete natal birth chart with Sun, Moon, Rising, houses, and planetary aspects in AI Zodiac.',
  },
  {
    slug: 'ask-ai',
    id: 'ask_the_ai',
    title: 'Ask the AI Astrologer',
    tagline: 'Conversational astrological intelligence grounded in your personal natal parameters.',
    icon: '💬',
    userBenefit: 'Ask specific, contextual questions about your career, timing, and relationships, receiving clear astrological reasoning.',
    description: 'Unlike generic chatbots that guess or pull random horoscope text, AI Zodiac’s AI advisor has full awareness of your natal chart coordinates and current planetary ephemeris, delivering articulate, non-fatalistic answers tailored to your life stage.',
    exampleUseCases: [
      {
        title: 'Career & Timing Crossroads',
        description: '“What does my 10th house Saturn transit signify for my professional development over the next six months?”',
      },
      {
        title: 'Relationship Communication',
        description: '“How can I navigate emotional differences with my partner given our Moon sign placements?”',
      },
      {
        title: 'Self-Reflection & Habit Cycles',
        description: '“What planetary strengths in my chart can I draw on to build greater creative discipline?”',
      },
    ],
    appValueHighlights: [
      'Full natal chart context retained across conversations',
      'Real-time ephemeris lookup for ongoing transits',
      'Thoughtful, non-fatalistic advice focused on personal agency',
      'Private, secure conversation environment',
    ],
    relatedCluster: 'ai-astrology',
    seoTitle: 'Ask the AI Astrologer — Interactive Astrological Advisor | AI Zodiac',
    seoDescription: 'Engage with AI Zodiac’s conversational astrological advisor for contextual clarity on your natal chart, transits, and life questions.',
  },
  {
    slug: 'love-compatibility',
    id: 'love_compatibility',
    title: 'Love & Relationship Compatibility',
    tagline: 'Multi-layered synastry analysis evaluating emotional bonds, communication, and mutual growth.',
    icon: '💖',
    userBenefit: 'Go beyond Sun signs to understand how your Moon, Venus, Mars, and Mercury interact with a partner’s placements.',
    description: 'Genuine relational astrology looks at the harmonic resonance between two complete charts. AI Zodiac highlights where emotional intuition flows naturally and provides constructive communication strategies where elemental differences arise.',
    exampleUseCases: [
      {
        title: 'Emotional Attachment (Moon Synastry)',
        description: 'Learn how your subconscious emotional needs align with your partner’s style of comfort and safety.',
      },
      {
        title: 'Love Languages & Values (Venus)',
        description: 'Discover how each person expresses affection, aesthetic preferences, and partnership ideals.',
      },
      {
        title: 'Conflict & Chemistry (Mars & Mercury)',
        description: 'Understand passion dynamics and practical dialogue patterns during moments of friction.',
      },
    ],
    appValueHighlights: [
      'Dual-chart synastry matrix comparing all planetary pairs',
      'Relationship harmony breakdown across emotional, mental, and physical axes',
      'Constructive communication guidance for challenging aspects',
      'Composite chart synthesis for long-term partnerships',
    ],
    relatedCluster: 'relationships',
    seoTitle: 'Love Compatibility & Synastry Chart Analysis | AI Zodiac',
    seoDescription: 'Explore multi-dimensional relationship compatibility and synastry analysis between complete birth charts in AI Zodiac.',
  },
  {
    slug: 'numerology',
    id: 'numerology',
    title: 'Numerology Alignments',
    tagline: 'Harmonic numerical vibrations decoded alongside your planetary chart.',
    icon: '🔢',
    userBenefit: 'Calculate and decode your Life Path, Expression, and Soul Urge numbers in harmony with your celestial blueprint.',
    description: 'Pythagorean numerology provides an insightful numerical counterpoint to astrological natal charts. AI Zodiac decodes your core numbers from your birth date and full birth name, showing how mathematical frequencies mirror your celestial strengths.',
    exampleUseCases: [
      {
        title: 'Life Path Number',
        description: 'Identify your fundamental life trajectory, core lessons, and inherent vibrational strengths.',
      },
      {
        title: 'Soul Urge (Heart’s Desire)',
        description: 'Uncover the innermost motivations and spiritual desires driving your subconscious choices.',
      },
      {
        title: 'Personal Year Cycles',
        description: 'Understand which 9-year vibrational phase you are currently experiencing to pace major decisions.',
      },
    ],
    appValueHighlights: [
      'Automated Life Path, Expression, and Soul Urge calculations',
      'Integration with your zodiac Sun and Ascendant archetypes',
      'Personal Year and Personal Month cycle forecasting',
      'Detailed numerical vibration breakdowns',
    ],
    relatedCluster: 'personality',
    seoTitle: 'Numerology & Life Path Number Calculator | AI Zodiac',
    seoDescription: 'Decode your Life Path, Expression, and Soul Urge numbers alongside your astrological natal chart in AI Zodiac.',
  },
  {
    slug: 'ascendant',
    id: 'ascendant_number',
    title: 'Ascendant & Rising Sign Insights',
    tagline: 'Discover your rising sign harmonics and how you meet the world.',
    icon: '🌅',
    userBenefit: 'Learn how your Rising Sign (Ascendant) sets your 12 house cusps and establishes your outward life navigation style.',
    description: 'The Ascendant represents the exact zodiac degree rising on the eastern horizon at the moment of your birth. It determines the entire structure of your 12 houses and describes your physical vitality, spontaneous reactions, and first impression.',
    exampleUseCases: [
      {
        title: 'The Persona & First Impressions',
        description: 'Understand how others naturally perceive your presence and how you initiate new beginnings.',
      },
      {
        title: 'Chart Ruler Identification',
        description: 'Discover the ruling planet of your Ascendant and how its sign and house placement guide your life journey.',
      },
      {
        title: 'House Cusp Orientation',
        description: 'See how your Rising sign positions the areas of career, relationship, and family across your chart.',
      },
    ],
    appValueHighlights: [
      'High-precision Ascendant degree calculation based on birth time & coordinates',
      'Chart ruler identification with transit tracking',
      'Rising sign visual aesthetics and behavioral traits',
      'First house dynamics and life navigation guidance',
    ],
    relatedCluster: 'astrology-guides',
    seoTitle: 'Ascendant & Rising Sign Calculator and Guide | AI Zodiac',
    seoDescription: 'Calculate and understand your Rising Sign (Ascendant), chart ruler, and first house dynamics in AI Zodiac.',
  },
  {
    slug: 'chinese-horoscope',
    id: 'chinese_horoscope',
    title: 'Chinese Horoscope & Eastern Wisdom',
    tagline: 'Eastern lunar zodiac archetypes and five-element energetic cycles.',
    icon: '🐉',
    userBenefit: 'Combine 12 animal archetypes with the 5 Elements (Wood, Fire, Earth, Metal, Water) for holistic lunar calendar wisdom.',
    description: 'Rooted in thousands of years of observational cosmology, the Eastern zodiac pairs twelve animal archetypes with the cyclical movement of Yin/Yang and the Five Elements. AI Zodiac bridges Eastern and Western traditions for complete holistic perspective.',
    exampleUseCases: [
      {
        title: 'Animal Sign & Elemental Year',
        description: 'Discover your true Lunar birth animal and whether your year was Wood, Fire, Earth, Metal, or Water.',
      },
      {
        title: 'Inner & Secret Animals',
        description: 'Learn how your birth month and birth hour determine your Inner and Secret animal archetypes.',
      },
      {
        title: 'Annual Lunar Forecasts',
        description: 'Explore how the reigning animal sign of the current lunar year interacts with your personal energy.',
      },
    ],
    appValueHighlights: [
      'Precise lunar calendar conversion for exact birth dates',
      'Full Four Pillars of Destiny (BaZi) baseline overview',
      'Five-element balance analysis',
      'East-meets-West integrated personality synthesis',
    ],
    relatedCluster: 'personality',
    seoTitle: 'Chinese Horoscope & Lunar Zodiac Calculator | AI Zodiac',
    seoDescription: 'Discover your Chinese zodiac animal archetype, five-element balance, and lunar year forecasts in AI Zodiac.',
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
    icon: '♈',
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
    icon: '💖',
    description: 'Select any two zodiac signs to view an elemental compatibility overview, relationship strengths, and conscious dialogue tips.',
    features: [
      '144 sign-pair combinations',
      'Elemental dynamics (Fire, Earth, Air, Water)',
      'Communication & friction insights',
      'Synastry preview guide',
    ],
  },
  {
    slug: 'birth-chart',
    title: 'Birth Chart Preview',
    tagline: 'Explore the structural dimensions of your natal chart blueprint.',
    icon: '🌌',
    description: 'Input your birth details to preview the three core tiers of a natal chart, inspect house categories, and see what a full chart reveals.',
    features: [
      'Sun sign and luminary baseline',
      'Educational breakdown of the 12 astrological houses',
      'Planetary aspect overview',
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
    buttonText: 'Explore in AI Zodiac App',
    buttonLink: '/#features',
  },
  birth_chart: {
    type: 'birth_chart',
    headline: 'Discover the full celestial blueprint of your birth chart with AI Zodiac.',
    buttonText: 'Calculate Your Chart in App',
    buttonLink: '/#features',
  },
  ask_ai: {
    type: 'ask_ai',
    headline: 'Have a specific question about your transits, career, or relationships?',
    buttonText: 'Ask AI Zodiac in App',
    buttonLink: '/#features',
  },
  compatibility: {
    type: 'compatibility',
    headline: 'Understand the relational dynamics between your sign and your partner.',
    buttonText: 'Explore Compatibility in App',
    buttonLink: '/#features',
  },
  explore_zodiac: {
    type: 'explore_zodiac',
    headline: 'Dive deeper into the 12 zodiac archetypes and celestial mechanics.',
    buttonText: 'Discover Zodiac Signs',
    buttonLink: '/#zodiac',
  },
};
