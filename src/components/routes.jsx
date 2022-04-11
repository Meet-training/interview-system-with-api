import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import UserForm from "./Users/UserForm";
import UserResultTable from "./Users/UserListTable";
import InterviewResultForm from "./InterviewResult/InterviewResultForm";
import InterviewResultTable from "./InterviewResult/InterviewResultTable";
import { useSelector } from "react-redux";

const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

const Routes = () => {
  const isLoggedIn = useSelector((state) => state.auth.token !== null);
  // console.log("isLoggedIn", isLoggedIn);
  return (
    <Switch>
      <RestrictedRoute
        path="/result"
        component={InterviewResultTable}
        isLoggedIn={isLoggedIn}
      />
      <RestrictedRoute
        path="/add-result"
        component={InterviewResultForm}
        isLoggedIn={isLoggedIn}
      />
      <RestrictedRoute
        path="/users"
        component={UserResultTable}
        isLoggedIn={isLoggedIn}
      />
      <RestrictedRoute
        path="/add-users"
        component={UserForm}
        isLoggedIn={isLoggedIn}
      />
    </Switch>
  );
};

export default Routes;
