import React from "react";
import clsx from "clsx";
import { SectionProps, WithId } from "../_types";

const Section: React.FC<SectionProps & WithId> = ({
  className,
  children,
  innerClassName,
  id = null,
}: SectionProps & WithId) => {
  const baseInnerClasses =
    "sm:container sm:mx-2 sm:mx-auto py-12 px-4 sm:px-8 relative text-center";
  const innerClass = clsx(baseInnerClasses, innerClassName);

  return (
    <section className={className} id={id}>
      <div className={innerClass}>{children}</div>
    </section>
  );
};

export default Section;
