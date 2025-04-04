/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Roboto', 'sans-serif'],
          mono: ['Roboto Mono', 'monospace'],
          dramatic: ['Playfair Display', 'serif'],
          boldDramatic: ['Oswald', 'sans-serif'],
        },
        fontSize: {
          huge: ['10rem', { lineHeight: '2' }],
        },
        height: {
          screen: '100dvh',
        },
      },
    },
    plugins: [],
    corePlugins: {
      // Ensure scrollbar utilities aren't removed if you're using Tailwind's corePlugins
    }
  }