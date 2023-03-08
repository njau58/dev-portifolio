import React from "react";

interface Props {
  skill: string;
  description: string;
  icon: JSX.Element;
}

const Skill = ({ skill, description, icon }: Props) => {
  return (
    <div className="flex flex-col mx-4 space-y-4 items-center justify-center rounded-3xl bg-white shadow-2xl py-12 px-4 hover:bg-[#5258fb] hover:bg-opacity-5 cursor-pointer ">
      <div className="rounded-full bg-white p-2 border-2 border-primary-color border-opacity-70">
        <div className="text-4xl text-primary-color">{icon}</div>
      </div>

      <div className="text-primary-text-color font-semibold text-2xl">
        {" "}
        {skill}
      </div>
      <div className="text-center text-secondary-text-color text-sm">{description}</div>
    </div>
  );
};

export default Skill;
