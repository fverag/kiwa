import React from "react";
import { WithChildren } from "../_types";
import Section from "./Section";
import Button from "./Button";

const Footer: React.FC<WithChildren> = ({ children }: WithChildren) => {
  return (
    <footer>
      <Section className="bg-darkgrey">
        <div>
          <img
            src="/img/logo.svg"
            title="Valentina Morales - Diseñadora gráfica"
            className="mx-auto mb-6"
          />
          <p className="mb-4">
            <Button
              variant="link"
              className="text-mediumlightgrey"
              href="mailto:valentinamorall@gmail.com"
              target="_blank"
            >
              Escríbeme
            </Button>
          </p>
          <p className="text-darkergrey">Copyright © Todos los derechos reservados - 2020</p>
        </div>

        {children}
      </Section>
    </footer>
  );
};

export default Footer;
