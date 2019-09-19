import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute(props) {
  const { path, isAuthorized, component: Component } = props;

  return (
    <Route
      path={path}
      render={props =>
        isAuthorized ? <Component /> : <Redirect to="/login" />
      }
    />
  );
}

export default PrivateRoute;
