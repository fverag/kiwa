import React from 'react';
import clsx from 'clsx';
import { SectionProps, WithId } from '../_types';

const getTextAlignClass = (textAlign: SectionProps['textAlign']) => {
  switch (textAlign) {
    case 'left':
      return 'text-left';
    case 'center':
      return 'text-center';
    case 'right':
      return 'text-right';
  }
};

const Section: React.FC<SectionProps & WithId> = ({
  className,
  children,
  innerClassName,
  id = null,
  textAlign = 'center',
  narrow = false,
}: SectionProps & WithId) => {
  const baseInnerClasses = 'mx-2 sm:mx-auto py-12  relative';
  const narrowClass = {
    'max-w-2xl px-8 sm:px-16': narrow,
    'sm:container px-4 sm:px-8': !narrow,
  };
  const textAlignClass = getTextAlignClass(textAlign);
  const innerClass = clsx(baseInnerClasses, narrowClass, textAlignClass, innerClassName);

  return (
    <section className={className} id={id}>
      <div className={innerClass}>{children}</div>
    </section>
  );
};

export default Section;
