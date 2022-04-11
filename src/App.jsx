import React from "react";

import Boot from "./redux/boot";
import Layout from "./components/layout/Layout";

const App = () => {
  return <Layout />;
};

Boot()
  .then(() => App())
  .catch((error) => error);

export default App;
