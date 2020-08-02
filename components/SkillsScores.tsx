import React from "react";
import SkillScore from "./SkillScore";
import { SkillsScoresProps } from "./../_types";

const renderSkillsScores = (skills) => {
  const liClasses = "md:w-1/3";

  return skills.map((entry) => {
    return (
      <li key={entry.skill} className={liClasses}>
        <SkillScore skill={entry.skill} score={entry.score}></SkillScore>
      </li>
    );
  });
};

const SkillsScores: React.FC<SkillsScoresProps> = ({ skills }: SkillsScoresProps) => {
  const ulClasses = "md:flex flex-wrap justify-start";

  return <ul className={ulClasses}>{renderSkillsScores(skills)}</ul>;
};

export default SkillsScores;
