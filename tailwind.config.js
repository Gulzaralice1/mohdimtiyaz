/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#E6EBF4',
          100: '#C2D1E5',
          200: '#9AB6D6',
          300: '#7199C7',
          400: '#4D7BB8',
          500: '#2A60AC',
          600: '#0A2463', // Primary navy
          700: '#081D4F',
          800: '#06163B',
          900: '#040F27',
        },
        gold: {
          50: '#FDF7E2',
          100: '#FBEDC6',
          200: '#F9E3AA',
          300: '#F6D98E',
          400: '#F4CF72',
          500: '#D4AF37', // Primary gold
          600: '#B69026',
          700: '#8E7015',
          800: '#665004',
          900: '#3D3001',
        },
      },
      boxShadow: {
        'solid-sm': '4px 4px 0 0 rgba(0, 0, 0, 0.1)',
        'solid': '6px 6px 0 0 rgba(0, 0, 0, 0.1)',
        'solid-lg': '8px 8px 0 0 rgba(0, 0, 0, 0.1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        slideUp: 'slideUp 0.5s ease-out forwards',
        zoomIn: 'zoomIn 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};