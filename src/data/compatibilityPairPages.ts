import type { CompatibilityPairPageData } from '@/types/content';

/**
 * AI Zodiac - Canonical Compatibility Pair Landing Page Dataset (V1.1)
 * 
 * Deep, search-validated relationship landing pages with nuanced astrological interpretation.
 * No arbitrary percentages or claims of objective superiority; structured around psychological
 * archetypes, elemental dynamics, communication harmonics, and synastry depth.
 */
export const COMPATIBILITY_PAIR_PAGES: Record<string, CompatibilityPairPageData> = {
  'aries-and-leo': {
    slug: 'aries-and-leo',
    sign1Id: 'aries',
    sign2Id: 'leo',
    title: 'Aries and Leo Compatibility',
    elementDynamic: 'Fire + Fire (Harmonious Elemental Trine)',
    modalityDynamic: 'Cardinal Fire (Aries) + Fixed Fire (Leo)',
    overviewParagraphs: [
      'Aries and Leo form one of the most vibrant, high-vitality connections in the zodiac. As fellow Fire signs, they share an instinctive understanding of each other’s enthusiasm, ambition, and zest for life. When the pioneering spark of Cardinal Aries meets the radiant warmth of Fixed Leo, the result is an inspiring blend of action, mutual admiration, and creative momentum.',
      'In astrological tradition, signs of the same element form a harmonious trine aspect (120°), indicating a natural flow of energy. Rather than struggling to decipher each other’s motives, Aries and Leo immediately recognize a kindred spirit who values courage, directness, and authentic self-expression.'
    ],
    attractionFactors: [
      {
        title: 'Unapologetic Confidence & Magnetism',
        description: 'Aries is drawn to Leo’s regal presence and warm charisma, while Leo is captivated by Aries’ bold initiative and fearless authenticity.'
      },
      {
        title: 'Shared Passion for Adventure',
        description: 'Both signs despise monotony; they energize each other with spontaneous plans, creative projects, and high-spirited social adventures.'
      },
      {
        title: 'Direct, Expressive Chemistry',
        description: 'Neither sign plays subtle mind games. Their mutual transparency creates fast-building trust and passionate romantic chemistry.'
      }
    ],
    relationshipStrengths: [
      {
        title: 'Mutual Encouragement & Inspiration',
        description: 'Leo champions Aries’ bold new ventures, while Aries wholeheartedly admires Leo’s creative brilliance and leadership.'
      },
      {
        title: 'High Vitality & Shared Joy',
        description: 'Their relationship is characterized by playful optimism, infectious laughter, and a shared capacity to rebound quickly from setbacks.'
      },
      {
        title: 'Courageous Loyalty',
        description: 'When committed, both Aries and Leo are fiercely protective of each other, forming an unbreakable united front against outside difficulties.'
      }
    ],
    potentialChallenges: [
      {
        title: 'Ego Clashes & Battle for the Spotlight',
        description: 'Both signs have strong personalities and natural leadership instincts. Friction occurs when neither partner is willing to step back and share the center stage.'
      },
      {
        title: 'Impulsive Temperaments',
        description: 'Because both are fiery, heated disagreements can ignite rapidly. Quick tempers need to be met with intentional cooling-off periods.'
      },
      {
        title: 'Patience with Daily Routine',
        description: 'Both crave excitement, which can lead to neglecting mundane logistics, long-term budgeting, or domestic follow-through.'
      }
    ],
    communicationDynamics: {
      overview: 'Communication between Aries and Leo is spirited, dynamic, and direct. They speak candidly, often expressing ideas with theatrical enthusiasm and quick banter.',
      sign1Style: 'Aries communicates with rapid speed, unfiltered honesty, and a desire for immediate action.',
      sign2Style: 'Leo communicates with warmth, heart-centered conviction, and a desire for dignified respect.',
      bridgeStrategy: 'Balance playful debate with generous praise. Aries should remember to celebrate Leo’s contributions, while Leo can appreciate Aries’ directness without taking spontaneous critiques to heart.'
    },
    romanticDynamics: 'In romance, Aries and Leo generate sparks from their first encounter. Aries initiates thrilling dates, grand romantic gestures, and spontaneous getaways, while Leo infuses the relationship with warmth, loyalty, and affectionate adoration. They both view love as a joyful adventure, making their romantic bond passionate, demonstrative, and deeply celebratory.',
    friendshipDynamics: 'As friends or creative collaborators, Aries and Leo make a formidable team. Aries excels at kicking off bold projects and breaking through initial barriers, while Leo provides the sustained focus and aesthetic polish to see the vision through. Their shared humor and high energy make them natural companions for sports, travel, and social events.',
    mutualNeeds: {
      sign1NeedsFromSign2: [
        'Freedom to initiate independent projects without feeling micromanaged',
        'Direct, straightforward feedback rather than passive brooding',
        'A partner who can match their active pace and enthusiasm'
      ],
      sign2NeedsFromSign1: [
        'Genuine verbal appreciation and acknowledgment of their efforts',
        'Loyalty and respect for their dignity, especially in public settings',
        'Consistent romantic warmth and attentiveness'
      ]
    },
    deeperAstrologyContext: {
      summary: 'While Sun sign trines offer natural baseline rapport, complete synastry depends on the interactions between Moon, Venus, Mars, and the Ascendants of both charts.',
      synastryFactors: [
        'Moon Placements: If their Moon signs are compatible (e.g. Fire or Air Moons), emotional intimacy develops with effortless safety.',
        'Venus & Mars Harmony: Aries is ruled by Mars (action) and Leo is ruled by the Sun (vitality). Supportive Venus-Mars aspects between their charts enhance romantic attraction and longevity.',
        'House Overlays: When Leo planets fall in Aries’ 5th House of Joy or Aries planets fall in Leo’s 9th House of Expansion, mutual creative growth thrives.'
      ]
    },
    relatedPairSlugs: ['gemini-and-libra', 'taurus-and-virgo', 'scorpio-and-cancer'],
    relatedArticleSlugs: [
      'elemental-harmony-fire-earth-air-water',
      'zodiac-compatibility-beyond-sun-signs',
      'the-big-three-sun-moon-rising-signs'
    ],
    seoTitle: 'Aries and Leo Compatibility: Love, Communication & Synastry | AI Zodiac',
    seoDescription: 'Explore Aries and Leo compatibility in love, friendship, and communication. Discover the strengths, challenges, and deeper synastry of this Fire pairing.'
  },
  'gemini-and-libra': {
    slug: 'gemini-and-libra',
    sign1Id: 'gemini',
    sign2Id: 'libra',
    title: 'Gemini and Libra Compatibility',
    elementDynamic: 'Air + Air (Harmonious Elemental Trine)',
    modalityDynamic: 'Mutable Air (Gemini) + Cardinal Air (Libra)',
    overviewParagraphs: [
      'Gemini and Libra share a sparkling, intellectually stimulating connection that flows with natural ease. As Air signs, both approach the world through ideas, conversation, social connections, and cultural curiosity. When Gemini’s quick-witted adaptability joins Libra’s refined sense of harmony and partnership, they form an uplifting union built on mutual respect and shared mental wavelength.',
      'In traditional astrology, this pairing benefits from a 120° trine aspect, creating seamless conversational chemistry. Neither sign feels suffocated or misunderstood; instead, they give each other the mental space and social freedom necessary to thrive both together and independently.'
    ],
    attractionFactors: [
      {
        title: 'Effortless Conversational Chemistry',
        description: 'From their very first dialogue, Gemini and Libra find endless topics to explore, moving effortlessly from witty banter to profound philosophy.'
      },
      {
        title: 'Aesthetic & Social Appreciation',
        description: 'Gemini admires Libra’s elegance, charm, and diplomatic grace, while Libra appreciates Gemini’s clever intellect and playful humor.'
      },
      {
        title: 'Mutual Need for Social Freedom',
        description: 'Both value active social lives, cultural events, and friendships, eliminating jealousy over independent interests.'
      }
    ],
    relationshipStrengths: [
      {
        title: 'Mental Synchronization & Lifelong Learning',
        description: 'They inspire each other to read, explore art, travel, and engage in continuous learning, ensuring their bond never grows stagnant.'
      },
      {
        title: 'Diplomatic Harmony & Adaptability',
        description: 'Libra’s natural tact softens Gemini’s restless tangents, while Gemini’s flexibility helps Libra navigate unexpected changes with ease.'
      },
      {
        title: 'Egalitarian Partnership',
        description: 'Their relationship operates as a true meeting of minds, where decisions are weighed collaboratively with fairness and respect.'
      }
    ],
    potentialChallenges: [
      {
        title: 'Decision-Making Paralysis',
        description: 'With Gemini exploring infinite possibilities and Libra endlessly weighing both sides of every choice, making concrete decisions can become prolonged.'
      },
      {
        title: 'Emotional Avoidance & Over-Intellectualization',
        description: 'Because both are Air signs, they may analyze emotions logically rather than allowing themselves to sit with uncomfortable, raw vulnerability.'
      },
      {
        title: 'Lack of Practical Grounding',
        description: 'Living in the realm of concepts and social engagements can lead to neglecting practical domestic routines or long-term financial structure.'
      }
    ],
    communicationDynamics: {
      overview: 'Communication between Gemini and Libra is their greatest superpower. Conversations are articulate, respectful, lively, and filled with creative brainstorming.',
      sign1Style: 'Gemini communicates with rapid-fire questions, diverse trivia, and agile shifts between topics.',
      sign2Style: 'Libra communicates with thoughtful diplomacy, seeking balance and listening attentively to create consensus.',
      bridgeStrategy: 'Anchor mental brainstorms with clear action steps. Set designated times to discuss deeper emotional feelings without turning them into intellectual debates.'
    },
    romanticDynamics: 'In love, Gemini and Libra cultivate a romance that feels like being with your favorite companion and intellectual peer. Libra brings romance, beautiful ambiance, and thoughtful attentiveness, while Gemini brings humor, spontaneity, and playful surprise. Their romantic expression is light, affectionate, and deeply communicative, keeping the relationship feeling perpetually youthful.',
    friendshipDynamics: 'As friends, Gemini and Libra are the social heart of any group. They love co-hosting gatherings, attending cultural exhibitions, and dissecting the latest books, films, or current affairs. Gemini provides the spontaneous ideas for where to go, while Libra ensures everyone feels welcomed and included.',
    mutualNeeds: {
      sign1NeedsFromSign2: [
        'Patience with shifting curiosities and a willingness to explore varied interests',
        'Intellectual engagement without excessive emotional pressure',
        'Gentle reminders when projects need completion'
      ],
      sign2NeedsFromSign1: [
        'Consistency and reliability in shared commitments',
        'Verbal reassurance and romantic attentiveness',
        'Collaboration when making important relationship choices'
      ]
    },
    deeperAstrologyContext: {
      summary: 'A complete astrological synastry chart between Gemini and Libra evaluates the balance of Mercury (communication) and Venus (love), alongside their Moon and Rising placements.',
      synastryFactors: [
        'Mercury Connections: Harmonious Mercury aspects between their charts enable instant telepathic rapport and smooth conflict resolution.',
        'Moon & Water/Earth Placements: Having Earth or Water placements elsewhere in their charts (such as Moon in Taurus or Cancer) provides the emotional depth and grounding this Air duo needs.',
        'Venus & 7th House Synergies: Libra’s ruler Venus connecting with Gemini’s natal chart creates lasting romantic devotion and aesthetic alignment.'
      ]
    },
    relatedPairSlugs: ['aries-and-leo', 'taurus-and-virgo', 'scorpio-and-cancer'],
    relatedArticleSlugs: [
      'astrology-and-communication-mercury-placements',
      'elemental-harmony-fire-earth-air-water',
      'zodiac-compatibility-beyond-sun-signs'
    ],
    seoTitle: 'Gemini and Libra Compatibility: Love, Communication & Synastry | AI Zodiac',
    seoDescription: 'Discover Gemini and Libra compatibility in love, friendship, and conversation. Explore the strengths, challenges, and synastry of this Air sign partnership.'
  },
  'taurus-and-virgo': {
    slug: 'taurus-and-virgo',
    sign1Id: 'taurus',
    sign2Id: 'virgo',
    title: 'Taurus and Virgo Compatibility',
    elementDynamic: 'Earth + Earth (Harmonious Elemental Trine)',
    modalityDynamic: 'Fixed Earth (Taurus) + Mutable Earth (Virgo)',
    overviewParagraphs: [
      'Taurus and Virgo form one of the most stable, reliable, and mutually supportive partnerships in astrology. As fellow Earth signs, they share a deep reverence for tangible quality, consistency, and practical follow-through. When Taurus’ calm, steadfast grounding pairs with Virgo’s meticulous care and thoughtful service, they create an enduring sanctuary of peace and material security.',
      'Their astrological trine aspect (120°) ensures an instinctive resonance regarding values, daily habits, and long-term goals. Neither partner needs to prove their reliability through dramatic gestures; instead, trust is built organically through everyday devotion, mutual respect, and quiet dependability.'
    ],
    attractionFactors: [
      {
        title: 'Quiet Mutual Respect & Dependability',
        description: 'Taurus appreciates Virgo’s sharp mind, work ethic, and attention to detail, while Virgo feels profoundly calmed by Taurus’ serene, unshakeable presence.'
      },
      {
        title: 'Shared Value for Quality & Simplicity',
        description: 'Both prefer authentic craftsmanship, comfortable home environments, and genuine connections over superficial flashiness.'
      },
      {
        title: 'Emotional Safety & Low-Drama Connection',
        description: 'Neither sign enjoys unnecessary chaos; their grounded temperaments create immediate mutual trust and emotional relaxation.'
      }
    ],
    relationshipStrengths: [
      {
        title: 'Unrivaled Practical Teamwork',
        description: 'Together they manage finances, household projects, and career goals with exceptional efficiency and long-term foresight.'
      },
      {
        title: 'Complementary Earth Modalities',
        description: 'Taurus provides the steadfast foundation and endurance (Fixed), while Virgo offers the flexibility and problem-solving solutions (Mutable).'
      },
      {
        title: 'Sensory Comfort & Healing Nurture',
        description: 'Taurus reminds hardworking Virgo to slow down and enjoy physical pleasures, while Virgo supports Taurus with thoughtful care and wellness routines.'
      }
    ],
    potentialChallenges: [
      {
        title: 'Perfectionism vs. Stubborn Resistance',
        description: 'Virgo’s desire to optimize systems can sometimes feel like criticism to Taurus, who may entrench themselves in stubborn resistance.'
      },
      {
        title: 'Risk of Predictability & Routine Overload',
        description: 'Because both love comfort and stability, they can slip into overly rigid daily routines that lack spontaneous excitement.'
      },
      {
        title: 'Anxiety & Worry Loops',
        description: 'Virgo’s analytical mind can spiral into worry about the future, which Taurus must gently soothe rather than dismiss as overthinking.'
      }
    ],
    communicationDynamics: {
      overview: 'Communication between Taurus and Virgo is calm, practical, and constructive. They focus on realistic solutions and meaningful discussions rather than abstract speculation.',
      sign1Style: 'Taurus communicates with steady pacing, calm reassurance, and straightforward practicality.',
      sign2Style: 'Virgo communicates with detailed precision, keen observation, and helpful suggestions.',
      bridgeStrategy: 'Virgo should frame feedback with gentle appreciation, recognizing Taurus’ dedicated efforts, while Taurus can listen openly to Virgo’s helpful ideas without feeling personally criticized.'
    },
    romanticDynamics: 'In romance, Taurus and Virgo express love through tangible devotion, acts of service, and physical affection. Taurus brings sensual indulgence, fine dining, and cozy tranquility, creating a safe space where self-conscious Virgo can fully relax. Virgo responds with dedicated care, noticing every small preference of Taurus. Their love is not about dramatic highs and lows, but about an enduring, deeply comforting bond that grows sweeter with time.',
    friendshipDynamics: 'As friends or business partners, Taurus and Virgo are virtually unstoppable. They execute projects with precision, respect each other’s time, and provide rock-solid support during life challenges. They share hobbies centered around nature, cooking, gardening, artisanal crafts, and mindful wellness.',
    mutualNeeds: {
      sign1NeedsFromSign2: [
        'Gentle appreciation and patience with their deliberate pace',
        'Freedom from hyper-critical scrutiny over small imperfections',
        'Physical affection and shared moments of quiet relaxation'
      ],
      sign2NeedsFromSign1: [
        'Reassurance and emotional grounding when feeling anxious or overwhelmed',
        'Recognition of their thoughtful contributions and acts of service',
        'Willingness to adapt when improvements are genuinely beneficial'
      ]
    },
    deeperAstrologyContext: {
      summary: 'While an Earth trine provides seamless day-to-day compatibility, looking at Venus (Taurus’ ruler) and Mercury (Virgo’s ruler) reveals the complete picture of their love synastry.',
      synastryFactors: [
        'Venus-Mercury Aspects: Harmonious aspects between Venus and Mercury allow romantic desires and intellectual discussions to align gracefully.',
        'Water Placements for Emotional Flow: Water placements (such as Moon in Cancer or Pisces) soften their Earth pragmatism with rich emotional vulnerability.',
        '2nd & 6th House Connections: Taurus’ connection to the 2nd house (values) and Virgo’s to the 6th house (wellness) make them masterful life-builders.'
      ]
    },
    relatedPairSlugs: ['aries-and-leo', 'gemini-and-libra', 'scorpio-and-cancer'],
    relatedArticleSlugs: [
      'elemental-harmony-fire-earth-air-water',
      'understanding-relationship-patterns-through-astrology',
      'zodiac-compatibility-beyond-sun-signs'
    ],
    seoTitle: 'Taurus and Virgo Compatibility: Love, Trust & Synastry | AI Zodiac',
    seoDescription: 'Explore Taurus and Virgo compatibility in love, communication, and synastry. Discover the strengths, challenges, and enduring harmony of this Earth pairing.'
  },
  'scorpio-and-cancer': {
    slug: 'scorpio-and-cancer',
    sign1Id: 'scorpio',
    sign2Id: 'cancer',
    title: 'Scorpio and Cancer Compatibility',
    elementDynamic: 'Water + Water (Harmonious Elemental Trine)',
    modalityDynamic: 'Fixed Water (Scorpio) + Cardinal Water (Cancer)',
    overviewParagraphs: [
      'Scorpio and Cancer share one of the most emotionally profound, intuitively attuned connections in the zodiac. As fellow Water signs, they communicate through unspoken empathy, psychological depth, and protective loyalty. When Cancer’s nurturing warmth meets Scorpio’s transformative intensity, they create a safe sanctuary where true vulnerability can flourish without fear.',
      'In astrology, the Water trine (120°) represents a soulful emotional current. Both signs understand what it means to feel deeply, value absolute privacy, and protect those they cherish. Rather than having to justify their emotional rhythms, they find a partner who honors and matches their depth.'
    ],
    attractionFactors: [
      {
        title: 'Instinctive Psychic Rapport',
        description: 'From their very first encounter, Cancer and Scorpio sense each other’s emotional undercurrents, often understanding feelings without needing words.'
      },
      {
        title: 'Shared Devotion to Emotional Truth',
        description: 'Neither sign settles for superficial bonds; they are mutually drawn to authentic, soulful connections and unwavering loyalty.'
      },
      {
        title: 'Protective Chemistry & Safety',
        description: 'Cancer feels secure in Scorpio’s fierce strength and loyalty, while Scorpio lets down their guard in Cancer’s gentle, non-judgmental embrace.'
      }
    ],
    relationshipStrengths: [
      {
        title: 'Unshakeable Loyalty & Trust',
        description: 'Once committed, both signs are fiercely dedicated, creating a haven where betrayal is unthinkable and trust is sacred.'
      },
      {
        title: 'Emotional Depth & Healing Sanctuary',
        description: 'They help each other heal past wounds, transforming vulnerabilities into sources of emotional resilience and strength.'
      },
      {
        title: 'Complementary Protective Energy',
        description: 'Cancer nurtures the inner emotional foundation (Cardinal), while Scorpio defends and transforms the external boundaries (Fixed).'
      }
    ],
    potentialChallenges: [
      {
        title: 'Emotional Brooding & Hidden Grievances',
        description: 'Both signs can retreat behind defensive shells when hurt. Unspoken resentment or passive withdrawal can stall honest communication.'
      },
      {
        title: 'Possessiveness & Over-Attachment',
        description: 'Their intense emotional bond can occasionally slip into over-protectiveness or fear of loss, requiring healthy individual space.'
      },
      {
        title: 'Navigating Mood Shifts',
        description: 'Cancer’s fluctuating lunar moods and Scorpio’s brooding intensity require mutual patience and gentle check-ins.'
      }
    ],
    communicationDynamics: {
      overview: 'Communication between Scorpio and Cancer is nuanced, empathetic, and emotionally honest. They speak with heartfelt vulnerability and listen with deep intuition.',
      sign1Style: 'Scorpio communicates with penetrating focus, seeking absolute truth and meaningful emotional clarity.',
      sign2Style: 'Cancer communicates with gentle tenderness, sharing feelings through personal stories and caring support.',
      bridgeStrategy: 'Practice proactive verbal openness rather than assuming the other knows what is wrong. Create a safe space where emotional needs can be spoken aloud without fear of judgment.'
    },
    romanticDynamics: 'In love, Scorpio and Cancer create a timeless, deeply romantic bond. Scorpio offers intense devotion, passionate intimacy, and protective vigilance, while Cancer surrounds Scorpio with tender domestic care, affectionate warmth, and unconditional emotional acceptance. Their physical and emotional intimacy is deeply intertwined, making their connection feel like a true soul sanctuary.',
    friendshipDynamics: 'As close friends, Scorpio and Cancer share a lifelong loyalty. They are the friends who answer late-night calls, guard each other’s deepest secrets, and stand together through all of life’s highs and lows. Their mutual understanding creates an effortless, enduring companionship.',
    mutualNeeds: {
      sign1NeedsFromSign2: [
        'Absolute emotional fidelity and transparent honesty',
        'Patience while they gradually lower their protective walls',
        'A safe haven where intense emotions are welcomed and understood'
      ],
      sign2NeedsFromSign1: [
        'Gentle reassurance and consistent romantic tenderness',
        'Constructive dialogue during conflict without harsh emotional withdrawal',
        'Respect for their domestic space, family bonds, and sensitivity'
      ]
    },
    deeperAstrologyContext: {
      summary: 'A complete synastry analysis between Scorpio and Cancer examines the interplay between the Moon (Cancer’s ruler) and Pluto/Mars (Scorpio’s rulers), along with natal Venus placements.',
      synastryFactors: [
        'Moon-Pluto Connections: Fosters transformative emotional depth and psychic connection, requiring conscious cultivation of trust.',
        'Venus Placements: Harmonious Venus aspects bring sweetness, romantic romance, and aesthetic alignment to their emotional ocean.',
        '4th & 8th House Overlays: Deeply activates themes of emotional ancestry, home building, and spiritual vulnerability.'
      ]
    },
    relatedPairSlugs: ['aries-and-leo', 'gemini-and-libra', 'taurus-and-virgo'],
    relatedArticleSlugs: [
      'understanding-relationship-patterns-through-astrology',
      'elemental-harmony-fire-earth-air-water',
      'zodiac-compatibility-beyond-sun-signs'
    ],
    seoTitle: 'Scorpio and Cancer Compatibility: Love, Synastry & Trust | AI Zodiac',
    seoDescription: 'Explore Scorpio and Cancer compatibility in love, intimacy, and communication. Discover the strengths, challenges, and deep synastry of this Water pairing.'
  }
};

export const COMPATIBILITY_PAIR_PAGES_LIST: readonly CompatibilityPairPageData[] = Object.values(COMPATIBILITY_PAIR_PAGES);

/**
 * Helper to fetch a pair page by slug
 */
export function getCompatibilityPairPage(slug: string): CompatibilityPairPageData | undefined {
  return COMPATIBILITY_PAIR_PAGES[slug];
}
