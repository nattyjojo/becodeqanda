/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#1B3536",
        "secondary-color": "#194747",
        "light-color": "#FFF",
        "button-color": "#46C3C6",
        "answerbtn-one": "red",
        "shadow-color": "rgba(0, 0, 0, 0.15) 0px -4px 0px 1px inset",
      },
      fontFamily: {
        "main-font": "Barlow, Sans-serif, sans-serif",
      },
    },
  },
  plugins: [],
};
