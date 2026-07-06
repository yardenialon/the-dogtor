# The Dogtor — Veterinary Education website

An SEO/GEO content hub that promotes the **The Dogtor** YouTube channel by turning
each video into a rich, search-optimised, vet-reviewed article. The goal: rank for
the questions pet owners actually search, get cited by AI answer engines, and funnel
that traffic back to the channel.

Built with **Astro** (static output) → deploys anywhere, blazing-fast Core Web Vitals.

## Quick start

```bash
npm install
npm run dev        # local dev at http://localhost:4321
npm run build      # production build → dist/
npm run preview    # preview the production build
```

## Before you go live (important)

1. **Set your domain.** Edit `SITE_URL` in `src/consts.ts` and the `Sitemap:` line in
   `public/robots.txt`. This drives every canonical URL, the sitemap, RSS and social cards.
2. **Fill in the real vet details** in `AUTHORS` (`src/consts.ts`) and on `/about` —
   this is the E-E-A-T signal Google weighs heavily for health content.
3. **Add social links** in `SOCIALS` (`src/consts.ts`) to strengthen `sameAs` schema.

## Deploying on Vercel

Vercel auto-detects Astro. Two options:

- **Separate repo (recommended):** push this folder as its own repo, import it in Vercel,
  done. No config needed — framework preset "Astro", build `npm run build`, output `dist`.
- **This subfolder:** in Vercel project settings set **Root Directory** to `the-dogtor`.

## Adding a new article (the content engine)

Every video becomes one Markdown file in `src/content/articles/`. Copy an existing
article and edit the frontmatter. Minimum fields:

```yaml
---
title: "..."                 # H1 + <title>
summary: "..."               # TL;DR — the block AI/Google lift into answers
species: "dogs"              # dogs | cats | rabbits | small-animals
category: "Digestive"        # topic cluster
publishedDate: 2026-07-06
youtubeId: "xxxxxxxxxxx"     # 11-char video id → embeds the video + VideoObject schema
emergency: false             # true adds urgency UI + emergency intent
keywords: ["...", "..."]     # search intent
faq:                         # powers on-page FAQ + FAQPage schema (great for GEO)
  - question: "..."
    answer: "..."
references:                  # strengthens E-E-A-T + citability
  - label: "..."
    url: "https://..."
---

Markdown body goes here. Use ## H2 headings — they become the on-page table of contents.
```

Then it automatically appears on the home page, the species pillar page, `/articles`,
the sitemap and the RSS feed. Set `featured: true` to surface it on the homepage.

## What's built in for SEO / GEO

- **Structured data (JSON-LD)** per page: `Organization`, `WebSite`, `MedicalWebPage`,
  `VideoObject`, `FAQPage`, `BreadcrumbList`, `CollectionPage`.
- **Sitemap** (`@astrojs/sitemap`) + **RSS feed** (`/rss.xml`) + **`llms.txt`** for AI crawlers.
- **robots.txt** that explicitly welcomes GPTBot, PerplexityBot, ClaudeBot, Google-Extended, etc.
- Canonical URLs, Open Graph + Twitter cards, theme-color, semantic HTML.
- **Topic clusters**: species pillar pages link to their articles (topical authority).
- **Lite YouTube embeds** (facade pattern) — thumbnail only until clicked, for fast CWV.
- Accessible: skip links, focus styles, reduced-motion support, dark mode.

## Project structure

```
src/
  consts.ts            # ⭐ single source of truth (site, channel, species, authors)
  content.config.ts    # article frontmatter schema
  content/articles/    # the articles (Markdown) — the SEO asset
  layouts/             # BaseLayout (SEO head), ArticleLayout (schema)
  components/          # Header, Footer, VideoEmbed, ArticleCard, Faq, Callout, ...
  pages/               # home, /articles, /articles/[slug], /species/[species],
                       # /emergencies, /symptom-checker, /about, 404, rss.xml
public/                # robots.txt, llms.txt, favicon.svg, og-default.svg
```

## Roadmap ideas (next phases)

- One article per existing video (paste transcript → article).
- Google Web Stories for high-traffic emergency topics.
- Newsletter capture to build an owned audience.
- Breed/condition glossary and more interactive tools.
