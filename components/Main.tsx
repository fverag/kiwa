import React from "react";
import { MainProps, WithId } from "../_types";

const Main: React.FC<MainProps & WithId> = ({
  className = "",
  children,
  id = null,
}: MainProps & WithId) => {
  return (
    <main className={className} id={id}>
      {children}
    </main>
  );
};

export default Main;
