import { useState } from "react";
import {  FaAngleDown } from "react-icons/fa";



const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex flex-col  justify-center max-w-xl  border-b-[1px] md:ml-12  ">
      <div
        onClick={()=>setIsActive(prev=>!prev)}
        className="flex justify-between peer py-4 flex-row shadow-xl p-2 bg-white z-10  "
      >
        <div className="text-slate-500 md:text-lg font-extrabold">{title}</div>
        <hr></hr>
        <div
          className={`${
            !isActive
              ? "text-2xl text-slate-700"
              : "text-2xl text-slate-700 rotate-180"
          }`}
        >
          <FaAngleDown></FaAngleDown>
        </div>
      </div>
    
        <p className={`${isActive? "flex mt-6 text-sm text-slate-700 leading-6  m-6" : "hidden"}`}>
          {content}
        </p>
    
    </div>
  );
};

export default Accordion;
