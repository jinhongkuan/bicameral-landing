import type { RequestHandler } from './$types';

interface MdModule {
  metadata: {
    title: string;
    subtitle: string;
    date: string;
    published?: boolean;
  };
}

const siteUrl = 'https://bicameral.dev';

export const GET: RequestHandler = async () => {
  const posts = import.meta.glob<MdModule>('/src/posts/*.md', { eager: true });

  const blogs = Object.entries(posts)
    .filter(([path]) => !path.includes('CLAUDE.md'))
    .map(([path, module]) => {
      const slug = path.split('/').pop()?.replace('.md', '') ?? '';
      return {
        slug,
        title: module.metadata.title,
        subtitle: module.metadata.subtitle,
        date: module.metadata.date,
        published: module.metadata.published !== false
      };
    })
    .filter(b => b.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const items = blogs
    .map(
      (blog) => `    <item>
      <title>${escapeXml(blog.title)}</title>
      <description>${escapeXml(blog.subtitle)}</description>
      <link>${siteUrl}/blog/${blog.slug}</link>
      <guid isPermaLink="true">${siteUrl}/blog/${blog.slug}</guid>
      <pubDate>${new Date(blog.date).toUTCString()}</pubDate>
    </item>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Bicameral Blog</title>
    <description>Bringing delight to developers</description>
    <link>${siteUrl}/blog</link>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=0, s-maxage=3600'
    }
  });
};

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
