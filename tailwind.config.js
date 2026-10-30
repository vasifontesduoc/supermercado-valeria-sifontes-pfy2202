/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
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