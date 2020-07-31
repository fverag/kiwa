import React from "react";
import clsx from "clsx";
import { SectionProps } from "../_types";

const Section: React.FC<SectionProps> = ({ className, children, innerClassName }: SectionProps) => {
  const baseInnerClasses = "sm:container mx-2 sm:mx-auto py-12 px-8 relative text-center";
  const innerClass = clsx(baseInnerClasses, innerClassName);

  return (
    <section className={className}>
      <div className={innerClass}>{children}</div>
    </section>
  );
};

export default Section;
