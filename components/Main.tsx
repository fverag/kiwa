import React from "react";
import { MainProps } from "../_types";

const Main: React.FC<MainProps> = ({ className = "", children }: MainProps) => {
  return <main className={className}>{children}</main>;
};

export default Main;
