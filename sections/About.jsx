import React from 'react'
import Link from 'next/link'
import SubHeading from '../components/subheading/SubHeading'
import { Zoom } from 'react-reveal'
import Image from 'next/image'
import { team } from '../assets/assets'

const About = () => {
  return (
        
    <section className="  my-24">
    
    <SubHeading title="Awesome experience"/>
      <div className=" text-3xl md:text-4xl mx-2 font-bold text-slate-600 text-center mb-4 ">
        We Are SoftLeaf Applications
      </div>
 

      <div className="flex flex-col items-center justify-center md:space-x-12 md:mx-24 md:flex-row mx-6 mt-12  ">
        <div className="flex flex-col md:max-w-xl ">
          <p className="  text-slate-500 leading-7   md:text-left text-center text-sm    ">
            SoftLeaf Applications was founded with an aim to deliver robust
            and business-oriented software development solutions. Today, we
            can proudly say that the colors of our diligence turned out to
            be quite sky-lightning, We are currently the Leading Software
            Development Company in Kenya. Our personnel is highly skilled,
            with years of experience in the industry. We are distinguished
            by our responsibility, expertise and fast development time
          </p>
          <div className="flex md:justify-left justify-center  mt-12">
            <div className=" mb-24 md:mb-0 px-16 flex items-center shadow-2xl py-3 font-bold border-[1px] text-theme-primary border-theme-primary text-sm cursor-pointer rounded-lg  hover:bg-theme-primary hover:text-white">
              <Link href="/about">Explore more</Link>
            </div>
          </div>
        </div>
        <div layout="fill" className="relative  md:max-w-xl ">
     
            {" "}
          <Zoom><Image src={team} alt="empower " className="w-full h-full  object-contain"/></Zoom>  
         

        
        </div>
      </div>
    </section>
  )
}

export default About