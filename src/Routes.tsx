import React, { FC } from "react";

import { Route, Switch } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Signin from "./pages/Signin";

const Routes: FC = () => {
  return (
    <Switch>
      <Route path="/dashboard" component={Dashboard}></Route>
      <Route exact path="/" component={Signin}></Route>
    </Switch>
  );
};

export default Routes;
