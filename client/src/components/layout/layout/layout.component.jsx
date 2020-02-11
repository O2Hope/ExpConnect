import React, { Fragment } from "react";
import { LayoutContainer } from "./layout.styles";

const Layout = ({ children }) => {
  console.log(children);

  return (
    <Fragment>
      <LayoutContainer>{children}</LayoutContainer>
    </Fragment>
  );
};

export default Layout;
