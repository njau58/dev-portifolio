import React, { FC, useEffect, useState } from "react";
import Header from "../header/Header";
import Hero from "../sections/Hero";
import Expertise from "../sections/Expertise";
import Projects from "../sections/Projects";
import BlogSection from "../sections/BlogSection";
import Services from "../sections/Services";
import OpenSourceProjects from "../sections/OpenSourceProjects";
import Testimonials from "../sections/Testimonials";
import CTA from "../sections/CTA";
import Contact from '../sections/Contact'
import Footer from "../footer/Footer";
import {RiArrowUpSLine} from 'react-icons/ri'
import {motion,AnimatePresence} from 'framer-motion'

const Home = () => {

const [showTopButton, setShowButton] = useState <boolean>(false)

const setPositon = ()=>{

  if(window.scrollY>=400){
    setShowButton(true)
  }
  else{
    setShowButton(false)
  }
}

useEffect(()=>{

  window.addEventListener("scroll", setPositon)

},[])

const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};











  return (
    <>
 {showTopButton&& (<AnimatePresence><motion.div

initial={{x:'100'}}
animate={{x:0}}
transition={{type:'spring',stiffness:100}}
exit={{x:-100,

  
  
}}
  onClick={goToTop} className="p-3 bg-[#9195ff] bg-opacity-50 hover:bg-[#696eff] shadow-2xl rounded-full bottom-5 right-5 fixed z-50">
<div className="text-white font-bold text-2xl"><RiArrowUpSLine/></div>

  </motion.div></AnimatePresence>)}
      <Header />
      <div className="md:px-32 px-8 mx-auto">
      
        <Hero />
        <Services />
        <Expertise />
        <Projects />
        <BlogSection />
      </div>
      <OpenSourceProjects />
      <div className="md:px-32 px-4 mx-auto overflow-hidden">
        <Testimonials />
      </div>
      <div className="md:px-32 px-8 mx-auto">
        
        <CTA />
      </div>
      <div className="md:px-32 px-8 mx-auto"> <Contact/>
      <Footer/></div>
    </>
  );
};

export default Home;
