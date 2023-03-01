import React from "react";
import { useDispatch } from "react-redux";
import { toggleQuoteModal } from "../../redux/features/toggleSlice";
import {motion} from 'framer-motion'


// const buttonVariants = {
//  hidden:{scale:1},
//   visible:{
//     scale:1.1,
//     boxShadow:"0px 0px 2px rgb(255,255,255)",
//     transition:{
//       yoyo:Infinity,
//       duration:3
//     }

//   }

  
// }

const GrowTogether = () => {
  const quoteModalToggle = () => {
    dispatch(toggleQuoteModal());
  };

  const dispatch = useDispatch();

  return (
    <section className="my:py-20 py-16 bg-gradient-to-tr max-w-7xl mx-auto from-theme-secondary via-pink-700 to-theme-primary md:bg-contact-us bg-center bg-cover bg-no-repeat  mb-12 mt-24 md:rounded-lg    ">
      <div className=" flex flex-col md:justify-between items-center  md:flex-row space-y-16 md:space-y-0 mx-4 ">
        <div className="text-4xl font-extrabold font-sans text-center text-white md:text-slate-700 md:text-5xl   mx-2 md:mx-0    ">
          Partner with us for your next project
        </div>

        <div>
          <button

          // variants={buttonVariants}
          // initial="hidden"
          // whileInView="visible"
          


            onClick={quoteModalToggle}
            className="  px-6 py-3 z-40 bg-theme-primary hover:border-[1px]  hover:border-theme-primary text-white font-bold text-sm rounded-lg shadow-2xl hover hover:bg-transparent hover:text-theme-primary 
            animate-bounce "
          >
            Get a cost estimate today
          </button>
        </div>
      </div>
    </section>
  );
};

export default GrowTogether;
