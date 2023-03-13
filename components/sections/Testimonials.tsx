import React from "react";
import Testimonial from "../testimonial/Testimonial";
import { profile1 } from "../../assets/assets";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SectionHeading from "../sectionHeading/SectionHeading";
// import {Props} from '../../components/testimonial/Testimonial'

export interface Props {
  testimonialPerson: string;
  testimonialMessage: string;
  testimonialImage: any;
  testimonialRating: number;
}

const testimonials: Props[] = [
  {
    testimonialPerson: "Casandra",
    testimonialMessage: `We believe creators are the new generation of entrepreneurs. Movig was built to empower creators to turn their passion into scalable businesses`,
    testimonialImage: profile1,
    testimonialRating: 5,
  },
  {
    testimonialPerson: "Casandra",
    testimonialMessage: `We believe creators are the new generation of entrepreneurs. Movig was built to empower creators to turn their passion into scalable businesses`,
    testimonialImage: profile1,
    testimonialRating: 2,
  },
  {
    testimonialPerson: "Casandra",
    testimonialMessage: `We believe creators are the new generation of entrepreneurs. Movig was built to empower creators to turn their passion into scalable businesses`,
    testimonialImage: profile1,
    testimonialRating: 2,
  },
  {
    testimonialPerson: "Casandra",
    testimonialMessage: `We believe creators are the new generation of entrepreneurs. Movig was built to empower creators to turn their passion into scalable businesses`,
    testimonialImage: profile1,
    testimonialRating: 2,
  },
];



const Testimonials = () => {

  let settings = {
    dots: true,
  
    scrollbars: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  


  return (
    <div className="  mx-auto mt-48 pb-32 ">
           <div className="mb-8"><SectionHeading label="What clients had to say  " /></div> 
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
      </Slider>
    </div>
  );
};

export default Testimonials;
