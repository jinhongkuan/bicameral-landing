<script lang="ts">
  let contactType = $state<'anonymous' | 'email'>('anonymous');
  let email = $state('');
  let problemNature = $state('');
  let inputType = $state<'text' | 'url'>('text');
  let thoughts = $state('');
  let url = $state('');
  let submitted = $state(false);
  let submitting = $state(false);
  let error = $state('');

  const problemOptions = [
    {
      value: 'product-context',
      label: 'Product Context Issues',
      placeholder: 'Describe a time when product decisions were made without awareness of codebase constraints...'
    },
    {
      value: 'tech-debt',
      label: 'Tech Debt & Code Quality',
      placeholder: 'Tell us about tech debt that keeps resurfacing or code that everyone avoids touching...'
    },
    {
      value: 'knowledge-silos',
      label: 'Knowledge Silos',
      placeholder: 'Describe information that\'s trapped in someone\'s head or scattered across tools...'
    },
    {
      value: 'process-coordination',
      label: 'Process & Coordination',
      placeholder: 'Share a situation where meeting decisions didn\'t translate to implementation...'
    },
    {
      value: 'other',
      label: 'Other',
      placeholder: 'Tell us what\'s on your mind...'
    }
  ];

  const currentPlaceholder = $derived(
    problemOptions.find(opt => opt.value === problemNature)?.placeholder || 'Select a problem type above first...'
  );

  async function handleSubmit(e: Event) {
    e.preventDefault();
    submitting = true;
    error = '';

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contactType,
          email: contactType === 'email' ? email : null,
          problemNature,
          inputType,
          thoughts: inputType === 'text' ? thoughts : null,
          url: inputType === 'url' ? url : null
        })
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      submitted = true;
    } catch (err) {
      error = 'Something went wrong. Please try again.';
    } finally {
      submitting = false;
    }
  }

  function closeModal() {
    submitted = false;
    contactType = 'anonymous';
    email = '';
    problemNature = '';
    inputType = 'text';
    thoughts = '';
    url = '';
  }
</script>

<div class="max-w-2xl mx-auto">
  <h1 class="text-3xl font-semibold text-emerald-950 mb-2">Contact</h1>
  <p class="text-emerald-700 mb-8">
    Have a complaint on engineering processes? Came across a post that captures your concerns? We want to hear it!
  </p>

  <form onsubmit={handleSubmit} class="space-y-6">
    <!-- Contact Details -->
    <div class="space-y-3">
      <label class="block text-emerald-900 font-medium">Contact Details</label>
      <div class="flex gap-6">
        <label class="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="contactType"
            value="anonymous"
            checked={contactType === 'anonymous'}
            onchange={() => contactType = 'anonymous'}
            class="w-4 h-4 text-emerald-600 focus:ring-emerald-500 border-emerald-300"
          />
          <span class="text-emerald-800">Anonymous</span>
        </label>
        <label class="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="contactType"
            value="email"
            checked={contactType === 'email'}
            onchange={() => contactType = 'email'}
            class="w-4 h-4 text-emerald-600 focus:ring-emerald-500 border-emerald-300"
          />
          <span class="text-emerald-800">Provide Email</span>
        </label>
      </div>
      {#if contactType === 'email'}
        <input
          type="email"
          bind:value={email}
          placeholder="your@email.com"
          class="w-full px-4 py-2.5 border border-emerald-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white text-emerald-900 placeholder:text-emerald-400"
          required
        />
      {/if}
    </div>

    <!-- Nature of Problem -->
    <div class="space-y-3">
      <label class="block text-emerald-900 font-medium">Nature of Problem</label>
      <select
        bind:value={problemNature}
        class="w-full px-4 py-2.5 border border-emerald-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white text-emerald-800"
        required
      >
        <option value="" disabled>Select a category...</option>
        {#each problemOptions as option}
          <option value={option.value}>{option.label}</option>
        {/each}
      </select>
    </div>

    <!-- Input Type Toggle -->
    <div class="space-y-3">
      <label class="block text-emerald-900 font-medium">Share Your Thoughts</label>
      <div class="flex gap-6 mb-3">
        <label class="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="inputType"
            value="text"
            checked={inputType === 'text'}
            onchange={() => inputType = 'text'}
            class="w-4 h-4 text-emerald-600 focus:ring-emerald-500 border-emerald-300"
          />
          <span class="text-emerald-800">Write your thoughts</span>
        </label>
        <label class="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="inputType"
            value="url"
            checked={inputType === 'url'}
            onchange={() => inputType = 'url'}
            class="w-4 h-4 text-emerald-600 focus:ring-emerald-500 border-emerald-300"
          />
          <span class="text-emerald-800">Share a URL</span>
        </label>
      </div>

      {#if inputType === 'text'}
        <textarea
          bind:value={thoughts}
          placeholder={currentPlaceholder}
          class="w-full px-4 py-3 border border-emerald-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white resize-y min-h-32 text-emerald-900 placeholder:text-emerald-400"
          rows="5"
          required
        ></textarea>
      {:else}
        <input
          type="url"
          bind:value={url}
          placeholder="https://example.com/article-or-post"
          class="w-full px-4 py-2.5 border border-emerald-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white text-emerald-900 placeholder:text-emerald-400"
          required
        />
      {/if}
    </div>

    <!-- Error Message -->
    {#if error}
      <p class="text-red-600 text-sm">{error}</p>
    {/if}

    <!-- Submit Button -->
    <button
      type="submit"
      disabled={submitting}
      class="w-full py-3 bg-emerald-700 text-white font-medium rounded-lg hover:bg-emerald-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {submitting ? 'Sending...' : 'Send'}
    </button>
  </form>
</div>

<!-- Thank You Modal -->
{#if submitted}
  <div class="fixed inset-0 bg-emerald-950/50 flex items-center justify-center p-4 z-50">
    <div class="bg-mint rounded-xl p-8 max-w-md w-full border border-emerald-200">
      <h2 class="text-2xl font-semibold text-emerald-950 mb-4">Thank You!</h2>
      <p class="text-emerald-700 mb-6">
        Thank you for taking time to share your thoughts! Feel free to schedule some time to talk through how it may be addressed.
      </p>
      <div class="flex flex-col gap-3">
        <a
          href="https://calendly.com/jin-bicameral-ai/30min"
          target="_blank"
          rel="noopener noreferrer"
          class="w-full py-3 bg-emerald-700 text-white font-medium rounded-lg hover:bg-emerald-800 transition-colors text-center"
        >
          Schedule a Call
        </a>
        <button
          onclick={closeModal}
          class="w-full py-3 border border-emerald-300 text-emerald-700 font-medium rounded-lg hover:bg-emerald-100 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  </div>
{/if}
