
module.exports = {
  important: true,
  //Purging for Production is configured in PostCSS Config
  purge:{    
    content: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
  },
  theme: {
    extend: {
      colors: {
           'brand':  {
              100: '#FFE3C7',
              200: '#FFAF5F',
              300: '#FFD3A8',
              400: '#FFC082',
              500: '#E54A00',
              600: '#563412',
          },
      },
      scale : {
        '200': '2',
        '250':'2.5',
        '300' : '3',
        '400' : '4'
      },
      fontFamily: {
        'playfair': ['Playfair Display'],
        'albra' :  ['Albra'],
        'coromorant' : ['Cormorant Garamond'],
       }
    },
  },
  variants: {},
  plugins: [],
};
