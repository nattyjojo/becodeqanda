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
        "shadow-color": "0, 0, 0, 0.15 0px -4px 0px 1px inset",
        // yellow: "#f5a23d",
        // green: "#34d399",
      },
      screens: {
        sm: "400px", // Small screens
        md: "768px", // Medium screens
        lg: "1024px", // Large screens
        xl: "1280px", // Extra-large screens
        "2xl": "1536px", // Custom breakpoint
      },
      fontFamily: {
        "main-font": "Barlow, Sans-serif, sans-serif",
      },
    },
  },
  plugins: [],
};
