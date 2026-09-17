import type { ZodiacSignHubData, WesternZodiacSign } from '@/types/content';

/**
 * AI Zodiac - Canonical 12 Western Zodiac Sign Hub Dataset
 * 
 * Verified astrological facts, psychological archetypes, elemental dynamics,
 * communication styles, birth chart context, relationship compatibility mappings,
 * and deep links to guides, tools, and app features.
 */
export const ZODIAC_SIGN_HUBS: Record<WesternZodiacSign, ZodiacSignHubData> = {
  aries: {
    id: 'aries',
    name: 'Aries',
    symbol: '♈',
    iconUrl: '/images/ic_aries.png',
    dateRange: 'March 21 – April 19',
    element: 'fire',
    modality: 'cardinal',
    rulingPlanet: 'Mars',
    polarity: 'Yang / Masculine / Assertive',
    house: '1st House of Self, Identity & Physical Vitality',
    tarotCard: 'The Emperor (IV)',
    luckyNumbers: [1, 9, 18, 27],
    luckyDay: 'Tuesday',
    traits: ['Pioneering', 'Courageous', 'Direct', 'Passionate', 'Dynamic'],
    description: 'The first sign of the zodiac, Aries initiates the astrological cycle with fearless passion, unstoppable momentum, and instinctual leadership.',
    overviewParagraphs: [
      'Aries is the dynamic spark of the zodiac. As a Cardinal Fire sign ruled by Mars—the planet of action, courage, and determination—Aries approaches life head-on with boundless enthusiasm, raw honesty, and an instinct to lead rather than follow.',
      'Represented by the Ram, Aries individuals are natural pioneers who thrive on challenges and fresh beginnings. They possess a fierce authenticity that cuts through ambiguity, inspiring others with their vibrant optimism and unwavering confidence.',
      'In personal growth, Aries learns to balance quick instincts with patience, turning impulsive sparks of inspiration into long-term masteries.'
    ],
    strengths: [
      { title: 'Fearless Initiative', description: 'Quick to take bold action when others hesitate, turning visions into reality.' },
      { title: 'Direct Honesty', description: 'Communicates clearly with transparent intentions, avoiding passive games.' },
      { title: 'Infectious Passion', description: 'Infuses projects and relationships with infectious energy and enthusiasm.' },
      { title: 'Resilience Under Pressure', description: 'Rebounds rapidly from setbacks with renewed determination and focus.' }
    ],
    growthAreas: [
      { title: 'Impatience with Details', description: 'Can struggle with repetitive routines and long incubation periods.' },
      { title: 'Impulsive Reactions', description: 'May react quickly in heated moments before fully processing emotional nuances.' },
      { title: 'Delegation Challenges', description: 'Tendency to carry every burden alone rather than relying on collaborative timing.' }
    ],
    relationshipOverview: 'In love and friendships, Aries seeks passionate, honest connections with partners who respect their independence while matching their zest for adventure. They show devotion through direct gestures, fierce loyalty, and shared life adventures.',
    communicationStyle: {
      summary: 'Aries communicates with direct, unfiltered clarity and enthusiastic momentum. They state what they think quickly and transparently, preferring straightforward honesty over veiled nuances.',
      inDialogue: 'Fast-paced and energetic. Aries loves brainstorming bold initiatives, speaking with passion, and getting straight to the point without excessive preamble.',
      inConflict: 'Addresses disagreements immediately and head-on. While tempers can flare rapidly, Aries rarely holds grudges once the issue has been openly aired and resolved.'
    },
    birthChartContext: {
      summary: 'While an Aries Sun defines your conscious identity and pioneering drive, your complete natal chart provides the deeper emotional and behavioral context.',
      sunRole: 'Your Aries Sun acts as your central vitality, courage, and core creative engine.',
      moonInteraction: 'Your Moon sign reveals how you process emotional vulnerability privately, softening or intensifying your Mars-driven outward instinct.',
      risingInteraction: 'Your Ascendant (Rising sign) shapes your physical presence and the immediate first impression you project before your Aries Sun fully emerges.'
    },
    bestCompatibility: [
      { sign: 'leo', why: 'Fellow Fire sign sharing fiery enthusiasm, mutual admiration, and creative synergy.' },
      { sign: 'sagittarius', why: 'Explorative harmony fueled by shared love for freedom, truth, and adventure.' },
      { sign: 'gemini', why: 'Air fuels fire; quick-witted banter and mental agility keep the spark perpetually alive.' },
      { sign: 'aquarius', why: 'Visionary independence and mutual respect create an exciting, unconventional bond.' }
    ],
    challengingCompatibility: [
      { sign: 'cancer', why: 'Direct Mars energy can occasionally clash with Cancer’s sensitive, protective emotional rhythm.' },
      { sign: 'capricorn', why: 'Cardinal clash between Aries’ desire for rapid speed and Capricorn’s methodical discipline.' }
    ],
    horoscopeFocus: 'Mars transits, solar season vitality, initiating new creative chapters, career pivots, and emotional patience.',
    relatedGuideSlugs: [
      'elemental-harmony-fire-earth-air-water',
      'the-big-three-sun-moon-rising-signs',
      'zodiac-signs-conflict-resolution-styles',
      'understanding-zodiac-personality-patterns'
    ],
    relatedToolSlugs: ['zodiac-sign', 'compatibility', 'birth-chart'],
    recommendedFeatureSlug: 'zodiac-traits',
    recommendedFeatureTitle: 'Zodiac Signs & Personality in AI Zodiac',
    seoTitle: 'Aries Zodiac Sign Guide: Personality, Dates, Love & Traits | AI Zodiac',
    seoDescription: 'Discover Aries personality traits, dates (Mar 21 - Apr 19), love compatibility, strengths, and daily horoscope guidance in AI Zodiac.'
  },
  taurus: {
    id: 'taurus',
    name: 'Taurus',
    symbol: '♉',
    iconUrl: '/images/ic_taurus.png',
    dateRange: 'April 20 – May 20',
    element: 'earth',
    modality: 'fixed',
    rulingPlanet: 'Venus',
    polarity: 'Yin / Feminine / Receptive',
    house: '2nd House of Personal Values, Worth & Material Abundance',
    tarotCard: 'The Hierophant (V)',
    luckyNumbers: [2, 6, 15, 24],
    luckyDay: 'Friday',
    traits: ['Grounded', 'Steadfast', 'Sensual', 'Patient', 'Loyal'],
    description: 'Taurus anchors the zodiac with steadfast devotion, exquisite sensory refinement, and the deliberate power to cultivate lasting prosperity.',
    overviewParagraphs: [
      'Taurus is the great stabilizer of the zodiac. As a Fixed Earth sign ruled by Venus—the planet of beauty, love, and material harmony—Taurus embodies reliability, tactile appreciation for the physical world, and an enduring sense of inner peace.',
      'Represented by the Bull, Taurus possesses tremendous tenacity. Once committed to a goal, a friendship, or a partner, they remain steadfast through thick and thin, building foundations that withstand the test of time.',
      'Their growth journey centers on embracing healthy change, balancing their love of comfort with openness to transformation.'
    ],
    strengths: [
      { title: 'Unwavering Reliability', description: 'A rock of dependability whose word is backed by tangible, consistent follow-through.' },
      { title: 'Sensory Refinement', description: 'A natural eye for beauty, quality, aesthetic balance, and harmonious environments.' },
      { title: 'Patience & Persistence', description: 'Masters of the slow-burn approach, cultivating long-term success without rushing.' },
      { title: 'Calming Presence', description: 'Radiates a soothing, grounded aura that puts others at ease.' }
    ],
    growthAreas: [
      { title: 'Resistance to Change', description: 'Can become overly comfortable with established routines and hesitant to adapt.' },
      { title: 'Stubbornness', description: 'May entrench themselves in viewpoints when pushed too forcefully.' },
      { title: 'Material Attachment', description: 'Tendency to associate emotional security strictly with physical certainty.' }
    ],
    relationshipOverview: 'Taurus approaches romance with profound loyalty, physical affection, and an instinct to build a safe, luxurious haven. They take their time opening up, but once trust is earned, their devotion is lifelong.',
    communicationStyle: {
      summary: 'Taurus communicates in a calm, deliberate, and grounded cadence. They weigh their words carefully, offering practical advice and steadfast reassurance.',
      inDialogue: 'Patient, thoughtful, and pragmatic. Taurus listens attentively, preferring substance and realistic facts over speculative hype or rushed debates.',
      inConflict: 'Remains composed until pushed past their limits. In disagreements, they stand their ground firmly and need time and space to process changes before yielding.'
    },
    birthChartContext: {
      summary: 'Your Taurus Sun establishes your instinct for stability and sensory excellence, but your full natal blueprint maps your emotional depth and life timing.',
      sunRole: 'Your Taurus Sun anchors your values, persistence, and ability to build lasting tangible security.',
      moonInteraction: 'Your Moon sign indicates your instinctive comfort needs and emotional baseline, explaining how you seek safety in intimate connections.',
      risingInteraction: 'Your Rising sign governs how you navigate new social environments and the initial style through which you interact with the world.'
    },
    bestCompatibility: [
      { sign: 'virgo', why: 'Harmonious Earth alignment; shared practicality, shared values, and mutual respect.' },
      { sign: 'capricorn', why: 'Powerhouse Earth partnership built on mutual ambition, structural security, and deep loyalty.' },
      { sign: 'cancer', why: 'Earth nourishes Water; gentle, nurturing domestic comfort and emotional warmth.' },
      { sign: 'pisces', why: 'Venusian romance meets mystical depth, blending practical care with imaginative devotion.' }
    ],
    challengingCompatibility: [
      { sign: 'leo', why: 'Fixed sign standoff: Taurus values quiet practicality while Leo craves expressive grandiosity.' },
      { sign: 'aquarius', why: 'Fixed Earth meets Fixed Air; clash between traditional grounding and unpredictable innovation.' }
    ],
    horoscopeFocus: 'Venus transits, financial grounding, physical wellness, relationship stability, and creative self-worth.',
    relatedGuideSlugs: [
      'elemental-harmony-fire-earth-air-water',
      'understanding-relationship-patterns-through-astrology',
      'guide-to-the-12-astrological-houses',
      'understanding-zodiac-personality-patterns'
    ],
    relatedToolSlugs: ['zodiac-sign', 'compatibility', 'birth-chart'],
    recommendedFeatureSlug: 'personal-horoscope',
    recommendedFeatureTitle: 'Personalized Daily Horoscopes in AI Zodiac',
    seoTitle: 'Taurus Zodiac Sign Guide: Personality, Dates, Love & Traits | AI Zodiac',
    seoDescription: 'Explore Taurus personality traits, dates (Apr 20 - May 20), love compatibility, ruling planet Venus, and daily horoscope guidance in AI Zodiac.'
  },
  gemini: {
    id: 'gemini',
    name: 'Gemini',
    symbol: '♊',
    iconUrl: '/images/ic_gemini.png',
    dateRange: 'May 21 – June 20',
    element: 'air',
    modality: 'mutable',
    rulingPlanet: 'Mercury',
    polarity: 'Yang / Masculine / Assertive',
    house: '3rd House of Communication, Intellect & Immediate Environment',
    tarotCard: 'The Lovers (VI)',
    luckyNumbers: [3, 5, 14, 23],
    luckyDay: 'Wednesday',
    traits: ['Curious', 'Adaptable', 'Articulate', 'Versatile', 'Quick-witted'],
    description: 'Gemini weaves ideas, connections, and conversational brilliance with lightning-fast intellectual agility and vibrant curiosity.',
    overviewParagraphs: [
      'Gemini is the intellectual breeze of the zodiac. As a Mutable Air sign ruled by Mercury—the messenger planet of communication and cognitive synthesis—Gemini approaches reality through questioning, learning, and sharing knowledge.',
      'Symbolized by the Celestial Twins, Gemini perceives multiple sides to every story. They are master communicators, quick to adapt to new environments, and possess an insatiable thirst for fascinating ideas, books, and cultural dialogues.',
      'Their growth path involves cultivating mental grounding, turning scattered curiosities into concentrated expertise and emotional depth.'
    ],
    strengths: [
      { title: 'Intellectual Versatility', description: 'Effortlessly grasps multifaceted concepts and synthesizes complex information.' },
      { title: 'Charming Communication', description: 'Engaging conversationalist who bridges social circles with wit and empathy.' },
      { title: 'Rapid Adaptability', description: 'Thrives in dynamic environments and adjusts seamlessly to changing circumstances.' },
      { title: 'Youthful Curiosity', description: 'Maintains a lifelong enthusiasm for learning, exploring, and experimenting.' }
    ],
    growthAreas: [
      { title: 'Mental Overstimulation', description: 'Can suffer from information overload and nervous restlessness.' },
      { title: 'Difficulty with Closure', description: 'Tendency to initiate numerous projects while struggling to finish them all.' },
      { title: 'Emotional Detachment', description: 'May analyze feelings intellectually rather than experiencing them fully.' }
    ],
    relationshipOverview: 'In love, Gemini needs intellectual stimulation, witty banter, and freedom from stifling routines. They thrive with partners who are also curious companions and fascinating conversationalists.',
    communicationStyle: {
      summary: 'Gemini communicates with lightning-fast wit, multifaceted curiosity, and engaging conversational charm. They connect ideas across diverse subjects effortlessly.',
      inDialogue: 'Inquisitive, animated, and versatile. Gemini thrives on playful banter, questions assumptions, and keeps dialogues lively and intellectually stimulating.',
      inConflict: 'Approaches friction through rational debate and verbal analysis. They seek to understand differing perspectives logically, though they benefit from tuning into underlying feelings.'
    },
    birthChartContext: {
      summary: 'Your Gemini Sun powers your agile intellect and curiosity, while the rest of your natal chart integrates emotional depth, long-term purpose, and grounding.',
      sunRole: 'Your Gemini Sun represents your mental adaptability, communication talent, and drive to explore multifaceted concepts.',
      moonInteraction: 'Your Moon sign reveals your underlying emotional security needs, determining whether your feelings are analytical, water-deep, or action-oriented.',
      risingInteraction: 'Your Ascendant dictates your outward presentation and the energetic filter through which you first perceive new situations.'
    },
    bestCompatibility: [
      { sign: 'libra', why: 'Air harmony; shared intellectual resonance, aesthetic refinement, and lively conversation.' },
      { sign: 'aquarius', why: 'Visionary mental connection; shared progressive ideals and mutual respect for freedom.' },
      { sign: 'aries', why: 'Air feeds Fire; energetic spontaneity and playful banter make for constant excitement.' },
      { sign: 'leo', why: 'Dramatic flair meets sparkling wit, creating a vibrant, fun-loving social dynamic.' }
    ],
    challengingCompatibility: [
      { sign: 'virgo', why: 'Shared Mercury ruler with differing modes: Gemini explores broad ideas while Virgo focuses on meticulous order.' },
      { sign: 'pisces', why: 'Mutable Air logic can struggle to interpret Pisces’ deep, fluid ocean of unspoken emotions.' }
    ],
    horoscopeFocus: 'Mercury retrogrades and transits, social connections, learning opportunities, writing, and mindful focus.',
    relatedGuideSlugs: [
      'astrology-and-communication-mercury-placements',
      'the-big-three-sun-moon-rising-signs',
      'elemental-harmony-fire-earth-air-water',
      'questions-to-ask-an-ai-astrologer'
    ],
    relatedToolSlugs: ['zodiac-sign', 'compatibility', 'birth-chart'],
    recommendedFeatureSlug: 'ask-ai',
    recommendedFeatureTitle: 'Ask the AI Astrologer in AI Zodiac',
    seoTitle: 'Gemini Zodiac Sign Guide: Personality, Dates, Love & Traits | AI Zodiac',
    seoDescription: 'Discover Gemini personality traits, dates (May 21 - Jun 20), love compatibility, Mercury ruler dynamics, and daily horoscope guidance.'
  },
  cancer: {
    id: 'cancer',
    name: 'Cancer',
    symbol: '♋',
    iconUrl: '/images/ic_cancer.png',
    dateRange: 'June 21 – July 22',
    element: 'water',
    modality: 'cardinal',
    rulingPlanet: 'Moon',
    polarity: 'Yin / Feminine / Receptive',
    house: '4th House of Home, Roots, Family & Emotional Sanctuary',
    tarotCard: 'The Chariot (VII)',
    luckyNumbers: [2, 7, 11, 20],
    luckyDay: 'Monday',
    traits: ['Intuitive', 'Nurturing', 'Protective', 'Empathetic', 'Tenacious'],
    description: 'Cancer nurtures the human experience with profound emotional depth, protective loyalty, and an instinct to build safe, loving sanctuaries.',
    overviewParagraphs: [
      'Cancer is the emotional anchor of the zodiac. As a Cardinal Water sign ruled by the Moon—the celestial beacon of tides, instincts, and memories—Cancer operates through deep intuitive empathy and emotional wisdom.',
      'Represented by the Crab, Cancer carries a protective shell guarding an extraordinarily tender, caring heart. They are fiercely loyal protectors of home and family, gifted with an uncanny ability to sense the unspoken feelings of those around them.',
      'Their personal growth lies in setting healthy emotional boundaries, recognizing that vulnerability and self-protection can coexist harmoniously.'
    ],
    strengths: [
      { title: 'Profound Empathy', description: 'Instinctively senses emotional undercurrents and provides compassionate support.' },
      { title: 'Fierce Loyalty', description: 'Stands unwaveringly by loved ones through all seasons of life.' },
      { title: 'Sanctuary Creator', description: 'Cultivates warm, nourishing environments where others feel safe and valued.' },
      { title: 'Tenacious Memory', description: 'Remembers meaningful details and celebrates sacred personal milestones.' }
    ],
    growthAreas: [
      { title: 'Over-Defensiveness', description: 'Can retreat behind their protective shell when sensing perceived criticism.' },
      { title: 'Mood Fluctuations', description: 'Deeply influenced by lunar cycles, requiring quiet time to reset energy.' },
      { title: 'Holding Onto Past Wounds', description: 'May hold nostalgia or old grievances longer than is beneficial.' }
    ],
    relationshipOverview: 'In love, Cancer is devoted, tender, and deeply protective. They desire emotional security, mutual trust, and a shared vision of domestic peace, offering a lifetime of wholehearted care in return.',
    communicationStyle: {
      summary: 'Cancer communicates with emotional sensitivity, gentle intuition, and protective warmth. They listen with their heart and sense subtle feelings beneath spoken words.',
      inDialogue: 'Empathetic, nurturing, and reflective. Cancer shares personal stories, validates the feelings of others, and creates a safe atmosphere for honest dialogue.',
      inConflict: 'May initially retreat into their protective shell to process emotional hurt. When feeling safe, they communicate deeply about loyalty and mutual respect.'
    },
    birthChartContext: {
      summary: 'Your Cancer Sun embodies your emotional wisdom and protective loyalty, while your full natal chart reveals your mental habits and career drives.',
      sunRole: 'Your Cancer Sun guides your instinct to nurture, protect, and create enduring emotional sanctuaries.',
      moonInteraction: 'As Cancer is ruled by the Moon, your natal Moon sign and house placement hold extraordinary significance in shaping your emotional rhythms and instincts.',
      risingInteraction: 'Your Rising sign forms your external demeanor, revealing whether you meet new people with cautious reserve or immediate charm.'
    },
    bestCompatibility: [
      { sign: 'scorpio', why: 'Deep Water union; psychic emotional resonance, absolute loyalty, and profound intimacy.' },
      { sign: 'pisces', why: 'Soulful Water harmony; shared empathy, artistic imagination, and intuitive understanding.' },
      { sign: 'taurus', why: 'Water nourishes Earth; shared love for cozy sanctuary, loyalty, and lasting stability.' },
      { sign: 'virgo', why: 'Care meets practical devotion, forming a supportive, mutually healing partnership.' }
    ],
    challengingCompatibility: [
      { sign: 'aries', why: 'Aries’ blunt directness can accidentally wound Cancer’s subtle emotional sensibilities.' },
      { sign: 'libra', why: 'Cardinal square: Cancer feels deeply from the gut, while Libra balances relationships intellectually.' }
    ],
    horoscopeFocus: 'Lunar phases (New & Full Moons), domestic transitions, emotional healing, family roots, and intuitive instincts.',
    relatedGuideSlugs: [
      'understanding-relationship-patterns-through-astrology',
      'the-big-three-sun-moon-rising-signs',
      'guide-to-the-12-astrological-houses',
      'elemental-harmony-fire-earth-air-water'
    ],
    relatedToolSlugs: ['zodiac-sign', 'compatibility', 'birth-chart'],
    recommendedFeatureSlug: 'personal-calendar',
    recommendedFeatureTitle: 'Personal Astro Calendar in AI Zodiac',
    seoTitle: 'Cancer Zodiac Sign Guide: Personality, Dates, Love & Traits | AI Zodiac',
    seoDescription: 'Explore Cancer personality traits, dates (Jun 21 - Jul 22), love compatibility, lunar ruler insights, and daily horoscope guidance.'
  },
  leo: {
    id: 'leo',
    name: 'Leo',
    symbol: '♌',
    iconUrl: '/images/ic_leo.png',
    dateRange: 'July 23 – August 22',
    element: 'fire',
    modality: 'fixed',
    rulingPlanet: 'Sun',
    polarity: 'Yang / Masculine / Assertive',
    house: '5th House of Creativity, Self-Expression, Joy & Romance',
    tarotCard: 'Strength (VIII)',
    luckyNumbers: [1, 4, 10, 19],
    luckyDay: 'Sunday',
    traits: ['Radiant', 'Generous', 'Creative', 'Heart-centered', 'Charismatic'],
    description: 'Leo radiates vitality and warm self-expression, inspiring the world through creative courage, noble generosity, and regal leadership.',
    overviewParagraphs: [
      'Leo is the radiant sovereign of the zodiac. As a Fixed Fire sign ruled by the Sun—the gravitational center of our solar system—Leo shines with natural warmth, magnetic charisma, and an unstoppable creative life force.',
      'Represented by the Lion, Leo leads from the heart. They are fiercely generous champions of their tribe, possessing a dramatic flair, an instinct for joy, and an inspiring confidence that invites others to celebrate their own uniqueness.',
      'Their growth path centers on learning that true confidence does not require external applause; their inner light shines brightest when lifting others up.'
    ],
    strengths: [
      { title: 'Regal Generosity', description: 'Gives unconditionally to loved ones, showering them with warmth, gifts, and loyalty.' },
      { title: 'Natural Leadership', description: 'Inspires and motivates teams with authentic passion and high-spirited energy.' },
      { title: 'Creative Authenticity', description: 'Expresses artistic vision with courage, bringing color and vitality to life.' },
      { title: 'Unshakeable Loyalty', description: 'Stands as a fierce protector and dedicated ally to those in their inner circle.' }
    ],
    growthAreas: [
      { title: 'Craving External Validation', description: 'Can feel deflated when their creative efforts are not publicly praised.' },
      { title: 'Fixed Pride', description: 'Can struggle to admit mistakes or ask for help in vulnerable moments.' },
      { title: 'Dramatic Reactions', description: 'May amplify minor disputes into theatrical confrontations.' }
    ],
    relationshipOverview: 'In love, Leo is romantic, devoted, and grand in affection. They seek a partner who celebrates their accomplishments, matches their passion, and treats love as an inspiring, joyful adventure.',
    communicationStyle: {
      summary: 'Leo communicates with radiant warmth, theatrical flair, and heart-centered generosity. They uplift and inspire listeners through authentic self-expression.',
      inDialogue: 'Charismatic, expressive, and encouraging. Leo loves storytelling, sharing laughter, and offering generous praise to celebrate the achievements of others.',
      inConflict: 'Protects their dignity and values honesty. While pride can be triggered by criticism, sincere warmth and mutual respect quickly restore harmony.'
    },
    birthChartContext: {
      summary: 'Your Leo Sun fuels your creative brilliance and noble vitality, while your broader birth chart reveals the personal complexities and private layers of your soul.',
      sunRole: 'Your Leo Sun represents your conscious confidence, creative calling, and instinct to lead with generosity.',
      moonInteraction: 'Your Moon sign highlights your private emotional sanctuary, showing where you need quiet nurture away from the public spotlight.',
      risingInteraction: 'Your Ascendant sets the tone for your personal style and the immediate aura you cast in social settings.'
    },
    bestCompatibility: [
      { sign: 'aries', why: 'Dynamic Fire connection; mutual passion, respect, and thrilling shared ambitions.' },
      { sign: 'sagittarius', why: 'Joyous Fire alliance; shared optimism, wanderlust, and limitless creative freedom.' },
      { sign: 'gemini', why: 'Sparkling chemistry; playful banter and lively social energy keep life exciting.' },
      { sign: 'libra', why: 'Venus meets the Sun; glamorous, harmonious, and deeply romantic partnership.' }
    ],
    challengingCompatibility: [
      { sign: 'scorpio', why: 'Fixed clash of titans; Leo’s radiant transparency versus Scorpio’s secretive intensity.' },
      { sign: 'taurus', why: 'Fixed resistance; clash between Leo’s flair for luxury and Taurus’ cautious thriftiness.' }
    ],
    horoscopeFocus: 'Solar transits, creative breakthroughs, leadership opportunities, romance, and cultivating inner self-worth.',
    relatedGuideSlugs: [
      'elemental-harmony-fire-earth-air-water',
      'zodiac-signs-conflict-resolution-styles',
      'the-big-three-sun-moon-rising-signs',
      'understanding-zodiac-personality-patterns'
    ],
    relatedToolSlugs: ['zodiac-sign', 'compatibility', 'birth-chart'],
    recommendedFeatureSlug: 'zodiac-traits',
    recommendedFeatureTitle: 'Zodiac Signs & Traits in AI Zodiac',
    seoTitle: 'Leo Zodiac Sign Guide: Personality, Dates, Love & Traits | AI Zodiac',
    seoDescription: 'Discover Leo personality traits, dates (Jul 23 - Aug 22), love compatibility, solar energy, and personalized horoscope guidance.'
  },
  virgo: {
    id: 'virgo',
    name: 'Virgo',
    symbol: '♍',
    iconUrl: '/images/ic_virgo.png',
    dateRange: 'August 23 – September 22',
    element: 'earth',
    modality: 'mutable',
    rulingPlanet: 'Mercury',
    polarity: 'Yin / Feminine / Receptive',
    house: '6th House of Daily Wellness, Craftsmanship, Systems & Service',
    tarotCard: 'The Hermit (IX)',
    luckyNumbers: [5, 14, 23, 32],
    luckyDay: 'Wednesday',
    traits: ['Analytical', 'Discerning', 'Service-oriented', 'Precise', 'Dedicated'],
    description: 'Virgo refines the world with analytical brilliance, practical craftsmanship, and a devoted heart dedicated to purposeful service.',
    overviewParagraphs: [
      'Virgo is the master craftsman and healer of the zodiac. As a Mutable Earth sign ruled by Mercury, Virgo channels mental sharpness into practical excellence, organization, wellness, and tangible solutions.',
      'Represented by the Maiden holding a sheaf of wheat, Virgo separates the essential from the superfluous with peerless discernment. They show love not through grand speeches, but through thoughtful actions, meticulous care, and supportive presence.',
      'Their growth journey involves trading perfectionism for acceptance, understanding that imperfection is an organic part of human beauty.'
    ],
    strengths: [
      { title: 'Keen Analytical Mind', description: 'Spots inefficiencies and problem areas instantly, offering clear solutions.' },
      { title: 'Devoted Service', description: 'Finds genuine fulfillment in improving lives and supporting community wellness.' },
      { title: 'Master Craftsmanship', description: 'Brings precision, reliability, and thorough execution to every endeavor.' },
      { title: 'Practical Wisdom', description: 'Grounded advisor who offers realistic, actionable insights in times of chaos.' }
    ],
    growthAreas: [
      { title: 'Hyper-Critical Self-Talk', description: 'Sets impossibly high standards and judges themselves harshly.' },
      { title: 'Analysis Paralysis', description: 'May over-scrutinize details and delay decisions while seeking perfection.' },
      { title: 'Difficulty Relaxing', description: 'Always feels a compulsive need to fix something or remain busy.' }
    ],
    relationshipOverview: 'In love, Virgo is deeply faithful, attentive, and quietly romantic. They observe their partner’s small needs and fulfill them seamlessly, seeking a mature partner who values emotional stability and honesty.',
    communicationStyle: {
      summary: 'Virgo communicates with analytical precision, practical clarity, and thoughtful discernment. They focus on constructive insights and helpful solutions.',
      inDialogue: 'Organized, attentive, and service-oriented. Virgo is an excellent listener who offers realistic solutions, actionable feedback, and keen observational details.',
      inConflict: 'Focuses on identifying root causes and practical remedies. They prefer calm, logical discussions over emotional dramatization.'
    },
    birthChartContext: {
      summary: 'Your Virgo Sun provides your analytical craftsmanship and dedication to improvement, while your complete chart maps your passion, creativity, and intuition.',
      sunRole: 'Your Virgo Sun directs your focus toward functional excellence, health, organization, and meaningful service.',
      moonInteraction: 'Your Moon sign reveals how you self-soothe and process vulnerability without the pressure of perfectionism.',
      risingInteraction: 'Your Rising sign defines how others initially perceive your demeanor and approach to everyday challenges.'
    },
    bestCompatibility: [
      { sign: 'taurus', why: 'Earth perfection; shared commitment to reliability, sensory comfort, and quiet loyalty.' },
      { sign: 'capricorn', why: 'Productive Earth union; unmatched shared discipline, mutual respect, and lasting ambition.' },
      { sign: 'cancer', why: 'Nurturing synergy; practical support meets emotional warmth in a safe, caring haven.' },
      { sign: 'scorpio', why: 'Analytical sharpness meets deep emotional focus, creating a formidable, loyal bond.' }
    ],
    challengingCompatibility: [
      { sign: 'sagittarius', why: 'Mutable clash: Virgo’s attention to detail can clash with Sagittarius’ broad, unfiltered freedom.' },
      { sign: 'gemini', why: 'Shared Mercury with differing focuses: Virgo seeks depth and order, while Gemini seeks rapid variety.' }
    ],
    horoscopeFocus: 'Mercury transits, daily health routines, career systems, personal boundaries, and mental wellness.',
    relatedGuideSlugs: [
      'astrology-basics-how-to-read-birth-chart',
      'elemental-harmony-fire-earth-air-water',
      'guide-to-the-12-astrological-houses',
      'understanding-zodiac-personality-patterns'
    ],
    relatedToolSlugs: ['zodiac-sign', 'compatibility', 'birth-chart'],
    recommendedFeatureSlug: 'ascendant',
    recommendedFeatureTitle: 'Ascendant & Rising Calculator in AI Zodiac',
    seoTitle: 'Virgo Zodiac Sign Guide: Personality, Dates, Love & Traits | AI Zodiac',
    seoDescription: 'Explore Virgo personality traits, dates (Aug 23 - Sep 22), love compatibility, ruling planet Mercury, and daily horoscope guidance.'
  },
  libra: {
    id: 'libra',
    name: 'Libra',
    symbol: '♎',
    iconUrl: '/images/ic_libra.png',
    dateRange: 'September 23 – October 22',
    element: 'air',
    modality: 'cardinal',
    rulingPlanet: 'Venus',
    polarity: 'Yang / Masculine / Assertive',
    house: '7th House of Partnerships, Balance, Harmony & Sacred Contracts',
    tarotCard: 'Justice (XI)',
    luckyNumbers: [6, 15, 24, 33],
    luckyDay: 'Friday',
    traits: ['Harmonious', 'Diplomatic', 'Aesthetic', 'Fair-minded', 'Charming'],
    description: 'Libra champions interpersonal symmetry, aesthetic refinement, and equitable justice through empathetic, diplomatic collaboration.',
    overviewParagraphs: [
      'Libra is the peacekeeper and aesthetic visionary of the zodiac. As a Cardinal Air sign ruled by Venus—the planet of elegance, love, and symmetry—Libra seeks harmony, intellectual bridge-building, and social justice.',
      'Represented by the Scales of Balance, Libra possesses an innate talent for seeing all sides of an issue and finding common ground. They possess a natural social grace, an appreciation for fine art, and an instinct for creating welcoming atmospheres.',
      'Their growth path centers on overcoming people-pleasing tendencies and cultivating the courage to speak uncomfortable truths when needed.'
    ],
    strengths: [
      { title: 'Diplomatic Mastery', description: 'Resolves disputes with fairness, tact, and impartial perspective.' },
      { title: 'Aesthetic Brilliance', description: 'Curates harmony in environments, fashion, design, and human relationships.' },
      { title: 'Collaborative Spirit', description: 'Thrives in partnership, elevating everyone through cooperative support.' },
      { title: 'Social Charisma', description: 'Draws people together with warmth, charm, and engaging conversation.' }
    ],
    growthAreas: [
      { title: 'Chronic Indecision', description: 'Can struggle to commit when weighing endless options and opposing viewpoints.' },
      { title: 'Conflict Avoidance', description: 'May smooth over genuine conflicts at the expense of authentic resolution.' },
      { title: 'Self-Sacrifice for Peace', description: 'Tendency to compromise personal needs to keep others content.' }
    ],
    relationshipOverview: 'In love, Libra is deeply romantic, attentive, and partnership-oriented. They view a relationship as a balanced dance of equals, thriving with partners who communicate thoughtfully and value mutual respect.',
    communicationStyle: {
      summary: 'Libra communicates with diplomatic grace, aesthetic tact, and an instinct for balance. They naturally seek common ground and value courteous dialogue.',
      inDialogue: 'Harmonious, charming, and open-minded. Libra excels at validating multiple viewpoints, asking thoughtful questions, and keeping conversations collaborative.',
      inConflict: 'Strives to de-escalate tension and find equitable compromises. Growth involves expressing personal boundaries directly rather than appeasing for peace.'
    },
    birthChartContext: {
      summary: 'Your Libra Sun guides your search for interpersonal symmetry and justice, while your full birth chart provides personal grit, drive, and emotional grounding.',
      sunRole: 'Your Libra Sun illuminates your relational diplomacy, aesthetic vision, and appreciation for partnership.',
      moonInteraction: 'Your Moon sign reveals your true emotional instincts, guiding whether you process feelings privately or through connection.',
      risingInteraction: 'Your Ascendant shapes how you meet the world, your natural charisma, and your instinctive social style.'
    },
    bestCompatibility: [
      { sign: 'gemini', why: 'Air synergy; effortless intellectual rapport, witty banter, and shared social enthusiasm.' },
      { sign: 'aquarius', why: 'Visionary Air harmony; shared commitment to equality, creative collaboration, and aesthetic balance.' },
      { sign: 'leo', why: 'Sun and Venus alignment; vibrant romance, mutual admiration, and social elegance.' },
      { sign: 'sagittarius', why: 'Optimistic connection; love for culture, philosophical dialogue, and shared adventures.' }
    ],
    challengingCompatibility: [
      { sign: 'cancer', why: 'Cardinal clash: Libra analyzes situations intellectually while Cancer feels through deep emotional currents.' },
      { sign: 'capricorn', why: 'Cardinal tension between Libra’s diplomatic compromise and Capricorn’s rigid pragmatism.' }
    ],
    horoscopeFocus: 'Venus transits, partnership evolution, creative projects, diplomatic agreements, and personal boundary balance.',
    relatedGuideSlugs: [
      'understanding-relationship-patterns-through-astrology',
      'zodiac-compatibility-beyond-sun-signs',
      'elemental-harmony-fire-earth-air-water',
      'astrology-and-communication-mercury-placements'
    ],
    relatedToolSlugs: ['zodiac-sign', 'compatibility', 'birth-chart'],
    recommendedFeatureSlug: 'love-compatibility',
    recommendedFeatureTitle: 'Love Compatibility in AI Zodiac',
    seoTitle: 'Libra Zodiac Sign Guide: Personality, Dates, Love & Traits | AI Zodiac',
    seoDescription: 'Discover Libra personality traits, dates (Sep 23 - Oct 22), love compatibility, Venusian harmony, and personalized horoscope guidance.'
  },
  scorpio: {
    id: 'scorpio',
    name: 'Scorpio',
    symbol: '♏',
    iconUrl: '/images/ic_scorpio.png',
    dateRange: 'October 23 – November 21',
    element: 'water',
    modality: 'fixed',
    rulingPlanet: 'Pluto & Mars',
    polarity: 'Yin / Feminine / Receptive',
    house: '8th House of Transformation, Depth, Shared Resources & Rebirth',
    tarotCard: 'Death (XIII)',
    luckyNumbers: [8, 9, 17, 26],
    luckyDay: 'Tuesday',
    traits: ['Transformative', 'Perceptive', 'Magnetic', 'Resilient', 'Intense'],
    description: 'Scorpio penetrates surface illusions, catalyzing profound psychological transformation, unshakeable loyalty, and emotional truth.',
    overviewParagraphs: [
      'Scorpio is the alchemist and detective of the zodiac. As a Fixed Water sign co-ruled by Pluto (transformation and rebirth) and Mars (willpower and courage), Scorpio fearlessly investigates the deepest emotional and psychological truths.',
      'Represented by the Scorpion, Eagle, and Phoenix, Scorpio possesses an uncanny ability to perceive hidden motives and rise regenerated from life’s greatest trials. They do not do casual—everything Scorpio commits to is fueled by intense authenticity.',
      'Their growth path lies in learning to release the need for total control, embracing forgiveness, and trusting the natural flow of life.'
    ],
    strengths: [
      { title: 'Psychological Penetration', description: 'Reads situations with extraordinary intuition, cutting through superficial facades.' },
      { title: 'Unbreakable Resilience', description: 'Rises stronger from crisis like the Phoenix, turning pain into wisdom.' },
      { title: 'Fierce, Absolute Loyalty', description: 'Guards trusted loved ones with unyielding devotion and protective care.' },
      { title: 'Focused Determination', description: 'Possesses laser-focused willpower that overcomes seemingly impossible obstacles.' }
    ],
    growthAreas: [
      { title: 'Suspicion & Guardedness', description: 'Can hold emotional walls high out of fear of betrayal.' },
      { title: 'Tendency to Hold Grudges', description: 'Struggles to let go of past slights, carrying emotional baggage.' },
      { title: 'Desire for Control', description: 'May attempt to control outcomes when feeling vulnerable.' }
    ],
    relationshipOverview: 'In love, Scorpio seeks soul-level intimacy and absolute fidelity. They require complete honesty and mutual vulnerability, rewarding their partner with unwavering devotion and transformative emotional support.',
    communicationStyle: {
      summary: 'Scorpio communicates with magnetic focus, emotional authenticity, and perceptive depth. They bypass superficial pleasantries to uncover genuine truths.',
      inDialogue: 'Intense, observant, and sincere. Scorpio is a deeply attentive listener who values confidentiality, authentic vulnerability, and meaningful topics.',
      inConflict: 'Unflinchingly honest and protective of boundaries. They respect partners who communicate with complete transparency and integrity.'
    },
    birthChartContext: {
      summary: 'Your Scorpio Sun gives you transformative emotional power and resilience, while your full natal chart reveals how your intellect, love style, and career express.',
      sunRole: 'Your Scorpio Sun fuels your psychological insight, loyalty, and capacity for deep personal regeneration.',
      moonInteraction: 'Your Moon sign reveals your subconscious coping mechanisms and emotional needs when navigating intimate bonds.',
      risingInteraction: 'Your Ascendant creates your outward aura, determining how guarded or approachable you appear upon first meeting.'
    },
    bestCompatibility: [
      { sign: 'cancer', why: 'Deep Water connection; instinctive emotional trust, intuitive intimacy, and fierce loyalty.' },
      { sign: 'pisces', why: 'Mystical Water union; boundless empathy, spiritual depth, and unspoken understanding.' },
      { sign: 'virgo', why: 'Water and Earth; Scorpio provides emotional depth while Virgo provides steady grounding.' },
      { sign: 'capricorn', why: 'Powerhouse alignment; shared dedication, unshakeable loyalty, and mutual respect for privacy.' }
    ],
    challengingCompatibility: [
      { sign: 'leo', why: 'Fixed clash: Scorpio operates in private depth, whereas Leo craves public recognition.' },
      { sign: 'aquarius', why: 'Fixed tension between Scorpio’s intense emotional intimacy and Aquarius’ objective detachment.' }
    ],
    horoscopeFocus: 'Pluto & Mars transits, psychological rebirth, financial mergers, intimate trust, and transformative healing.',
    relatedGuideSlugs: [
      'understanding-relationship-patterns-through-astrology',
      'zodiac-compatibility-beyond-sun-signs',
      'zodiac-signs-conflict-resolution-styles',
      'guide-to-the-12-astrological-houses'
    ],
    relatedToolSlugs: ['zodiac-sign', 'compatibility', 'birth-chart'],
    recommendedFeatureSlug: 'love-compatibility',
    recommendedFeatureTitle: 'Love Compatibility & Synastry in AI Zodiac',
    seoTitle: 'Scorpio Zodiac Sign Guide: Personality, Dates, Love & Traits | AI Zodiac',
    seoDescription: 'Explore Scorpio personality traits, dates (Oct 23 - Nov 21), love compatibility, Pluto/Mars rulers, and daily horoscope guidance.'
  },
  sagittarius: {
    id: 'sagittarius',
    name: 'Sagittarius',
    symbol: '♐',
    iconUrl: '/images/ic_sagittarius.png',
    dateRange: 'November 22 – December 21',
    element: 'fire',
    modality: 'mutable',
    rulingPlanet: 'Jupiter',
    polarity: 'Yang / Masculine / Assertive',
    house: '9th House of Higher Philosophy, Global Travel & Spiritual Wisdom',
    tarotCard: 'Temperance (XIV)',
    luckyNumbers: [3, 9, 12, 21],
    luckyDay: 'Thursday',
    traits: ['Philosophical', 'Expansive', 'Optimistic', 'Free-spirited', 'Generous'],
    description: 'Sagittarius quests for universal truth, wisdom, and higher meaning through world exploration, bold optimism, and philosophical freedom.',
    overviewParagraphs: [
      'Sagittarius is the explorer and philosopher of the zodiac. As a Mutable Fire sign ruled by Jupiter—the planetary giant of expansion, luck, and wisdom—Sagittarius seeks to broaden their horizons through travel, higher learning, and joyful adventure.',
      'Represented by the Centaur Archer aiming for the stars, Sagittarius is driven by an unquenchable thirst for truth. They possess infectious humor, radical honesty, and a magnetic optimism that reminds everyone that life is a grand adventure.',
      'Their growth path centers on grounding broad philosophical ideals into consistent daily practices and cultivating tact in communication.'
    ],
    strengths: [
      { title: 'Infectious Optimism', description: 'Maintains faith in positive possibilities, uplifting everyone during difficult times.' },
      { title: 'Philosophical Vision', description: 'Connects overarching big-picture themes, inspiring others to think bigger.' },
      { title: 'Unfiltered Honesty', description: 'Shares truth straightforwardly with transparent, good-natured authenticity.' },
      { title: 'Adaptable Adventurer', description: 'Embraces unfamiliar cultures, ideas, and experiences with open enthusiasm.' }
    ],
    growthAreas: [
      { title: 'Restlessness', description: 'Can become impatient when confined to repetitive routines or rigid structures.' },
      { title: 'Overcommitting', description: 'Jupiter’s expansive optimism may lead to promising more than can be delivered.' },
      { title: 'Blunt Communication', description: 'May speak truth without considering delicate emotional sensitivities.' }
    ],
    relationshipOverview: 'In love, Sagittarius requires freedom, intellectual growth, and a fellow adventurer. They thrive with partners who are self-sufficient, passionate about learning, and open to spontaneous travel.',
    communicationStyle: {
      summary: 'Sagittarius communicates with infectious optimism, philosophical broadness, and candid honesty. They inspire others with expansive ideas and humor.',
      inDialogue: 'Enthusiastic, humorous, and explorative. Sagittarius loves discussing life’s big questions, sharing travel tales, and challenging conventional wisdom.',
      inConflict: 'Values straightforward truth and quick resolution. They prefer looking forward to the next adventure rather than dwelling on past grievances.'
    },
    birthChartContext: {
      summary: 'Your Sagittarius Sun powers your quest for wisdom and freedom, while your full chart provides the practical discipline, focus, and emotional anchors you need.',
      sunRole: 'Your Sagittarius Sun guides your spiritual exploration, ethical optimism, and desire for unbounded growth.',
      moonInteraction: 'Your Moon sign dictates how you handle emotional vulnerability when quiet reflection is required.',
      risingInteraction: 'Your Ascendant shapes your energetic entry into any room, projecting your signature enthusiasm and warmth.'
    },
    bestCompatibility: [
      { sign: 'aries', why: 'Fiery synergy; shared love for high-energy adventures, athletic pursuits, and bold courage.' },
      { sign: 'leo', why: 'Joyful Fire connection; shared warmth, generous spirit, and theatrical celebration of life.' },
      { sign: 'libra', why: 'Harmony between Sagittarius’ wisdom and Libra’s diplomacy, fostering engaging conversations.' },
      { sign: 'aquarius', why: 'Visionary independence; shared dedication to progressive ideas and personal freedom.' }
    ],
    challengingCompatibility: [
      { sign: 'virgo', why: 'Mutable clash: Sagittarius focuses on the grand horizon while Virgo focuses on fine details.' },
      { sign: 'pisces', why: 'Shared Jupiterian energy, but Sagittarius demands direct logic while Pisces operates in poetic mysticism.' }
    ],
    horoscopeFocus: 'Jupiter transits, long-distance travel, publishing, philosophical growth, and expanding life horizons.',
    relatedGuideSlugs: [
      'elemental-harmony-fire-earth-air-water',
      'understanding-zodiac-personality-patterns',
      'questions-to-ask-an-ai-astrologer',
      'the-big-three-sun-moon-rising-signs'
    ],
    relatedToolSlugs: ['zodiac-sign', 'compatibility', 'birth-chart'],
    recommendedFeatureSlug: 'ask-ai',
    recommendedFeatureTitle: 'Personalized AI Astrologer Guidance in AI Zodiac',
    seoTitle: 'Sagittarius Zodiac Sign Guide: Personality, Dates, Love & Traits | AI Zodiac',
    seoDescription: 'Discover Sagittarius personality traits, dates (Nov 22 - Dec 21), love compatibility, Jupiter ruler insights, and daily horoscopes.'
  },
  capricorn: {
    id: 'capricorn',
    name: 'Capricorn',
    symbol: '♑',
    iconUrl: '/images/ic_capricorn.png',
    dateRange: 'December 22 – January 19',
    element: 'earth',
    modality: 'cardinal',
    rulingPlanet: 'Saturn',
    polarity: 'Yin / Feminine / Receptive',
    house: '10th House of Career, Public Reputation, Mastery & Ambition',
    tarotCard: 'The Devil (XV)',
    luckyNumbers: [4, 8, 13, 22],
    luckyDay: 'Saturday',
    traits: ['Architectural', 'Disciplined', 'Strategic', 'Patient', 'Ambitious'],
    description: 'Capricorn constructs enduring legacies through disciplined mastery, strategic resilience, and an unshakeable commitment to integrity.',
    overviewParagraphs: [
      'Capricorn is the master builder and strategist of the zodiac. As a Cardinal Earth sign ruled by Saturn—the taskmaster of discipline, time, and structural mastery—Capricorn turns ambitious visions into enduring realities.',
      'Represented by the Sea-Goat, Capricorn scales the tallest mountains of ambition while possessing deep emotional reservoirs. They respect time, honor commitments, and understand that true greatness is built brick by brick through unwavering perseverance.',
      'Their growth path involves learning to celebrate achievements along the way and allowing vulnerability to soften their disciplined exterior.'
    ],
    strengths: [
      { title: 'Strategic Mastery', description: 'Plans long-term trajectories with meticulous foresight, executing with calm patience.' },
      { title: 'Iron Discipline', description: 'Possesses remarkable stamina, completing hard endeavors when others quit.' },
      { title: 'Reliable Leadership', description: 'A dependable rock who provides structure and stability in chaotic environments.' },
      { title: 'High Integrity', description: 'Upholds commitments with honor, earning universal trust and respect.' }
    ],
    growthAreas: [
      { title: 'Workaholism', description: 'Can overly tie self-worth to productivity, neglecting restorative rest.' },
      { title: 'Emotional Reservation', description: 'May suppress personal feelings in favor of duty and stoicism.' },
      { title: 'Pessimistic Cautiousness', description: 'Saturn’s influence can occasionally lead to excessive caution or cynicism.' }
    ],
    relationshipOverview: 'In love, Capricorn is patient, dedicated, and deeply committed. They take time to establish trust, but once committed, they build a secure, loyal partnership founded on mutual ambition and lifelong respect.',
    communicationStyle: {
      summary: 'Capricorn communicates with measured authority, strategic realism, and concise clarity. They honor commitments and speak with dependable integrity.',
      inDialogue: 'Direct, respectful, and pragmatic. Capricorn values constructive discussions, long-term planning, and actionable next steps over idle speculation.',
      inConflict: 'Maintains composure and focuses on solutions and accountability. They appreciate calm, rational dialogue and mutual respect.'
    },
    birthChartContext: {
      summary: 'Your Capricorn Sun defines your strategic mastery and structural discipline, while your complete natal chart reveals your soft emotional center and passions.',
      sunRole: 'Your Capricorn Sun drives your ambition, perseverance, and ability to construct lasting legacies.',
      moonInteraction: 'Your Moon sign provides insight into your private emotional needs, showing where you need emotional safety and warmth.',
      risingInteraction: 'Your Ascendant establishes your public posture and the professional presence you naturally project to the world.'
    },
    bestCompatibility: [
      { sign: 'taurus', why: 'Earth harmony; shared appreciation for stability, financial security, and enduring loyalty.' },
      { sign: 'virgo', why: 'Precision Earth alliance; shared dedication to craftsmanship, organization, and mutual support.' },
      { sign: 'scorpio', why: 'Power pairing; unshakeable loyalty, strategic focus, and mutual respect for privacy.' },
      { sign: 'pisces', why: 'Earth anchors Water; Capricorn provides practical safety while Pisces reawakens creative wonder.' }
    ],
    challengingCompatibility: [
      { sign: 'aries', why: 'Cardinal clash: Aries demands immediate speed while Capricorn insists on methodical pace.' },
      { sign: 'libra', why: 'Cardinal tension: Capricorn values direct pragmatism while Libra focuses on diplomatic harmony.' }
    ],
    horoscopeFocus: 'Saturn transits, career milestones, structural life changes, long-term investments, and work-life balance.',
    relatedGuideSlugs: [
      'astrology-basics-how-to-read-birth-chart',
      'guide-to-the-12-astrological-houses',
      'elemental-harmony-fire-earth-air-water',
      'understanding-zodiac-personality-patterns'
    ],
    relatedToolSlugs: ['zodiac-sign', 'compatibility', 'birth-chart'],
    recommendedFeatureSlug: 'personal-horoscope',
    recommendedFeatureTitle: 'Personalized Daily Horoscopes in AI Zodiac',
    seoTitle: 'Capricorn Zodiac Sign Guide: Personality, Dates, Love & Traits | AI Zodiac',
    seoDescription: 'Explore Capricorn personality traits, dates (Dec 22 - Jan 19), love compatibility, Saturn ruler dynamics, and daily horoscope guidance.'
  },
  aquarius: {
    id: 'aquarius',
    name: 'Aquarius',
    symbol: '♒',
    iconUrl: '/images/ic_aquarius.png',
    dateRange: 'January 20 – February 18',
    element: 'air',
    modality: 'fixed',
    rulingPlanet: 'Uranus & Saturn',
    polarity: 'Yang / Masculine / Assertive',
    house: '11th House of Community, Future Visions, Innovation & Humanitarian Ideals',
    tarotCard: 'The Star (XVII)',
    luckyNumbers: [4, 7, 11, 22],
    luckyDay: 'Saturday',
    traits: ['Visionary', 'Innovative', 'Humanitarian', 'Independent', 'Original'],
    description: 'Aquarius champions collective progress, innovative paradigm shifts, and radical authenticity through intellectual humanitarianism.',
    overviewParagraphs: [
      'Aquarius is the revolutionary and visionary of the zodiac. As a Fixed Air sign co-ruled by Uranus (innovation, breakthrough, and awakening) and Saturn (structure and legacy), Aquarius looks decades ahead to construct a better world for all.',
      'Represented by the Water Bearer pouring cosmic insight upon humanity, Aquarius is fiercely independent and unapologetically original. They champion egalitarian ideals, question outdated dogmas, and value authentic individuality over conformity.',
      'Their growth path centers on connecting conceptual humanitarian love with intimate, one-on-one emotional vulnerability.'
    ],
    strengths: [
      { title: 'Visionary Innovation', description: 'Pioneers progressive ideas and fresh solutions before they enter mainstream awareness.' },
      { title: 'Humanitarian Heart', description: 'Dedicated to community upliftment, social fairness, and collective progress.' },
      { title: 'Uncompromising Authenticity', description: 'Stands true to their unique principles without bending to social pressure.' },
      { title: 'Objective Clarity', description: 'Analyzes complex dilemmas with calm, impartial logic and intellectual detachment.' }
    ],
    growthAreas: [
      { title: 'Emotional Aloofness', description: 'Can retreat into intellectual analysis when personal feelings become overwhelming.' },
      { title: 'Fixed Stubbornness', description: 'Can become dogmatic about their own unconventional theories and ideals.' },
      { title: 'Feeling Misunderstood', description: 'May isolate themselves feeling that others cannot grasp their futuristic vision.' }
    ],
    relationshipOverview: 'In love, Aquarius seeks an intellectual equal, a best friend, and a partner who respects their need for autonomy. They thrive in relationships built on mutual freedom, shared progressive values, and continuous growth.',
    communicationStyle: {
      summary: 'Aquarius communicates with visionary objectivity, intellectual originality, and egalitarian respect. They bring progressive perspectives to every conversation.',
      inDialogue: 'Conceptual, open-minded, and engaging. Aquarius loves debating futuristic concepts, analyzing systems, and championing innovative solutions.',
      inConflict: 'Approaches friction with detached logic and fairness. Growth involves connecting rational principles with heartfelt personal empathy.'
    },
    birthChartContext: {
      summary: 'Your Aquarius Sun fuels your innovative intellect and humanitarian ideals, while your full birth chart reveals your emotional attachments and creative passions.',
      sunRole: 'Your Aquarius Sun drives your individuality, desire for social progress, and ability to think outside conventional boundaries.',
      moonInteraction: 'Your Moon sign highlights your intuitive feelings, balancing your mental detachment with emotional grounding.',
      risingInteraction: 'Your Ascendant shapes your unique outward style and the aura of authentic originality you share with the world.'
    },
    bestCompatibility: [
      { sign: 'gemini', why: 'Air synergy; electrifying mental connection, constant curiosity, and lively social banter.' },
      { sign: 'libra', why: 'Air harmony; shared commitment to equality, creative collaboration, and aesthetic balance.' },
      { sign: 'aries', why: 'Air feeds Fire; bold visionary ideas meet decisive action, sparking continuous excitement.' },
      { sign: 'sagittarius', why: 'Freedom-loving partnership; shared humanitarian ideals, open minds, and global perspective.' }
    ],
    challengingCompatibility: [
      { sign: 'taurus', why: 'Fixed clash: Taurus prioritizes traditional material stability while Aquarius seeks radical change.' },
      { sign: 'scorpio', why: 'Fixed tension between Scorpio’s intense emotional demand and Aquarius’ objective detachment.' }
    ],
    horoscopeFocus: 'Uranus transits, community initiatives, technological breakthroughs, personal freedom, and progressive vision.',
    relatedGuideSlugs: [
      'how-ai-creates-personalized-astrology-insights',
      'questions-to-ask-an-ai-astrologer',
      'elemental-harmony-fire-earth-air-water',
      'the-big-three-sun-moon-rising-signs'
    ],
    relatedToolSlugs: ['zodiac-sign', 'compatibility', 'birth-chart'],
    recommendedFeatureSlug: 'ask-ai',
    recommendedFeatureTitle: 'Ask the AI Astrologer in AI Zodiac',
    seoTitle: 'Aquarius Zodiac Sign Guide: Personality, Dates, Love & Traits | AI Zodiac',
    seoDescription: 'Discover Aquarius personality traits, dates (Jan 20 - Feb 18), love compatibility, Uranian energy, and daily horoscope guidance.'
  },
  pisces: {
    id: 'pisces',
    name: 'Pisces',
    symbol: '♓',
    iconUrl: '/images/ic_pisces.png',
    dateRange: 'February 19 – March 20',
    element: 'water',
    modality: 'mutable',
    rulingPlanet: 'Neptune & Jupiter',
    polarity: 'Yin / Feminine / Receptive',
    house: '12th House of Subconscious, Spiritual Transcendence, Dreams & Mysticism',
    tarotCard: 'The Moon (XVIII)',
    luckyNumbers: [3, 7, 12, 16],
    luckyDay: 'Thursday',
    traits: ['Compassionate', 'Mystical', 'Imaginative', 'Boundless', 'Empathetic'],
    description: 'Pisces dissolves boundaries with boundless compassion, artistic imagination, and mystical wisdom, completing the astrological cycle.',
    overviewParagraphs: [
      'Pisces is the mystic, poet, and dreamer of the zodiac. As a Mutable Water sign co-ruled by Neptune (dreams, spirituality, and infinite imagination) and Jupiter (faith and expansion), Pisces integrates the lessons of all twelve zodiac archetypes.',
      'Represented by two Fish swimming in opposite directions, Pisces bridges the physical world with the realm of dreams and spiritual intuition. They possess profound empathy, soaking in the emotional atmospheres around them and translating feeling into art, music, and healing.',
      'Their growth path involves developing healthy energetic boundaries, grounding their sublime spiritual gifts in practical daily life.'
    ],
    strengths: [
      { title: 'Transcendent Compassion', description: 'Offers unconditional empathy and deep, non-judgmental understanding to all beings.' },
      { title: 'Artistic & Psychic Intuition', description: 'Channels rich subconscious imagery, dreams, and spiritual insights naturally.' },
      { title: 'Fluid Adaptability', description: 'Flows gracefully around life obstacles, finding creative and peaceful solutions.' },
      { title: 'Soulful Presence', description: 'Brings spiritual depth, healing warmth, and peaceful perspective into every room.' }
    ],
    growthAreas: [
      { title: 'Porous Boundaries', description: 'Absorbs the emotional stress of others, requiring regular solitude to recharge.' },
      { title: 'Escapism', description: 'May retreat into fantasy or avoidance when physical reality feels harsh.' },
      { title: 'Over-Idealizing Others', description: 'Can project perfection onto partners, struggling when flaws appear.' }
    ],
    relationshipOverview: 'In love, Pisces is deeply romantic, devoted, and spiritually attuned. They dream of a soulmate connection, offering gentle kindness, poetic affection, and profound emotional attunement.',
    communicationStyle: {
      summary: 'Pisces communicates with gentle compassion, poetic imagination, and intuitive empathy. They express subtle emotional nuances that words often struggle to capture.',
      inDialogue: 'Supportive, imaginative, and non-judgmental. Pisces creates a soothing space where others feel heard, understood, and emotionally safe.',
      inConflict: 'Prefers gentle resolution and emotional reconciliation. Clear communication of personal boundaries helps them navigate friction without withdrawing.'
    },
    birthChartContext: {
      summary: 'Your Pisces Sun represents your spiritual depth and creative imagination, while your full natal chart grounds your dreams in practical structure and action.',
      sunRole: 'Your Pisces Sun inspires your empathy, artistic vision, and ability to transcend superficial boundaries.',
      moonInteraction: 'Your Moon sign indicates your instinctive emotional rhythm, determining how you channel your vast intuitive sensitivity.',
      risingInteraction: 'Your Ascendant determines how you interact with daily reality and the ethereal impression you leave on others.'
    },
    bestCompatibility: [
      { sign: 'cancer', why: 'Soulful Water sanctuary; deep emotional safety, shared intuition, and tender mutual care.' },
      { sign: 'scorpio', why: 'Mystical Water union; intense emotional devotion, psychic bond, and transformative intimacy.' },
      { sign: 'taurus', why: 'Earth grounds Water; Taurus provides a safe, peaceful container for Pisces’ creative dreams.' },
      { sign: 'capricorn', why: 'Supportive synergy; Capricorn provides structure while Pisces softens and inspires their heart.' }
    ],
    challengingCompatibility: [
      { sign: 'gemini', why: 'Mutable clash: Gemini intellectualizes emotions while Pisces feels them in deep, fluid waves.' },
      { sign: 'sagittarius', why: 'Mutable friction between Sagittarius’ blunt external truth and Pisces’ delicate internal mysticism.' }
    ],
    horoscopeFocus: 'Neptune transits, creative inspiration, dream analysis, spiritual integration, and energetic boundaries.',
    relatedGuideSlugs: [
      'understanding-relationship-patterns-through-astrology',
      'the-big-three-sun-moon-rising-signs',
      'guide-to-the-12-astrological-houses',
      'how-ai-creates-personalized-astrology-insights'
    ],
    relatedToolSlugs: ['zodiac-sign', 'compatibility', 'birth-chart'],
    recommendedFeatureSlug: 'personal-horoscope',
    recommendedFeatureTitle: 'Personalized Horoscopes in AI Zodiac',
    seoTitle: 'Pisces Zodiac Sign Guide: Personality, Dates, Love & Traits | AI Zodiac',
    seoDescription: 'Explore Pisces personality traits, dates (Feb 19 - Mar 20), love compatibility, Neptune ruler insights, and daily horoscope guidance.'
  }
};

export const ZODIAC_SIGN_HUBS_LIST: readonly ZodiacSignHubData[] = Object.values(ZODIAC_SIGN_HUBS);
