import { getBlogBySlug } from '$lib/blogs';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    throw error(404, 'Blog post not found');
  }

  return { blog };
};
