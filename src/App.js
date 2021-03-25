import { hot } from "react-hot-loader/root";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Portfolio from "./pages/Portfolio";
import Comments from "./pages/Comments";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={AboutPage} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/comments" component={Comments} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default hot(App);
