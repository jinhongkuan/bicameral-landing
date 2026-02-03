<script lang="ts">
  import '../app.css';
  import { page } from '$app/stores';

  let { children } = $props();
  let mobileMenuOpen = $state(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' }
  ];

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
  <main class="flex-1 p-4 md:p-10">
    {@render children()}
  </main>
</div>
