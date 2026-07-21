/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-bg': '#1E1E1E',
        'nav-bg': '#1E1E1E',
        'nav-text': '#EFEEE0',
        'section': '#609EAF',
        'top-chart-bg': '#1f2425',
        'play-btn': '#FACD66',
      },
      spacing: {
        'standard': '20px',
      },
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      backdropBlur: {
        'lg': '15px',
      },
    },
  },
  plugins: [],
}
