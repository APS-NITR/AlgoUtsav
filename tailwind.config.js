/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "sponsor-pink": "#FC1FF9",
        "text-gr-1": "#FCCF31",
        "text-gr-2": "#FF0000",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
