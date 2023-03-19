import React from "react";
import Button from "../button/Button";

const CTA = () => {
  const sendMessage = () => {};
  return (
    <div className="mt-48 ">
      <div className=" relative  bg-white  rounded-2xl py-24 px-8 shadow-2xl space-y-8 max-w-7xl mx-auto overflow-clip ">
        <div className="absolute p-8 bg-gradient-to-tr from-primary-color to-[#d8daff] top-0 left-0 rounded-br-[50%] rounded-tl-3xl"></div>
        <div className="bg-gradient-to-tr from-primary-color to-[#d8daff] p-6 rounded-full absolute  -bottom-11 -right-11 ">
          {" "}
          <div className=" border-[42px] border-white rounded-full   "></div>
        </div>
        <div className="flex flex-col space-y-8 items-center justify-center">
        <span className="border-b-4 border-primary-color border-opacity-40 w-24 rounded-lg mx-auto"></span>
          <div className="text-center mx-auto  font-bold text-3xl text-primary-text-color max-w-lg ">
            Lets Work Together
          </div>
          <div className="text-center max-w-lg">
            Reach out to me. Lets Discuss your ideas. Leave the rest to me, I will bring it to life.
          </div>
          <Button
            handleOnclick={sendMessage}
            label="Contact Me"  
            labelColor="text-white"
            backGround="bg-primary-color"
            borderRadius="rounded-none"
            hover="hover:border-primary-color hover:border-2 hover:bg-white hover:text-primary-color hover:ease-in-out hover:duration-700"
          />
        </div>
      </div>
    </div>
  );
};

export default CTA;
