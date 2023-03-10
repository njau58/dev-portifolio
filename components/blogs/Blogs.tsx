import { LinkProps } from "next/link";
import React from "react";
import Blog from "./Blog";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export interface Props {
  blogTitle?: string;
  blogImage?: string;
  blogUrl: string;
}

const blogs: Props[] = [
  {
    blogTitle: `What's an MVP?`,
    blogImage: "fdffdd",
    blogUrl: "https:softleafapplictions.com/blog",
  },

  {
    blogTitle: `What's an MVP?`,
    blogImage: "fdffdd",
    blogUrl: "https:softleafapplictions.com/blog",
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
<div className="  md:max-w-xl max-w-lg ">
    <Slider {...settings} >
      {blogs?.map((item, idx) => {
        return <Blog blogImage={item.blogImage} blogUrl={item.blogUrl}  blogTitle={item.blogTitle}/>;
      })}
    </Slider>
    </div>
  );
};

export default Blogs;
