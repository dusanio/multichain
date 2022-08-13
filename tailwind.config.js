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
        lightcyan: "var(--lightcyan)",
        darkgray: "var(--darkgray)",
        lightgray: "var(--lightgray)",
        lightercyan: "var(--lightercyan)",
        lightestcyan: "var(--lightestcyan)",
        arrowcyan: "var(--arrowcyan)",
      },
    },
  },
  plugins: [require("daisyui")],
};
