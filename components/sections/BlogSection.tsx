import React from "react";
import SectionHeading from "../sectionHeading/SectionHeading";
import Blogs from '../../components/blogs/Blogs'

const Blog = () => {
  return (
    <div className="flex flex-col  mt-48 space-y-8 ">
       <div className="flex flex-start  flex-row space-x-2 mb-24 md:mb-auto  ">
        <div className="text-primary-color text-sm px-8 py-2 border-1 border-primary-color rounded-full bg-[#5258fb] bg-opacity-10">
        Insights
        </div>
      </div>
    <div className="flex justify-center items-center flex-col space-y-8">  <SectionHeading label="My Creative Journey: Sharing My Experiences Along the Way" />
      <p className="text-center mx-auto max-w-xl">
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
