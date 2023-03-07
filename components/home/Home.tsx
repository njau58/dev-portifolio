import React, { FC } from "react";
import Header from "../header/Header";
import Hero from "../sections/Hero";
import Expertise from '../sections/Expertise'

const Home = () => {
  return (
    <div className="md:px-32 px-8 mx-auto">
      <Header />
      <Hero/>
      <Expertise/>
    </div>
  );
};

export default Home;
