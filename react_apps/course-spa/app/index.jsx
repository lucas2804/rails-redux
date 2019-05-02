/* eslint-disable global-require */
import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import "app-styles/main";

import configureStore from "./store/configureStore";
import App from "./components/App";
import { initialize } from "./utils/initializer";

const store = configureStore();

// Do some global configuration before starting
initialize();

render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById("app")
);

if (module.hot && process.env.NODE_ENV !== "production") {
  module.hot.accept("./components/App", () => {
    const NewApp = require("./components/App").default;
    render(
      <ReduxProvider store={store}>
        <Router>
          <NewApp />
        </Router>
      </ReduxProvider>,
      document.getElementById("app")
    );
  });
}
