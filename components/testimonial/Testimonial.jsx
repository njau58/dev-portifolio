import React from "react";
import Image from "next/image";
import { profile1 } from "../../assets/assets";
import { ImQuotesLeft } from "react-icons/im";
import {AiFillStar} from 'react-icons/ai'

// export interface Props {
//   testimonialPerson: string;
//   testimonialMessage: string;
//   testimanialImage: any;
//   testimonialRating: number;
// }



const Testimonial = ({testimonialImage,testimonialMessage, testimonialPerson,testimonialRating}) => {
  return (
    <div className="bg-white flex flex-row items-center justify-center m-8 p-16 mx-4   rounded-lg shadow-xl space-x-4 md:max-w-xl  md:mx-auto ">
      <div className="rounded-full">
        <Image
          src={testimonialImage}
          width={200}
          height={200}
          className="object-cover rounded-full"
        ></Image>
      </div>

      <div className="flex flex-col space-y-8">
        <div className="text-primary-color text-4xl">
          <ImQuotesLeft />
        </div>
        <p className="text-primary-text-color max-w-lg ">
        {testimonialMessage}
        </p>

        <div className="flex flex-row items-center  ">
          <div className="text-secondary-text-color pr-8">{testimonialPerson}</div>
          {Array(testimonialRating)
            .fill()
            .map(() => (
             <div className="text-secondary-color text-sm md:text-lg"><AiFillStar/></div> 
            ))}
           
         
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
