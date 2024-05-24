/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
         CommonGradient:
         "linear-gradient(294.21deg, #034BDA 4.27%, #33A8FF 73.84%)",
      },
     
      fontFamily: {
        Inter: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
}