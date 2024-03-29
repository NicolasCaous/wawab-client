import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes></Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
