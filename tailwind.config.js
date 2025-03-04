/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'warm-white': '#FAF9F8',
        'brown': {
          300: '#B08968',
          600: '#795548',
          700: '#5D4037',
          900: '#3E2723',
        },
      },
    },
  },
  plugins: [],
}