import React from "react";
import Link from "next/link";

interface HeaderProps {
  className?: string;
}

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
      <Link href="/about">
        <a className="ml-auto p-2">Sobre mi trabajo</a>
      </Link>
      <Link href="/skills">
        <a className="p-2">Skills</a>
      </Link>
      <Link href="/contact">
        <a className="p-2">Contacto</a>
      </Link>
    </nav>
  );
};

export default Nav;
