/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        verde: {
          DEFAULT: '#1f7a4d',
          oscuro: '#145a37',
          claro: '#e6f4ec',
        },
        crema: '#fbf8f1',
      },
      fontFamily: {
        titulo: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
