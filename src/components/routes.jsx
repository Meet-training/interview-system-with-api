import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import UserForm from "./Users/UserForm";

import UserListTable from "./Users/UserListTable";

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

  return (
    <Switch>
      <RestrictedRoute
        path="/interviewResult"
        component={InterviewResultTable}
        isLoggedIn={isLoggedIn}
      />
      <RestrictedRoute
        path="/addInterviewResult"
        component={InterviewResultForm}
        isLoggedIn={isLoggedIn}
      />
      <RestrictedRoute
        path="/editInterviewResult/:id"
        component={InterviewResultForm}
        isLoggedIn={isLoggedIn}
      />
      <RestrictedRoute
        path="/usersList"
        component={UserListTable}
        isLoggedIn={isLoggedIn}
      />
      <RestrictedRoute
        path="/addUsersDetails"
        component={UserForm}
        isLoggedIn={isLoggedIn}
      />
      <RestrictedRoute
        path="/editUsersDetails/:id"
        component={UserForm}
        isLoggedIn={isLoggedIn}
      />
    </Switch>
  );
};

export default Routes;
