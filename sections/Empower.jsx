import React from "react";
import Image from "next/image";
import { Zoom } from "react-reveal";
import { empower } from "../assets/assets";
import { toggleQuoteModal } from "../redux/features/toggleSlice";
import { useDispatch } from "react-redux";

const Empower = () => {
  const dispatch = useDispatch();

  const quoteModalToggle = () => {
    dispatch(toggleQuoteModal());
  };

  return (
    <section className=" mx-auto md:p-12 p-4 my-12">
    <div className="flex flex-col items-center  justify-center space-y-9 md:space-y-0 md:flex-row  mx-6  ">
      <div className="flex flex-col max-w-xl  items-center justify-center py-12  bg-theme-primary    ">
        <div className="text-center font-bold mx-9 text-white text-2xl my-12 md:mx-24">
          We Empower Your Business With Out-Of-The-Box Digital Solutions
        </div>
        <button
          onClick={quoteModalToggle}
          className=" bg-white text-slate-700 px-4 py-2 hover:text-white hover:bg-500"
        >
          Get in Touch
        </button>
      </div>
      <div layout="fill" className="relative md:ml-24 md:max-w-xl ">
     
     {" "}
   <Zoom><Image src={empower} alt="empower " className="w-full h-full  object-contain"/></Zoom>  
  

 
 </div>
    </div>
  </section>
  );
};

export default Empower;
