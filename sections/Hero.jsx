import React from "react";
import { motion } from "framer-motion";
import Typical  from "react-typical";
import Button from "../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleQuoteModal,
} from "../redux/features/toggleSlice";
import { hero_banner } from "../assets/assets";
import Image from "next/image";

//framer variant

const heroVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2.5,
    },
  },
};

const Hero = () => {

  const dispatch = useDispatch()

  const quoteModalToggle = () => {
    dispatch(toggleQuoteModal());
  };
  return (
    <section className=" relative  bg-fixed    bg-gradient-to-t to-[#11345a] from-[#5258fb] via-[#11345a] rounded-br-full ">
      <div className="flex flex-row max-w-7xl mx-auto items-center justify-center py-36 ">
      <div className="relative z-20   ">
            <div className=" flex flex-col  justify-start mx-6  space-y-6 mt-16 md:mt-0  ">
              <motion.div
              initial={{opacity:0}}

              animate={{opacity:1}}
              transition={{duration:2.5 }}


               className="  text-5xl md:text-6xl  font-bold   text-white w-full   ">
             <span className="text-transparent  bg-clip-text bg-gradient-to-r from-theme-secondary to-pink-600"> Custom</span> Web solutions Focused on your Business Success{" "}
                <Typical
                  className="text-[2rem]    pt-3"
                  steps={[
                    "Discover.",
                    2000,
                    "Innovate",
                    2000,
                    " Connect.",
                    2000,
                  ]}
                  loop={Infinity}
                  wrapper="p"
                />
              </motion.div>


              <motion.div 

              initial={{opacity:0}}
              animate={{opacity:1}}
            transition={{duration:2.5}}
              
              className="   text-white">
                SoftLeaf Applications help you bring your product and idea to
                life - whether it's a Minimum Viable Product, UX/UI Services or
                general help to scale your business.
              </motion.div>


             <motion.div
             initial={{y:'100vh'}} 
             animate={{y:0}}
             transition={{duration:2, delay:0.5, type:'spring', stiffness:20}}
             
             > <Button onClick={quoteModalToggle} label=" Elevate Your Business Now" extra="px-6 py-3 flex justify-start]"></Button></motion.div>

            
            </div> 
          </div>

          <div  className="hidden md:flex relative z-40 w-[95rem] h-[40.625rem]  "> <Image layout="fill" className="w-full h-full object-cover" src={hero_banner}></Image></div>
      </div>
          
        
          
          <div className=" absolute bg-theme-dark-blue    md:opacity-60 opacity-80 inset-y-0  z-10 w-full h-full"></div>

        </section>
  );
};

export default Hero;
