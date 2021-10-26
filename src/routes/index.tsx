import React, { useState } from "react";

import AuthenticatedRoutes from "./AuthenticatedRoutes";
import UnauthenticatedRoutes from "./UnauthenticatedRoutes";

const Routes = () => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <>{authenticated ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />}</>
  );
};

export default Routes;
