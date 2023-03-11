import React, { FC } from "react";
import Header from "../header/Header";
import Hero from "../sections/Hero";
import Expertise from '../sections/Expertise'
import Projects from '../sections/Projects'
import BlogSection from '../sections/BlogSection'
import Services from "../sections/Services";
import OpenSourceProjects from "../sections/OpenSourceProjects";

const Home = () => {
  return (<>
    <div className="md:px-32 px-8 mx-auto">
      <Header />
      <Hero/>
      <Services/>
      <Expertise/>
      <Projects/>
      <BlogSection/>
  
    </div>

    <OpenSourceProjects/>
    </>
  );
};

export default Home;
