/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        screens: {
          'sm': '640px', // => @media (min-width: 640px) { ... }
          'md': '768px', // => @media (min-width: 768px) { ... }
          'lg': '1024px', // => @media (min-width: 1024px) { ... }
          'xl': '1280px', // => @media (min-width: 1280px) { ... }
      }
  },
      keyframes: {
        growShrink: {
          "0%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.1)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
      animation: {
        growShrink: "growShrink 2s infinite",
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
