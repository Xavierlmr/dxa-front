/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'fill-16': 'repeat(auto-fill, minmax(14rem, 1fr))',
      }
    },
  },
  plugins: [],
}
