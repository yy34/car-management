/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        Red: "bg-blue-700",
        White: "bg-blue-700",
        Blue: "bg-blue-700",
        Black: "bg-blue-700",
      },
    },
  },
  plugins: [],
};
