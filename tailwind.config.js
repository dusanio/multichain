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
      },
    },
  },
  plugins: [],
};
