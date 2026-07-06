import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../consts.ts';

export async function GET(context) {
  const articles = (await getCollection('articles', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.publishedDate.valueOf() - a.data.publishedDate.valueOf(),
  );

  return rss({
    title: `${SITE.name} — Veterinary Education`,
    description: SITE.shortDescription,
    site: context.site,
    items: articles.map((a) => ({
      title: a.data.title,
      description: a.data.summary,
      pubDate: a.data.publishedDate,
      link: `/articles/${a.id}`,
      categories: [a.data.species, a.data.category],
    })),
    customData: `<language>en-us</language>`,
  });
}
