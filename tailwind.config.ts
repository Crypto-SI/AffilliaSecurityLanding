import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
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
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textShadow: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.2)',
        DEFAULT: '0 2px 4px rgba(0, 0, 0, 0.2)',
        md: '0 4px 8px rgba(0, 0, 0, 0.3)',
        lg: '0 8px 16px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }: any) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: theme('textShadow.sm', '0 1px 2px rgba(0, 0, 0, 0.2)'),
        },
        '.text-shadow': {
          textShadow: theme('textShadow.DEFAULT', '0 2px 4px rgba(0, 0, 0, 0.2)'),
        },
        '.text-shadow-md': {
          textShadow: theme('textShadow.md', '0 4px 8px rgba(0, 0, 0, 0.3)'),
        },
        '.text-shadow-lg': {
          textShadow: theme('textShadow.lg', '0 8px 16px rgba(0, 0, 0, 0.4)'),
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
export default config; 