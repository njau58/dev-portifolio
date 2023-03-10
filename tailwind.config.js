/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  mode: 'jit',
  theme: {
    // screens: {
    //   sm: '480px',
    //   md: '768px',
    //   lg: '976px',
    //   xl: '1440px',
    // },

   
    extend: {

      // fontFamily: {
      //   Sans: ['Open Sans', 'Comfortaa'],
      //  },

    //   fontFamily: theme => ({
    //     sans: ['Lato', theme('fontFamily.sans')],
    //  }),

     backgroundImage:{
      "blog-mvp":"url('../assets/images/mvp.jpg')"
     
    
  
     },
      colors:{
      'primary-color':'#5258fb',
      'primary-text-color':'#141C3A',
      'secondary-text-color':'#7F7F7F',
      'secondary-color':'#F5A436'
    
    },

     width:{
      '96':'100rem'
     }
    },
  },
  plugins: [],
}





