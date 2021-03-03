import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, useLocation } from "react-router-dom";
import { getAuthedUser } from "../redux/modules/authedUser";

export default function PrivateRoute({ component: Component, ...rest }) {
  const authedUser = useSelector(getAuthedUser);
  const location = useLocation();

  return (
    <Route
      {...rest}
      render={(props) =>
        authedUser === null ? (
          <Redirect
            to={{
              pathname: "/auth",
              state: { redirectedFrom: location },
            }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}
