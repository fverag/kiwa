import React from "react";
import clsx from "clsx";

interface HeaderProps {
  className?: string;
  children?: React.ReactNode;
  uselines?: boolean;
}

const checkAndRenderLines = (useLines: boolean) => {
  if (useLines) {
    return (
      <div className="w-full h-full bg-lines absolute top-0 left-0 bg-fixed pointer-events-none"></div>
    );
  }

  return null;
};

const Header: React.FC<HeaderProps> = ({ className, children, uselines = false }: HeaderProps) => {
  const baseClasses = "px-2 py-4 relative";
  const classes = clsx(baseClasses, className);

  return (
    <header className={classes}>
      {checkAndRenderLines(uselines)}
      <div className="container mx-auto">{children}</div>
    </header>
  );
};

export default Header;
