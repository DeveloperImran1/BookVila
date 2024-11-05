/** @type {import('tailwindcss').Config} */
import { keepTheme } from "keep-react/keepTheme";

const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
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
  plugins: [require("daisyui"), require('flowbite/plugin')],
}





export default keepTheme(config);