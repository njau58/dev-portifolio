import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const snap = () => {

   

      const settings = {
        dots: true,
    
        scrollbars:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 5000,
        cssEase: "linear",
      };
    

    return(
        <div className="mx-auto bg-black">
        <Slider {...settings} className="flex fle">
         
          
          <div className='bg-red-500 p-32'>
            
          </div>
          <div className='bg-blue-500 p-32'>
            
            </div>
            <div className='bg-yellow-900 p-32'>
            
          </div>
        
        </Slider>
        </div>
      );
}

export default snap
