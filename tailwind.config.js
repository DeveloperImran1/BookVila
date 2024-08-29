/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    container: {
      padding: "1.5rem", 
      center: true,
    },
    fontFamily: {
      inter: [ "Inter", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#1aba1a",
        secondary: "",
        "text-color": "",
        "bg-color": "#ebeef6"
      }
    },
  },
  plugins: [require("daisyui")],
}

