import React from "react";
import SectionHeading from "../sectionHeading/SectionHeading";
import Blogs from '../../components/blogs/Blogs'

const Blog = () => {
  return (
    <div id="blog" className="flex flex-col  mt-48 space-y-8 ">
       <div className="flex items-center justify-center  mx-auto  ">
        <div className="text-primary-color text-sm font-bold">
      Insight
        </div>
      
      </div>
    <div className="flex justify-center items-center flex-col space-y-8">  <SectionHeading label="Sharing Experiences Along the Way" />
      <p className="text-center mx-auto max-w-xl pb-16">
        {" "}
        The technological revolution is changing aspect of our lives, and the
        fabric of society itself. it's also changing the way we learn and what
        we learn
      </p>

      <Blogs /></div>
    </div>
  );
};

export default Blog;
