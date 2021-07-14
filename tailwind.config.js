const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: colors.green,
      secondary: colors.red,
      gray: colors.gray,
      white: colors.white,
      red: colors.red,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
