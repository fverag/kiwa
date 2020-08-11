import React from 'react';
import clsx from 'clsx';
import { ButtonProps } from '../_types';

const variantClasses = {
  rounded: 'font-bold border-2 border-white rounded-full uppercase px-8 py-4 my-4',
  link: 'text-base p-2 underline font-normal',
  clear: '',
};

const typeClasses = {
  div: 'cursor-pointer',
};

const getButtonVariantClasses = (variant: string) => {
  if (variantClasses[variant] !== undefined) {
    return variantClasses[variant];
  }

  return null;
};

const getTypeClasses = (type: ButtonProps['type']) => {
  if (typeClasses[type] !== undefined) {
    return typeClasses[type];
  }

  return null;
};

const filterButtonClasses = (baseClasses, typeClasses, variantClasses, extraClasses) => {
  //adds a default display to the button if it hasn't been defined
  const checkAgaintst = ['block', 'inline-block'];
  const arrExtraClasses = extraClasses !== undefined ? extraClasses.split(' ') : null;
  const displayClass =
    arrExtraClasses !== null
      ? {
          'inline-block':
            arrExtraClasses.indexOf(checkAgaintst[0]) === -1 &&
            arrExtraClasses.indexOf(checkAgaintst[1]) === -1,
        }
      : null;

  return clsx(baseClasses, typeClasses, variantClasses, displayClass, extraClasses);
};

const getClickFunction = (type: ButtonProps['type']) => {
  if (type === 'div') {
    return (event) => {
      if (event.target.children) {
        event.stopPropagation();

        if (event.target.children[0] !== undefined) {
          event.target.children[0].click();
        }
      }
    };
  }

  return null;
};

const Button: React.FC<ButtonProps> = ({
  type = 'a',
  className,
  children,
  href = null,
  variant = 'rounded',
  target = null,
  onClick = null,
  ...props
}: ButtonProps) => {
  const Type = type as keyof JSX.IntrinsicElements;
  const baseClasses = 'text-center';
  const typeClasses = getTypeClasses(type);
  const variantClasses = getButtonVariantClasses(variant);
  const classes = filterButtonClasses(baseClasses, typeClasses, variantClasses, className);
  const clickFunction = onClick || getClickFunction(type);

  return (
    <Type className={classes} href={href} target={target} onClick={clickFunction} {...props}>
      {children}
    </Type>
  );
};

export default Button;
