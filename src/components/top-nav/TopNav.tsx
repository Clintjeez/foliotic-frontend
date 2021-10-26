import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

const TopNav: FC = () => {
  return (
    <nav>
      <div className="container">
        <div className="flex-row">
          {/* <Link to="/"> */}
          <p className="brand">Foliotic</p>
          {/* </Link> */}
          {/* <Link to="/"> */}
          <Button className="btn pri-bg">Signup</Button>
          {/* </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
