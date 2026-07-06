/**
 * ─────────────────────────────────────────────────────────────
 *  SITE CONFIG — single source of truth
 * ─────────────────────────────────────────────────────────────
 *  Edit these values to rebrand / re-point the whole site.
 *  SITE_URL is the ONLY thing you must change before going live:
 *  set it to your real domain once it's connected in Vercel.
 */

// ⚠️  CHANGE ME to your real domain before launch (no trailing slash).
export const SITE_URL = 'https://www.thedogtor.pet';

export const SITE = {
  name: 'The Dogtor',
  tagline: 'Veterinary Education',
  /** Used in <title> suffix and social cards. */
  shortDescription:
    'Vet-reviewed pet health guides. Learn the warning signs, emergencies and treatments for dogs, cats, rabbits and small animals — explained by certified veterinarians.',
  /** One-liner for the hero. */
  hero:
    'Pet health, explained by real veterinarians. Recognise problems early, know when to call the vet, and feel confident caring for your pet.',
  locale: 'en',
  lang: 'en',
  /** Default social share image (in /public). */
  ogImage: '/og-default.svg',
  themeColor: '#0e9f8e',
} as const;

/** The YouTube channel this site promotes. */
export const YOUTUBE = {
  channelUrl: 'https://www.youtube.com/channel/UC0Kr23avnoMMAtmZTCKcykA',
  channelId: 'UC0Kr23avnoMMAtmZTCKcykA',
  handle: '@TheDogtor',
  subscribeUrl:
    'https://www.youtube.com/channel/UC0Kr23avnoMMAtmZTCKcykA?sub_confirmation=1',
} as const;

export const SOCIALS = {
  youtube: YOUTUBE.channelUrl,
  // Fill these in when the accounts exist — they strengthen the
  // Organization sameAs schema and E-E-A-T signals.
  instagram: '',
  tiktok: '',
  facebook: '',
} as const;

/** Species pillars — each becomes /species/<slug> and a topic cluster. */
export const SPECIES = [
  {
    slug: 'dogs',
    name: 'Dogs',
    emoji: '🐕',
    blurb:
      'From upset stomachs and skin allergies to life-threatening emergencies like bloat (GDV) and IMHA.',
  },
  {
    slug: 'cats',
    name: 'Cats',
    emoji: '🐈',
    blurb:
      'Kidney disease, urinary blockages, hyperthyroidism, dental pain and the subtle signs cats hide.',
  },
  {
    slug: 'rabbits',
    name: 'Rabbits',
    emoji: '🐇',
    blurb:
      'GI stasis, dental problems and why a rabbit that stops eating is always an emergency.',
  },
  {
    slug: 'small-animals',
    name: 'Small Animals',
    emoji: '🐹',
    blurb:
      'Guinea pigs, ferrets, hamsters and other small pets — species-specific care and red flags.',
  },
] as const;

export type SpeciesSlug = (typeof SPECIES)[number]['slug'];

/** Primary navigation. */
export const NAV = [
  { label: 'Articles', href: '/articles' },
  { label: 'Dogs', href: '/species/dogs' },
  { label: 'Cats', href: '/species/cats' },
  { label: 'Emergencies', href: '/emergencies' },
  { label: 'Symptom Checker', href: '/symptom-checker' },
  { label: 'About', href: '/about' },
] as const;

/**
 * Authors — critical for E-E-A-T (Experience, Expertise, Authoritativeness,
 * Trust) on health/YMYL content. Every article references an author here.
 * Replace with the real veterinarian's details.
 */
export const AUTHORS = {
  'the-dogtor-vet': {
    id: 'the-dogtor-vet',
    name: 'The Dogtor Veterinary Team',
    credentials: 'DVM',
    role: 'Certified Veterinarians',
    bio: 'Content on this site is written and medically reviewed by certified, practicing veterinarians. Every article is grounded in current clinical evidence and real case experience.',
    url: '/about',
  },
} as const;

export type AuthorId = keyof typeof AUTHORS;
