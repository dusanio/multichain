/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      poppins: ["poppins"],
    },
    extend: {
      colors: {
        darkcyan: "var(--darkcyan)",
        multichaingreen: "var(--lightcyan)",
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
