import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import LandingPage from "../views/landing-page";

const UnauthenticatedRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LandingPage} />
      </Switch>
    </Router>
  );
};

export default UnauthenticatedRoutes;
