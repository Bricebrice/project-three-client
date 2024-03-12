/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mantis: {
          50: "#EDF7EE",
          100: "#C9E8CB",
          200: "#A5D9A9",
          300: "#81CA86",
          400: "#5DBB63",
          500: "#44A24A",
          600: "#357E39",
          700: "#265A29",
          800: "#173619",
          900: "#081208",
        },
        mandarin: {
          50: "#FFF6E5",
          100: "#FFE4B3",
          200: "#FFD280",
          300: "#FFC04D",
          400: "#FFAE1A",
          500: "#E69500",
          600: "#B37300",
          700: "#805300",
          800: "#4D3200",
          900: "#1A1100",
        },
        mustard: {
          50: "#FFFAE6",
          100: "#FFF1B3",
          200: "#FEE880",
          300: "#FEDF4D",
          400: "#FED51D",
          500: "#E4BC01",
          600: "#B29201",
          700: "#7F6801",
          800: "#4C3F00",
          900: "#191500",
        },
      },
    },
  },
  plugins: [],
};
