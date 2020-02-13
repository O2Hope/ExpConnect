import React, { Fragment } from "react";
import { GlobalStyle } from "./global.styles";
import Navbar from "./components/layout/navbar/navbar.component";
import Footer from "./components/layout/footer/footer.component";
import Layout from "./components/layout/layout/layout.component";

import { Switch, Route } from "react-router-dom";
import SignInPage from "./pages/sign-in/sign-in.component";
import PeoplePage from "./pages/people/people.component";

function App() {
  return (
    <Fragment>
      <Layout>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route exact path="/signin" component={SignInPage} />
          <Route exact path="/people" component={PeoplePage} />
        </Switch>
      </Layout>
    </Fragment>
  );
}

export default App;
