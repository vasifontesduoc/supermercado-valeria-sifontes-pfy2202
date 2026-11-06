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
        tinta: '#1d2a24',
        gris: '#6b7a72',
        borde: '#e7e2d6',
      },
      fontFamily: {
        titulo: ['Outfit', 'sans-serif'],
        texto: ['"DM Sans"', 'sans-serif'],
      },
      boxShadow: {
        suave: '0 4px 20px rgba(31, 122, 77, 0.08)',
        flotante: '0 8px 30px rgba(0, 0, 0, 0.15)',
        header: '0 4px 16px rgba(20, 90, 55, 0.25)',
      },
      keyframes: {
        aparecer: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        aparecer: 'aparecer 0.35s ease-out',
      },
    },
  },
  plugins: [],
};