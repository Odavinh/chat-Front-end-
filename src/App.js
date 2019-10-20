import React from "react";
import {Route, Switch} from "react-router-dom";

import Auth from "./modules/Auth/auth";
import Home from "./modules/Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Auth />
      </Switch>
    </div>
  );
}

export default App;
