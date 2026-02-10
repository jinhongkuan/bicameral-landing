<script lang="ts">
  import '../app.css';
  import { page } from '$app/stores';
  import NewsletterSignup from '$lib/components/NewsletterSignup.svelte';

  let { children } = $props();
  let mobileMenuOpen = $state(false);
  let newsletterOpen = $state(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' }
  ];

  let isBlog = $derived($page.url.pathname.startsWith('/blog'));

  // Close mobile menu on navigation
  $effect(() => {
    $page.url.pathname;
    mobileMenuOpen = false;
  });
</script>

<div class="min-h-screen bg-mint flex flex-col md:flex-row">
  <!-- Mobile Header -->
  <header class="md:hidden flex items-center justify-between p-4 border-b border-emerald-200">
    <a href="/" class="flex items-center gap-2">
      <svg class="w-6 h-6 text-emerald-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/>
        <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/>
        <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/>
      </svg>
      <span class="text-lg font-semibold text-emerald-900">Bicameral</span>
    </a>
    <div class="flex items-center gap-2">
      {#if isBlog}
        <a
          href="/rss.xml"
          target="_blank"
          rel="noopener"
          class="p-1.5 text-emerald-600 hover:text-emerald-800 transition-colors"
          aria-label="RSS Feed"
        >
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="6.18" cy="17.82" r="2.18"/>
            <path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z"/>
          </svg>
        </a>
        <button
          onclick={() => newsletterOpen = true}
          class="px-3 py-1.5 text-sm bg-emerald-600 hover:bg-emerald-700 text-white rounded-md transition-colors"
        >
          Subscribe
        </button>
      {/if}
      <button
        onclick={() => mobileMenuOpen = !mobileMenuOpen}
        class="p-2 text-emerald-700 hover:text-emerald-900"
        aria-label="Toggle menu"
      >
        {#if mobileMenuOpen}
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M6 18L18 6M6 6l12 12"/>
          </svg>
        {:else}
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        {/if}
      </button>
    </div>
  </header>

  <!-- Mobile Menu Dropdown -->
  {#if mobileMenuOpen}
    <nav class="md:hidden border-b border-emerald-200 bg-mint">
      {#each navItems as item}
        {@const isActive = $page.url.pathname === item.href || ($page.url.pathname.startsWith(item.href) && item.href !== '/')}
        <a
          href={item.href}
          class="block px-4 py-3 text-emerald-800 hover:bg-emerald-100 transition-colors {isActive ? 'font-semibold bg-emerald-100/50' : ''}"
        >
          {item.label}
        </a>
      {/each}
    </nav>
  {/if}

  <!-- Desktop Left Navbar -->
  <nav class="hidden md:flex w-52 p-8 flex-col gap-1 border-r border-emerald-200">
    <!-- Logo -->
    <a href="/" class="flex items-center gap-2 mb-8">
      <svg class="w-7 h-7 text-emerald-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/>
        <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/>
        <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/>
      </svg>
      <span class="text-lg font-semibold text-emerald-900">Bicameral</span>
    </a>

    <!-- Nav Links -->
    {#each navItems as item}
      {@const isActive = $page.url.pathname === item.href || ($page.url.pathname.startsWith(item.href) && item.href !== '/')}
      <a
        href={item.href}
        class="px-3 py-2 text-emerald-800 hover:text-emerald-950 transition-colors {isActive ? 'font-semibold border-l-2 border-emerald-600 -ml-[2px] bg-emerald-100/50' : ''}"
      >
        {item.label}
      </a>
    {/each}
  </nav>

  <!-- Main Content -->
  <main class="flex-1 p-4 md:p-10 relative">
    <!-- Desktop Subscribe + RSS (blog only) -->
    {#if isBlog}
      <div class="hidden md:flex absolute top-10 right-10 items-center gap-2">
        <button
          onclick={() => newsletterOpen = true}
          class="px-4 py-2 text-sm bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-md transition-colors"
        >
          Subscribe to Newsletter
        </button>
        <a
          href="/rss.xml"
          target="_blank"
          rel="noopener"
          class="p-2 text-emerald-600 hover:text-emerald-800 transition-colors"
          aria-label="RSS Feed"
        >
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="6.18" cy="17.82" r="2.18"/>
            <path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z"/>
          </svg>
        </a>
      </div>
    {/if}
    {@render children()}
  </main>
</div>

<NewsletterSignup bind:open={newsletterOpen} />
