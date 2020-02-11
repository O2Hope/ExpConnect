import React, { Fragment } from "react";
import { ContentContainer, ContentBody } from "./content.styles";

const Content = ({ children }) => (
  <Fragment>
    <ContentContainer>
      <ContentBody>{children}</ContentBody>
    </ContentContainer>
  </Fragment>
);

export default Content;
