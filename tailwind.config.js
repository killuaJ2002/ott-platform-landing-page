/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainWhite: "#F5F5F7", // soft, bright white for main text
        mainGray: "#5A5A5E",
        mainLightWhite: "#B3B3B3", // muted white for secondary / non-highlight text
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
