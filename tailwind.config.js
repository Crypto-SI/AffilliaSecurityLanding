/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#1A202C', // Deep Navy Blue
        'accent-gold': '#B08D57', // Metallic, Desaturated Gold
        'primary-light': '#F7F7F7', // Off-White / Light Cream
        'text-dark': '#101010', // Black / Very Dark Charcoal
        'text-light': '#E8E6E1', // Off-White / Light Cream
      },
    },
  },
  plugins: [],
} 