import React, { FC, ReactNode } from "react";
import { Route } from "react-router-dom";

// Components
import RedirectIf from "../RedirectIf";

// Hooks
import PrivateRouteHooks from "./hooks";

interface PrivateRouteProps {
  authPath: string;
  children?: ReactNode;
  component: React.ComponentType<any>;
  exact?: boolean;
  path: string;
}

const PrivateRoute: FC<PrivateRouteProps> = ({
  authPath,
  children,
  component,
  exact,
  path,
}: PrivateRouteProps) => {
  const { authenticated } = PrivateRouteHooks();

  return (
    <RedirectIf when={!authenticated} to={authPath}>
      <Route component={component} exact={exact} path={path} />
    </RedirectIf>
  );
};

export default PrivateRoute;
