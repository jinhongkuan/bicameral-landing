<script lang="ts">
  import { blogs } from '$lib/blogs';
</script>

<div class="max-w-4xl">
  <h1 class="text-3xl font-semibold text-emerald-950 mb-10">Blog</h1>

  <div class="space-y-8">
    {#each blogs as blog, i}
      <a
        href="/blog/{blog.slug}"
        class="group block border-b border-emerald-200 pb-8 last:border-b-0"
      >
        <div class="flex items-baseline gap-6">
          <span class="text-sm text-emerald-500 font-mono w-28 shrink-0">{blog.date}</span>
          <div class="flex-1">
            <h2 class="text-xl text-emerald-900 group-hover:text-emerald-700 transition-colors mb-1 font-medium">
              {blog.title}
            </h2>
            <p class="text-emerald-600">{blog.subtitle}</p>
          </div>
        </div>
      </a>
    {/each}
  </div>
</div>
