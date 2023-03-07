import React from "react";

interface Props {
  label: string;
  borderRadius: string;
  labelColor: string;
  backGround: string;
  hover:string;
  border?:string;
  handleOnclick?:()=>void

}

const Button = ({ label, borderRadius, labelColor, backGround ,hover, border,handleOnclick}: Props) => {
  return (
    <button
      className={`${borderRadius} ${labelColor} ${backGround}  ${hover} ${border}  ${handleOnclick} py-2 px-4 text-base font-normal `}
    >
      {label}
    </button>
  );
};

export default Button;
