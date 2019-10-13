import React from "react";

import Auth from "./modules/Auth/auth";
import Home from "./modules/Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Auth />
      <Home />
    </div>
  );
}

export default App;
