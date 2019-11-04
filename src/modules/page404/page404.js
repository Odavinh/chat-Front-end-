import React from "react";
import {NavLink} from "react-router-dom";

import "./page404.css";

const Page404 = () => {
  return (
    <div className="page-404">
      <h1>404</h1>
      <h3>Page not found!</h3>
      <NavLink className="link" to="/">
        HOME
      </NavLink>
    </div>
  );
};

export default Page404;
