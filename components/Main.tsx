import React from 'react';
import clsx from 'clsx';
import { MainProps, WithId } from '../_types';

const Main: React.FC<MainProps & WithId> = ({
  className = '',
  children,
  useBG = false,
  id = null,
}: MainProps & WithId) => {
  const bgClasses = {
    'bg-gradient-r-purple-pink': useBG,
  };
  const classes = clsx(bgClasses, className);

  return (
    <main className={classes} id={id}>
      {children}
    </main>
  );
};

export default Main;
