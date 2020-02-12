import React from "react";
import SignInForm from "../../components/sign-in/sign-in.component";

import { SignInContainer } from "./sign-in.styles";

import { Col } from "antd";

import Content from "../../components/layout/content/content.component";

const SignInPage = () => (
  <SignInContainer type="flex" justify="center" align="middle">
    <Col xs={18} md={12} lg={8}>
      <Content>
        <SignInForm />
      </Content>
    </Col>
  </SignInContainer>
);

export default SignInPage;
