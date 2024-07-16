/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage:{
        'hero-img':"url('./assets/hero.jpg')"
      }
    },
    fontFamily:{
      'playwrite':['Playwrite BE VLG', 'sans-serif']
    }
  },
  plugins: [],
}

