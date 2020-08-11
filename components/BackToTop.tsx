import AnchorLink from 'react-anchor-link-smooth-scroll';
import React from 'react';
import Button from './Button';

const BackToTop: React.FC = () => {
  return (
    <Button className="mx-auto mt-6 p-3" type="div" variant="clear">
      <AnchorLink href="#top">
        <img
          src="https://res.cloudinary.com/hadmouse/image/upload/v1596344314/kiwa/Icon-arrow-up_buo1qx.svg"
          alt="Volver arriba"
        />
      </AnchorLink>
    </Button>
  );
};

export default BackToTop;
