/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  mode: 'jit',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

   
    extend: {

      // fontFamily: {
      //   Sans: ['Open Sans', 'Comfortaa'],
      //  },

    //   fontFamily: theme => ({
    //     sans: ['Lato', theme('fontFamily.sans')],
    //  }),

     backgroundImage:{
      'development':"url('../assets/images/development.jpg')",
      'contact-us':"url('../assets/images/contact-us-bg.png')",
      'code': "url('../assets/images/surface1.jpg')",
      'vect1': "url('../assets/images/vect1.jpg')",
      'vect2': "url('../assets/images/vect2.png')",
      'vect3': "url('../assets/images/vect3.png')",
      'vect4': "url('../assets/images/vect4.jpg')",
      'vect5': "url('../assets/images/vect5.jpg')",
      'vect6': "url('../assets/images/vect6.jpg')",
      'vect7': "url('../assets/images/vect7.jpg')",
      'design': "url('../assets/images/web-design.jpg')",
      'back': "url('../assets/images/back.webp')",
      'black-img': "url('../assets/images/black.webp')",
      'about-img': "url('../assets/images/circles.png')",
      'mobile-bg': "url('../assets/images/mobile.webp')",
      'mobile-bg1': "url('../assets/images/mobile1.jpeg')",
      'mobile-bg2': "url('../assets/images/mobile2.jpeg')",
      'blog-banner': "url('../assets/images/blog.webp')",
      'mobile-development': "url('../assets/images/mobile-development.jpg')",
      'mobile-development-dot': "url('../assets/images/dot_bg.png')",
      'software-development-dot': "url('../assets/images/dotted_bg.png')",
      'dot-svg': "url('../assets/images/dot_svg.jpg')",
      'hero-image': "url('../assets/images/hero_home_2.jpg')",
      'scalable-product': "url('../assets/images/scalable-product.png')",
      'wave': "url('../assets/images/wave.svg')",
      'terms': "url('../assets/images/terms.webp')",
      'hp': "url('../assets/images/hp.webp')",
      'ux-ui-bg': "url('../assets/images/user-experience-bg.png')",
      'ui-dot-bg': "url('../assets/images/dot-pattern.png')",
      'stack-bg': "url('../assets/images/corner.webp')",
      'blog-bg': "url('../assets/images/nairobi.jpg')",
      
      
  
     },
      colors:{
      'theme-primary':'#5258fb',
      'theme-secondary'  :'#d4ad28',
      'theme-dark-blue':'#0c2045'

    },

     width:{
      '96':'100rem'
     }
    },
  },
  plugins: [],
}





