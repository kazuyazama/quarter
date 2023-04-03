const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-notosans)", ...fontFamily.sans],
        inter: ["var(--font-inter)", ...fontFamily.sans],
      },
    },
    colors: {
      primary: "#DB9696",
      secondary: "#BB6A6A",
      slate: "#F7F7F5",
      border:"#EEEEEE",
      white: "#FFFFFF",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
