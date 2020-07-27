import React from "react";

interface MainProps {
  className?: string;
  children?: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ className = "", children }: MainProps) => {
  return <main className={className}>{children}</main>;
};

export default Main;
