import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

import store from "./store";
{
  /* <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider> */
}
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
