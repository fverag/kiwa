import React from "react";
import Head from "next/head";
import { MainHeadProps } from "../_types";

const MainHead: React.FC<MainHeadProps> = ({
  title = "Hola Soy Vale",
  children,
}: MainHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      {children}
    </Head>
  );
};

export default MainHead;