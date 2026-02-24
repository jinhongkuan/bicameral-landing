export interface BlogEntry {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  published: boolean;
  content: ConstructorOfATypedSvelteComponent;
}

type MdModule = {
  default: ConstructorOfATypedSvelteComponent;
  metadata: {
    title: string;
    subtitle: string;
    date: string;
    published?: boolean;
  };
};

const posts = import.meta.glob<MdModule>('/src/posts/*.md', { eager: true });

const allBlogs: BlogEntry[] = Object.entries(posts)
  .filter(([path]) => !path.includes('CLAUDE.md'))
  .map(([path, module]) => {
    const slug = path.split('/').pop()?.replace('.md', '') ?? '';
    return {
      slug,
      title: module.metadata.title,
      subtitle: module.metadata.subtitle,
      date: module.metadata.date,
      published: module.metadata.published !== false,
      content: module.default
    };
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const blogs: BlogEntry[] = allBlogs;
export const publishedBlogs: BlogEntry[] = allBlogs.filter(b => b.published);

export function getBlogBySlug(slug: string): BlogEntry | undefined {
  return allBlogs.find(blog => blog.slug === slug);
}
