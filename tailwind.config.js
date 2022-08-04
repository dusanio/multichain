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
        lightercyan: "var(--lightercyan)",
        lightestcyan: "var(--lightestcyan)",
        arrowcyan: "var(--arrowcyan)",
      },
    },
  },
  plugins: [],
};
