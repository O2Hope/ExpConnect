import React, { Fragment } from "react";
import { FooterContainer } from "./footer.styles";

export const Footer = ({ children }) => (
  <Fragment>
    <FooterContainer>{children}</FooterContainer>
  </Fragment>
);

export default Footer;
