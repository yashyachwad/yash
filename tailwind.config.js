/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        coda: ['Coda', 'cursive'],
        gorditas: ['Gorditas', 'cursive'],
        lobster: ['Lobster Two', 'cursive'], // good
        outfit: ['Outfit', 'sans-serif'],
        protest: ['Protest Guerrilla', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
