/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#0B203D',
        lightWhite: '#E9F3FE',
        lightBlue: '#1771E9',
        skyBlue: '#EFF3FB',
        skyDarkBlue: '#3861C4',
        grey: '#48494C',
        lightPink: '#E5E5E5',
        lightBlack: '#1E1E1E',
        lightCreem: '#A5A5A5',
        skyWhit: '#F9FBFF',              
        black2: '#101010',              
        lightSky: '#C7D3F0',              
        black3: '#020507',              
      },
      backgroundImage: {
         CommonGradient: "linear-gradient(294.21deg, #034BDA 4.27%, #33A8FF 73.84%)",
         CommonGradientH: "linear-gradient(294.21deg, #33A8FF 4.27%, #034BDA 73.84%)",
         
      },    

      fontFamily: {
        Inter: "Inter, sans-serif",
        Open: "Open Sans, sans-serif",
      },
    },
  },
  plugins: [],
}