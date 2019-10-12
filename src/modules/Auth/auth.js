import React from "react";
import {Route, BrowserRouter} from "react-router-dom";
import Register from "./register/register";
import Login from "./login/login";

const Auth = () => {
  return (
    <BrowserRouter className="auth">
      <div>
        <Route path={"/api/user/register"} component={Register} />
        <Route path={"/api/user/login"} component={Login} />
      </div>
    </BrowserRouter>
  );
};

export default Auth;
