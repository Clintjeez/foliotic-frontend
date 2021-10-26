import React, { FC } from "react";

import Routes from "./routes";

import TopNav from "./components/top-nav/TopNav";
import LandingPage from "./views/landing-page";

import "./App.scss";

const App: FC = () => {
  return (
    <>
      <Routes />
    </>
  );
};

export default App;
