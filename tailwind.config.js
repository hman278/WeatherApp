/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media",
  theme: {
    screens: {
      ssm: "410px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1850px",
      "4xl": "2150px",
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar"), require("tailwindcss-safe-area")],
};
