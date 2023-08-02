/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: colors.black,
        white: colors.white,
        gray: {
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
        },
        blue: {
          200: '#bfdbfe',
          300: '#8ED0FF',
          500: '#44A8FF',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        amber: {
          100: '#fffbeb',
          200: '#FFF5EC',
          300: '#fef3c7',
          400: '#fde68a',
        },
      },
      fontFamily: {
        'playfair-display': 'var(--font-playfair-display)',
        'dm-sans': 'var(--font-dm-sans)',
      },
    },
  },
  plugins: [],
};
