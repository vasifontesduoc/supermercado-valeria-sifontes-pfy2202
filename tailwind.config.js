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
        naranja: '#e8692e',
      },
      fontFamily: {
        titulo: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        suave: '0 4px 20px rgba(31, 122, 77, 0.08)',
        flotante: '0 8px 30px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
};