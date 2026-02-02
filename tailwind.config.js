/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts,md}'],
  theme: {
    extend: {
      colors: {
        'mint': '#e8f5e9'
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#064e3b',
            '--tw-prose-headings': '#022c22',
            '--tw-prose-links': '#059669',
            '--tw-prose-bold': '#022c22',
            '--tw-prose-bullets': '#10b981',
            '--tw-prose-quotes': '#065f46',
            '--tw-prose-quote-borders': '#10b981',
          }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
