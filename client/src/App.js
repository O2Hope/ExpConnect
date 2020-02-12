import React, { Fragment } from "react";
import { GlobalStyle } from "./global.styles";
import Navbar from "./components/layout/navbar/navbar.component";
import Footer from "./components/layout/footer/footer.component";
import Layout from "./components/layout/layout/layout.component";

import { Switch, Route } from "react-router-dom";
import SignInPage from "./pages/sign-in/sign-in.component";

function App() {
  return (
    <Fragment>
      <Layout>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route exact path="/signin" component={SignInPage} />
        </Switch>
        <Footer>
          ExpConnect ©2020 Created by{" "}
          <a href="https://github.com/O2Hope">O2hope</a>
        </Footer>
      </Layout>
    </Fragment>
  );
}

export default App;
