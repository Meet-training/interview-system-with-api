import React from "react";
import ReactDOM from "react-dom";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./assets/css/errormassage.css";
import "./assets/css/grid.css";
import "./assets/css/index.css";
import "./components/topnav/topnav.css";
import "./components/dropdown/dropdown.css";
import "./components/layout/layout.css";
import "./components/sidebar/sidebar.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/store";
import { Provider } from "react-redux";
import { store } from "./redux/store";

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
