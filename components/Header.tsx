import React from 'react';
import clsx from 'clsx';
import { HeaderProps, WithId } from '../_types';

const checkAndRenderLines = (useLines: boolean) => {
  if (useLines) {
    return (
      <div className="w-full h-full bg-lines absolute top-0 left-0 bg-fixed pointer-events-none"></div>
    );
  }

  return null;
};

const Header: React.FC<HeaderProps & WithId> = ({
  className,
  children,
  uselines = false,
  id = null,
}: HeaderProps & WithId) => {
  const baseClasses = 'px-2 py-4 relative text-white bg-gradient-r-purple-pink';
  const classes = clsx(baseClasses, className);

  return (
    <header className={classes} id={id}>
      {checkAndRenderLines(uselines)}
      <div className="container mx-auto">{children}</div>
    </header>
  );
};

export default Header;
