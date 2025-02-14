/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],  // Apply 'Outfit' as the default sans font
      },
      colors: {
        tomato: '#FF6347', 
      },
      animation: {
        fadeIn: 'fadeIn 3s ease-in-out', // Custom animation name and duration
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' }, // Starting point (invisible)
          '100%': { opacity: '1' }, // Ending point (fully visible)
        },
      },
    },
  },
  plugins: [],
}
