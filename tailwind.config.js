/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        title: ["EB Garamond", "serif"],
      },
      colors: {
        gold: "#CDAA7D",
        dark: "#111111",
      },
    },
  },
  plugins: [],
};
