import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Signin from "./pages/Signin";

import PrivateRoute from "./components/PrivateRoute";

const Routes: FC = () => {
  return (
    <Switch>
      <PrivateRoute authPath="/" path="/dashboard" component={Dashboard} />
      <Route exact path="/" component={Signin} />
    </Switch>
  );
};

export default Routes;
