import React from "react";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers";
import { createStore } from "redux";
import Layout from "./components/layout/Layout";

const App = () => {
  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
};

export default App;
