<script lang="ts">
  import { blogs } from '$lib/blogs';
</script>

<div class="max-w-4xl">
  <h1 class="text-2xl md:text-3xl font-semibold text-emerald-950 mb-6 md:mb-10">Blog</h1>

  <div class="space-y-6 md:space-y-8">
    {#each blogs as blog, i}
      <a
        href="/blog/{blog.slug}"
        class="group block border-b border-emerald-200 pb-6 md:pb-8 last:border-b-0"
      >
        <div class="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-6">
          <span class="text-xs md:text-sm text-emerald-500 font-mono md:w-28 md:shrink-0">{blog.date}</span>
          <div class="flex-1">
            <h2 class="text-lg md:text-xl text-emerald-900 group-hover:text-emerald-700 transition-colors mb-1 font-medium">
              {blog.title}
            </h2>
            <p class="text-sm md:text-base text-emerald-600">{blog.subtitle}</p>
          </div>
        </div>
      </a>
    {/each}
  </div>
</div>
