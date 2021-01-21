import React, { FC, ReactNode } from "react";
import { Redirect } from "react-router-dom";

interface RedirectIfProps {
  children?: ReactNode;
  to: string;
  when: boolean;
}

const RedirectIf: FC<RedirectIfProps> = ({
  children,
  to,
  when,
}: RedirectIfProps) => {
  return <>{when ? <Redirect to={to} /> : children}</>;
};

export default RedirectIf;
