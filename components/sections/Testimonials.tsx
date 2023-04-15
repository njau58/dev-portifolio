import React from "react";
import Testimonial from "../testimonial/Testimonial";
import { profile1,rent254, apex } from "../../assets/assets";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SectionHeading from "../sectionHeading/SectionHeading";


export interface Props {
  testimonialPerson: string;
  testimonialMessage: string;
  testimonialImage: any;
  testimonialRating: number;
}

const testimonials: Props[] = [
  {
    testimonialPerson: "Casandra, CEO Digitec Afrika",
    testimonialMessage: `Simon is an incredibly talented web developer who provided an amazing level of knowledge and expertise while working on a complex web development project.
     he was able to quickly understand and implement complex tasks, take the lead on the project, and go the extra mile to ensure its success. Highly recommended.`,
    testimonialImage: profile1,
    testimonialRating: 5,
  },
  {
    testimonialPerson: "    Peter, Engineer Lead Apex Surveyors",
    testimonialMessage: `Simon provided an excellent customer service and quality work while creating a new website for our business.
     He is knowledgeable, patient and kept us informed throughout the process, resulting in a beautiful website that we are proud of.`,
    testimonialImage: apex,
    testimonialRating: 5,
  },
  {
    testimonialPerson: "Bundi, CTO Rent254",
    testimonialMessage: `
    Simon provided an excellent service in developing a real estate website that met the company's requirements. His work was well designed, clean, and well-structured, and he kept the company informed of progress at all times.`,
    testimonialImage: rent254,
    testimonialRating: 5,
  },

];



const Testimonials = () => {

  let settings = {
    dots: true,
  
    scrollbars: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  


  return (
    <div className="  mx-auto mt-48  ">

           <div className="mb-8">
           <div className="flex items-center justify-center  mx-auto mb-8 ">
        <div className="text-primary-color text-sm font-bold">
    Testimonials
        </div>
      
      </div>
            <SectionHeading label="What clients had to say  " /></div> 

   <div className="my-6">
   <Slider {...settings}>
        {" "}
        {testimonials?.map((item, index) => {
          return (
            <Testimonial
          
              testimonialImage={item.testimonialImage}
              testimonialPerson={item.testimonialPerson}
              testimonialMessage={item.testimonialMessage}
              testimonialRating={item.testimonialRating}
            />
          );
        })}
      </Slider></div>   
    </div>
  );
};

export default Testimonials;
