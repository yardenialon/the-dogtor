import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Articles = the core SEO/GEO asset. Each markdown file in
 * src/content/articles becomes a page at /articles/<slug>.
 *
 * The frontmatter schema is intentionally rich so every page can emit
 * strong structured data (MedicalWebPage / VideoObject / FAQPage) and
 * consistent E-E-A-T signals without per-page boilerplate.
 */
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    // A concise, factual answer shown as the "TL;DR" — this is the block
    // most likely to be lifted into an AI answer or a Google snippet.
    summary: z.string(),
    // SEO meta description (<=160 chars ideally). Falls back to summary.
    description: z.string().optional(),
    species: z.enum(['dogs', 'cats', 'rabbits', 'small-animals']),
    // Topic cluster, e.g. "Digestive", "Skin & Allergies", "Emergency".
    category: z.string(),
    // Search-intent keywords / the questions this article answers.
    keywords: z.array(z.string()).default([]),
    author: z.string().default('the-dogtor-vet'),
    publishedDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // Flags this as an urgent/emergency topic (adds warning UI + intent).
    emergency: z.boolean().default(false),
    // Reading difficulty for the audience label.
    audience: z.enum(['pet-owners', 'vet-students', 'both']).default('pet-owners'),
    // The companion YouTube video ID (the 11-char id, not the full URL).
    youtubeId: z.string().optional(),
    // Optional custom social share image path (in /public).
    image: z.string().optional(),
    // FAQ block — powers on-page accordion AND FAQPage JSON-LD.
    faq: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        }),
      )
      .default([]),
    // References strengthen E-E-A-T and GEO citability.
    references: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().url().optional(),
        }),
      )
      .default([]),
    // Hide from listings without deleting.
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

export const collections = { articles };
