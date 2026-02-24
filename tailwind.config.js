/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        earth: {
          50: '#f9f7f5',
          100: '#f0ece6',
          200: '#e0d6cd',
          300: '#cbb6a6',
          400: '#b49480',
          500: '#9d7660',
          600: '#8d6652',
          700: '#5D4037',
          800: '#4E342E',
          900: '#3E2723', // Chocolate Deep
        },
        gold: {
          300: '#E6D089',
          400: '#D4AF37', // Classic Gold
          500: '#C5A028',
          600: '#A08020',
        },
        nature: {
          500: '#5d7553', // Verde Terroso
          600: '#4a5e42',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Merriweather"', 'serif'],
        sans: ['"Montserrat"', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}