/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",              // Procura na raiz (App.tsx, index.tsx)
    "./components/**/*.{js,ts,jsx,tsx}", // Procura dentro da pasta components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}