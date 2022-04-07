import React, { useEffect } from "react";

import "./layout.css";

import Sidebar from "../sidebar/Sidebar";
import TopNav from "../topnav/TopNav";
import Routes from "../Routes";

import { BrowserRouter, Route } from "react-router-dom";

import { Switch } from "react-router-dom";
import LoginLayout from "./LoginLayout";

const Layout = () => {
  return (
    <Switch>
      <Route exact path="/" component={LoginLayout} />
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
