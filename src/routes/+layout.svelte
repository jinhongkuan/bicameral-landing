<script lang="ts">
  import '../app.css';
  import { page } from '$app/stores';

  let { children } = $props();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' }
  ];
</script>

<div class="min-h-screen bg-mint flex">
  <!-- Left Navbar -->
  <nav class="w-52 p-8 flex flex-col gap-1 border-r border-emerald-200">
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
  <main class="flex-1 p-10">
    {@render children()}
  </main>
</div>
