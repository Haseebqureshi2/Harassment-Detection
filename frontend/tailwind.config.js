/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },

      colors: {
        brand: {
          DEFAULT: 'rgb(57 253 215 / <alpha-value>)',
          soft: 'rgb(57 253 215 / 0.1)',
          muted: 'rgb(57 253 215 / 0.2)',
        },
      },
    },
  },
  plugins: [],
};
