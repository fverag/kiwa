import React from "react";
import Skill from "./Skill";
import { SkillsProps, SkillProps } from "./../_types";

const renderSkills = (skills: SkillProps[]) => {
  const output = [];

  for (let skill of skills) {
    output.push(
      <li className="md:w-1/4 p-2 sm:p-4" key={skill.title}>
        <Skill image={skill.image} title={skill.title} />
      </li>
    );
  }

  return output;
};

const Skills: React.FC<SkillsProps> = ({ skills }: SkillsProps) => {
  return <ul className="md:flex">{renderSkills(skills)}</ul>;
};

export default Skills;
