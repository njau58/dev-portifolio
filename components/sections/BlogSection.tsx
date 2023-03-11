import React from "react";
import SectionHeading from "../sectionHeading/SectionHeading";
import Blogs from '../../components/blogs/Blogs'

const Blog = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-24 mt-24 space-y-8 pb-48">
      <SectionHeading label="Blogs" />
      <p className="text-center mx-auto max-w-xl">
        {" "}
        The technological revolution is changing aspect of our lives, and the
        fabric of society itself. it's also changing the way we learn and what
        we learn
      </p>

      <Blogs />
    </div>
  );
};

export default Blog;
