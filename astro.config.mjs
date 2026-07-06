// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE_URL } from './src/consts.ts';

// https://astro.build/config
export default defineConfig({
  // The canonical production URL. Change this in src/consts.ts once the
  // real domain is connected in Vercel. It drives canonical tags, sitemap,
  // RSS and every absolute URL used for SEO / social sharing.
  site: SITE_URL,
  trailingSlash: 'ignore',
  output: 'static',
  build: {
    // Emit clean URLs: /articles/gdv-bloat-in-dogs  (not .../index.html path)
    format: 'directory',
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
});
