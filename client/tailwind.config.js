/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkSilver: "A9A9A9",
        lightGray: "#D3D3D3",
        offWhite: "#F5F5F5",
        ivory: "#FFFFF0",
      }
    },
  },
  plugins: [],
}

