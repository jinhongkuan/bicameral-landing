export interface BlogEntry {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  content: ConstructorOfATypedSvelteComponent;
}

type MdModule = {
  default: ConstructorOfATypedSvelteComponent;
  metadata: {
    title: string;
    subtitle: string;
    date: string;
  };
};

const posts = import.meta.glob<MdModule>('/src/posts/*.md', { eager: true });

export const blogs: BlogEntry[] = Object.entries(posts)
  .filter(([path]) => !path.includes('CLAUDE.md'))
  .map(([path, module]) => {
    const slug = path.split('/').pop()?.replace('.md', '') ?? '';
    return {
      slug,
      title: module.metadata.title,
      subtitle: module.metadata.subtitle,
      date: module.metadata.date,
      content: module.default
    };
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export function getBlogBySlug(slug: string): BlogEntry | undefined {
  return blogs.find(blog => blog.slug === slug);
}
