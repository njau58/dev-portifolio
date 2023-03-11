import { LinkProps } from "next/link";
import React from "react";
import Blog from "./Blog";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export interface Props {
  blogTitle?: string;
  blogExcerpt?: string;
  blogUrl: string;
}

const blogs: Props[] = [
  {
    blogTitle: `What's an MVP?`,
    blogExcerpt: `To stay afloat in the competitive business landscape, you must be agile and adaptable. Not only do you need to come up with new ideas and market strategies constantly, but you also need a quick response when opportunities arise...
   `,
    blogUrl: "https://softleafapplications.com/what-is-a-minimum-viable-product",
  },

  {
    blogTitle: `Is TailwindCSS worth it?`,
    blogExcerpt: `One of the newer technologies which gets a lot of attention these days is Tailwind CSS. When I first heard about it, I was immediately interested because of my natural inclination towards the front end world...`,
    blogUrl: "https://softleafapplications.com/do-i-need-tailwindcss",
  },

];


const settings = {
  dots: true,

  scrollbars:true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2500,
  autoplaySpeed: 5000,
  cssEase: "linear",
};

const Blogs = () => {
  return (
<div className="  w-full max-w-4xl   ">
    <Slider {...settings} >
      {blogs?.map((item, idx) => {
        return <Blog blogExcerpt={item.blogExcerpt} blogUrl={item.blogUrl}  blogTitle={item.blogTitle}/>;
      })}
    </Slider>
    </div>
  );
};

export default Blogs;
