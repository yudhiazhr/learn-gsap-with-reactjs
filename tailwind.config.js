/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      perspective: {
        '100': '100px',
        '200': '200px',
        '300': '300px',
        '400': '400px',
        '500': '500px',
      },
      fontFamily: {
        Righteous: ['Righteous', "sans-serif"]
      }
    },
  },
  plugins: [
    
  ],
}

