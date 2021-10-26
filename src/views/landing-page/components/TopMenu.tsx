import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

import NavBar from "./NavBar";

const TopMenu = () => {
  return (
    <header>
      <div className="container">
        <div className="flex-row space-between">
          <div>
            <Link to="/">
              <p className="brand">Foliotic</p>
            </Link>
          </div>
          <NavBar />
          <div className="flex-row">
            <Link to="/">
              <Button className="btn">Log in</Button>
            </Link>
            <Link to="/">
              <Button className="btn">Sign up</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopMenu;
