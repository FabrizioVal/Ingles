/** @type {import('tailwindcss').Config} */
module.exports = ({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,css}", // Add the existing content patterns
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});