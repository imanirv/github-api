module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark: {
          1:"#222222",
          2:"#292929",
        },
        disabled: 'rgba(217, 217, 217, 0.6)',
        border: 'rgba(217, 217, 217, 0.1)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}