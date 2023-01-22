import React from "react";
import Link from "next/link";


const Solution = ({
  Icon,
  title,
  description,
  iconWrapperStyle,
  iconStyle,
  href,
  cardBg,
}) => {
  return (
    <>

      <div
        className={`flex flex-col items-center  justify-center ${cardBg} shadow-xl rounded-lg  mt-2 space-y-4 max-w-lg    py-9 pb-12 `}
      >
        <div className="flex items-center justify-center">
          <div className={iconWrapperStyle}></div>
          <div className={iconStyle}>{Icon}</div>
        </div>

        <h2 className="font-bold text-2xl text-slate-600">{title}</h2>
        <div className="text-slate-500 text-center md:text-base  text-sm leading-loose mx-4">{description}</div>

        <div className="pt-6 ">
          <Link href={href}>
            <a className="shadow-2xl rounded-lg flex items-center justify-center text-theme-primary font-bold  px-12  py-3 border-[1px] border-theme-primary  hover:text-white hover:bg-theme-primary  ">
              See More Details{" "}
            </a>
          </Link>
        </div>
      </div>
    
    </>
  );
};

export default Solution;