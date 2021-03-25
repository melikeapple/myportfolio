import React from "react";
import Layout from "../layout/Layout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutPage from "../../pages/AboutPage";
import ContactPage from "../../pages/ContactPage";
import Portfolio from "../../pages/Portfolio";
import Comments from "../../pages/Comments";
const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={AboutPage} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/comments" component={Comments} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
export default Router;
