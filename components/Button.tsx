import React from "react";
import clsx from "clsx";
import { ButtonProps } from "../_types";

const filterButtonClasses = (baseClasses, extraClasses) => {
  //adds a default display to the button if it hasn't been defined
  const checkAgaintst = ["block", "inline-block"];
  const arrExtraClasses = extraClasses.split(" ");
  const displayClass = {
    "inline-block":
      arrExtraClasses.indexOf(checkAgaintst[0]) === -1 &&
      arrExtraClasses.indexOf(checkAgaintst[1]) === -1,
  };

  return clsx(baseClasses, displayClass, extraClasses);
};

const Button: React.FC<ButtonProps> = ({
  type = "a",
  className,
  children,
  href = null,
}: ButtonProps) => {
  const Type = type as keyof JSX.IntrinsicElements;
  const baseClasses =
    "border-2 border-white rounded-full uppercase px-8 py-3 my-4 text-center font-bold";
  const classes = filterButtonClasses(baseClasses, className);

  return (
    <Type className={classes} href={href}>
      {children}
    </Type>
  );
};

export default Button;
