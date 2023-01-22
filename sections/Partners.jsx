import React from 'react'
import {
  namecheap,
  aws,
 
  AfricasTalkking_img,
  Daraja_img,
  DigitalOcean_img,
} from "../assets/assets";
import Image from 'next/image';

const Partners = () => {

  const partners = [
    aws,
    AfricasTalkking_img,
    DigitalOcean_img,
    Daraja_img,
  ];
  return (
    <section className='bg-indigo-50 pb-24  '>
    <div className='text-center text-slate-500 py-12 text-sm'> THEY HAVE PARTNERED WITH US</div>

    <div className='flex flex-row items-center justify-center max-w-lg  md:mx-auto mx-4 '>
    {partners.map((partner, idx) => {
                return (
                  <div key={idx} className="relative h-[4rem] w-full bg-indigo-50 ">
                    {" "}
                    <Image
                      layout="fill"
                      className="  h-full object-contain grayscale mix-blend-multiply "
                      src={partner}
                      alt="slider"
                    ></Image>
                  </div>

                
                );
              })}
    </div>
    
    </section>
  )
}

export default Partners