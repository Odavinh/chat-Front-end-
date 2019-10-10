import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

import "./App.css";

import {Register} from "./modules";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path={"/api/user/register"} component={Register} />
      </div>
    </BrowserRouter>
  );
}

export default App;
