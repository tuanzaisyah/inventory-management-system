/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      blue: {
        100: "#F8FBFF",
        200: "#D3E3F8",
        300: "#EBF2FB",
        400: "#5394E7",
        600: "#486386",
        900: "#10325C",
      },

      red: {
        500: "#EE5050",
        600: "#ED1515",
      },
      black: "#1F1B1C",
      grey: "#7B6F6F",
      green: "#70C670",
      white: "#FEFEFE",
    },
    fontFamily: {
      logo: ["Varela", "sans-serif"],
      text: ["Inter", "sans-serif"],
    },
    extend: {
      boxShadow: {
        custom: '0px 0px 5px 0px rgba(5, 55, 123, 0.1)',
      },
    },
  },
  plugins: [],
};
