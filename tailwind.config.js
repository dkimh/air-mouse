/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#191919',
        'card-bg': '#2D2D2D',
        text: '#E4E4E4',
        'icon-grey': '#D2D2D2',
        'text-grey': '#9D9D9D',
        'bg-grey': 'rgba(105, 105, 105, 0.4)',
        'bg-grey-bright': 'rgba(157, 157, 157, 0.5)',
        purple: '#6835BE',
        green: '#107110',
        red: '#821D38',
      },
    },
  },
  plugins: [],
}; 