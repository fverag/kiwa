import React from "react";
import clsx from "clsx";
import { SkillScoreProps } from "../_types";

const widthBindings = {
  "10": ["w-1/6", "w-5/6"],
  "20": ["w-1/4", "w-3/4"],
  "30": ["w-4/12", "w-8/12"],
  "40": ["w-2/5", "w-3/5"],
  "50": ["w-1/2", "w-1/2"],
  "60": ["w-3/5", "w-2/5"],
  "70": ["w-4/6", "w-2/6"],
  "80": ["w-4/5", "w-1/5"],
  "90": ["w-11/12", "w-1/12"],
};

const getScoreClasses = (score: number) => {
  const baseMainClasses = "h-3";
  const baseSecondaryClasses = "bg-lightgrey relative with-rounded-fix";
  const widthClasses = widthBindings[score.toString()];

  return [clsx(baseMainClasses, widthClasses[0]), clsx(baseSecondaryClasses, widthClasses[1])];
};

const SkillScore: React.FC<SkillScoreProps> = ({ skill, score }: SkillScoreProps) => {
  const [barClass, antiBarClass] = getScoreClasses(score);
  const scoreWrapperClasses =
    "flex border-2 border-pink bg-gradient-r-purple-pink overflow-hidden rounded-lg mt-4";

  return (
    <article className="p-4">
      <h4 className="text-left text-md lg:text-base">{skill}</h4>
      <div className={scoreWrapperClasses}>
        <div className={barClass}></div>
        <div className={antiBarClass}></div>
      </div>
    </article>
  );
};

export default SkillScore;
