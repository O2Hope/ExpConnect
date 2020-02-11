import styled from "styled-components";
import { Layout, Menu } from "antd";

const { Header } = Layout;

export const HeaderContainer = styled(Header)``;

export const MenuContainer = styled(Menu)`
  line-height: 64px;
  float: right;
`;

export const LogoContainer = styled.div`
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
`;
