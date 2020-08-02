import React from "react";
import Link from "next/link";
import { HeaderProps } from "../_types";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Nav: React.FC<HeaderProps> = () => {
  return (
    <nav className="flex">
      <Link href="/">
        <a title="home" className="p-2">
          <h1>
            <img src="/img/logo.svg" title="Valentina Morales - Diseñadora gráfica" />
          </h1>
        </a>
      </Link>
      <AnchorLink className="ml-auto p-2" href="#works">
        <span className="hidden sm:inline-block">Sobre mi&nbsp;</span>
        <span className="capitalize sm:normal-case">trabajo</span>
      </AnchorLink>
      <AnchorLink className="p-2" href="#skills">
        Skills
      </AnchorLink>
      <Link href="/contact">
        <a className="p-2">Contacto</a>
      </Link>
    </nav>
  );
};

export default Nav;
