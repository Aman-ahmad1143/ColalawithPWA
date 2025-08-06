/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E53E3E',
      },
      spacing: {
        '13': '3.25rem',
        '14': '3.5rem',
        '15': '3.75rem',
        '18': '4.5rem',
        '25': '6.25rem',
        '35': '8.75rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
