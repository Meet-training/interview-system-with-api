import React from "react";
import "./layout.css";
import Sidebar from "../sidebar/Sidebar";
import TopNav from "../topnav/TopNav";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginLayout from "./LoginLayout";
import { useSelector } from "react-redux";

import Routes from "../routes";

const UnRestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      !isLoggedIn ? (
        <>
          <Component {...props} />
        </>
      ) : (
        <Redirect
          to={{
            pathname: "/result",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

const Layout = () => {
  const isLoggedIn = useSelector((state) => state.auth.token !== null);

  return (
    <Switch>
      <UnRestrictedRoute
        exact
        path="/"
        component={LoginLayout}
        isLoggedIn={isLoggedIn}
      />
      <Route
        render={(props) => (
          <div>
            <Sidebar {...props} />
            <div className="layout__content">
              <TopNav />
              <div className="layout__content-main">
                <Routes />
              </div>
            </div>
          </div>
        )}
      />
    </Switch>
  );
};

export default Layout;
