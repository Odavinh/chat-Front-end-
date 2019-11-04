import React from "react";
import {Route, Switch} from "react-router-dom";

import Auth from "./modules/Auth/auth";
import Home from "./modules/Home";
import Page404 from "./modules/page404/page404";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/api" component={Auth} />
        <Route path="*" component={Page404} />
      </Switch>
    </div>
  );
}

export default App;
