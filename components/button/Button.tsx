import React from "react";

interface Props {
  label: string;
  borderRadius: string;
  labelColor: string;
  backGround: string;
  hover: string;
  border?: string;
  handleOnclick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button = ({
  label,
  borderRadius,
  labelColor,
  backGround,
  hover,
  border,
  handleOnclick,
}: Props) => {
  return (
    <button
      onClick={handleOnclick}
      className={`${borderRadius} ${labelColor} ${backGround}  ${hover} ${border} py-2 px-4 text-base font-normal `}
    >
      {label}
    </button>
  );
};

export default Button;
