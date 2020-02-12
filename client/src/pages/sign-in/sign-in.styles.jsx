import styled from "styled-components";
import { Row, Button, Typography } from "antd";

const { Title } = Typography;

export const SignInContainer = styled(Row)`
  height: 100%;
`;

export const FormContainer = styled(Row)`
  padding: 25px;
`;

export const SignInButton = styled(Button)`
  width: 100%;
`;

export const ForgotPassword = styled.a`
  float: right;
`;

export const TitleContainer = styled(Title)`
  text-align: center;
  width: 100%;
`;
