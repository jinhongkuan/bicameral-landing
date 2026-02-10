<script lang="ts">
  let { open = $bindable(false) }: { open: boolean } = $props();

  let email = $state("");
  let status = $state<"idle" | "loading" | "success" | "error">("idle");
  let message = $state("");

  // Replace with your Buttondown username after signing up at buttondown.email
  const BUTTONDOWN_USERNAME = "bicameral";

  async function handleSubmit(e: Event) {
    e.preventDefault();
    status = "loading";

    try {
      const form = new FormData();
      form.append("email", email);

      const response = await fetch(
        `https://buttondown.email/api/emails/embed-subscribe/${BUTTONDOWN_USERNAME}`,
        {
          method: "POST",
          body: form,
        },
      );

      if (response.ok) {
        status = "success";
        message = "Thanks for subscribing! Check your email to confirm.";
        email = "";
      } else {
        status = "error";
        message = "Something went wrong. Please try again.";
      }
    } catch {
      status = "error";
      message = "Something went wrong. Please try again.";
    }
  }

  function handleBackdropClick(e: MouseEvent) {
    if (e.target === e.currentTarget) {
      open = false;
    }
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "Escape") {
      open = false;
    }
  }
</script>

<svelte:window onkeydown={handleKeydown} />

{#if open}
  <!-- Backdrop -->
  <div
    class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
    onclick={handleBackdropClick}
    role="dialog"
    aria-modal="true"
    aria-labelledby="newsletter-title"
  >
    <!-- Modal -->
    <div
      class="bg-white rounded-lg shadow-xl max-w-md w-full p-6 md:p-8 relative"
    >
      <!-- Close button -->
      <button
        onclick={() => (open = false)}
        class="absolute top-4 right-4 text-emerald-500 hover:text-emerald-700 transition-colors"
        aria-label="Close"
      >
        <svg
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <h3
        id="newsletter-title"
        class="text-xl md:text-2xl font-semibold text-emerald-950 mb-2"
      >
        Subscribe to Newsletter
      </h3>
      <p class="text-sm md:text-base text-emerald-700 mb-6">
        Get notified when we publish new posts.
      </p>

      {#if status === "success"}
        <p class="text-emerald-600 font-medium">{message}</p>
      {:else}
        <form onsubmit={handleSubmit} class="space-y-4">
          <input
            type="email"
            bind:value={email}
            placeholder="your@email.com"
            required
            disabled={status === "loading"}
            class="w-full px-4 py-3 rounded-md border border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-emerald-900 placeholder:text-emerald-400 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            class="w-full px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
        {#if status === "error"}
          <p class="text-red-600 text-sm mt-3">{message}</p>
        {/if}
      {/if}
    </div>
  </div>
{/if}
