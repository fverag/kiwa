import React from "react";
import { SkillProps } from "./../_types";

const Skill: React.FC<SkillProps> = ({ image, title }: SkillProps) => {
  return (
    <article className="flex md:block items-center justify-between">
      <div className="my-2 sm:my-6 mx-auto w-1/4 sm:w-1/5 md:w-1/2 p-1">
        <img src={image} alt={title} className="object-center object-contain w-full h-full block" />
      </div>
      <h4 className="w-3/4 sm:w-4/5 md:w-full text-left text-md md:text-center px-4 py-2 sm:p-2 md:p-1">
        {title}
      </h4>
    </article>
  );
};

export default Skill;
