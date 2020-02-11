import React, { Fragment } from "react";
import { Button } from "antd";
import Content from "./components/layout/content/content.component";
import { GlobalStyle } from "./global.styles";
import Navbar from "./components/layout/navbar/navbar.component";
import Footer from "./components/layout/footer/footer.component";
import Layout from "./components/layout/layout/layout.component";

function App() {
  return (
    <Fragment>
      <Layout>
        <GlobalStyle />
        <Navbar />
        <Content>
          <div>
            <h1>Hello world!</h1>
            <Button type="primary">Hello world!</Button>
          </div>
        </Content>
        <Footer>ExpConnect ©2020 Created by O2hope</Footer>
      </Layout>
    </Fragment>
  );
}

export default App;
