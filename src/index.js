import React from "react";
import ReactDOM from "react-dom";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";

import "./assets/css/errormassage.css";
import "./assets/css/grid.css";

import "./assets/css/index.css";
import App from "./App";
import { Provider } from "react-redux";
import { history, store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

document.title = "Interview Result";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
