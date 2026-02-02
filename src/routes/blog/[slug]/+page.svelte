<script lang="ts">
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
  const Content = $derived(data.blog.content);
</script>

<div class="max-w-4xl mx-auto">
  <!-- Back Button -->
  <a
    href="/blog"
    class="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-800 mb-8 transition-colors text-sm"
  >
    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M19 12H5M12 19l-7-7 7-7"/>
    </svg>
    Back to Blog
  </a>

  <!-- Blog Content -->
  <article>
    <header class="mb-10 border-b border-emerald-200 pb-8">
      <h1 class="text-3xl font-semibold text-emerald-950 mb-3 leading-tight">{data.blog.title}</h1>
      <p class="text-lg text-emerald-700 mb-3">{data.blog.subtitle}</p>
      <p class="text-sm text-emerald-500">{data.blog.date}</p>
    </header>

    <div class="prose prose-lg max-w-none prose-headings:text-emerald-950 prose-headings:font-semibold prose-p:text-emerald-900 prose-li:text-emerald-900 prose-a:text-emerald-600 prose-strong:text-emerald-950">
      <Content />
    </div>
  </article>
</div>
