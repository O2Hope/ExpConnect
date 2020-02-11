import React, { Fragment } from "react";
import { HeaderContainer, MenuContainer, LogoContainer } from "./navbar.styles";
import { Menu } from "antd";

const Navbar = () => (
  <Fragment>
    <HeaderContainer>
      <LogoContainer />
      <MenuContainer theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </MenuContainer>
    </HeaderContainer>
  </Fragment>
);

export default Navbar;
