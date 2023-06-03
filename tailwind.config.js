/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{vue,js,ts,jsx,tsx}",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      'sora': 'Sora, sans-serif'
    },
    extend: {
      colors: {
        'rosa-choque': '#F30168',
        'rosa-choque-forte': '#FF1493',
      }
    },
  },
  plugins: [],
}