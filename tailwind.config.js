/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2AA8FF",
        grayish: "#ABB6C7",
        "fade-grayish": "#F0F0F0"
      }
    },
  },
  plugins: [],
}