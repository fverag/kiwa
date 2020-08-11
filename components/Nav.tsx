import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { HeaderProps } from '../_types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const getVariableLinks = (router) => {
  const isHome = router.pathname === '/';
  const trabajos = (
    <>
      <span className="hidden sm:inline-block">Sobre mi Trabajo</span>
      <span className="sm:hidden">Trabajos</span>
    </>
  );

  if (isHome) {
    return (
      <>
        <AnchorLink className="ml-auto p-2" href="#works">
          {trabajos}
        </AnchorLink>
        <AnchorLink className="p-2" href="#skills">
          Skills
        </AnchorLink>
      </>
    );
  }

  return (
    <>
      <Link href="/#works">
        <a className="ml-auto p-2">{trabajos}</a>
      </Link>
      <Link href="/#skills">
        <a className="p-2" href="#skills">
          Skills
        </a>
      </Link>
    </>
  );
};

const Nav: React.FC<HeaderProps> = () => {
  const router = useRouter();
  const variableLinks = getVariableLinks(router);

  return (
    <nav className="flex">
      <Link href="/">
        <a title="home" className="p-2">
          <h1>
            <img src="/img/logo.svg" title="Valentina Morales - Diseñadora gráfica" />
          </h1>
        </a>
      </Link>
      {variableLinks}
      <Link href="/contact">
        <a className="p-2">Contacto</a>
      </Link>
    </nav>
  );
};

export default Nav;
