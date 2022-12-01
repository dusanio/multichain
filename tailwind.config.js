/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      inter: ["inter", "sans-serif"],
    },
    extend: {
      colors: {
        darkcyan: "var(--darkcyan)",
        lightcyan: "var(--lightcyan)",
        darkgray: "var(--darkgray)",
        lightgray: "var(--lightgray)",
        lightercyan: "var(--lightercyan)",
        lightestcyan: "var(--lightestcyan)",
        arrowcyan: "var(--arrowcyan)",
        backgroundDarker: "var(--background-darker)",
        backgroundLighter: "var(--background-lighter)",
      },
    },
  },
  plugins: [require("daisyui")],
};
