/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        minorBackground: "#232329",
        button: "#A8A5ff",
        hover: "#36363f",
      },
    },
  },
  plugins: [],
}