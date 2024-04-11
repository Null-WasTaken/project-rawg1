/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors : {
      'main' : "#151515",
      'secondary' : '#202020',
      'maincolor' : '#fff',
      'alt' : '#3a3a3a'
    },


    extend: {
      letterSpacing : {
        'xl9' : "0.7em"
      },
      width : {
        '100' : "400px",
        '200' : "800px",
        '35e' : "530px",
        'medium' : "1700px"
      },

      height : {
        '25e' : "430px",
        '100' : "270px"
      },
      backgroundColor : {
        'altbg' : '#3a3a3a',
        'secondary' : '#202020'
      },
    },
  },
  plugins: [],
}