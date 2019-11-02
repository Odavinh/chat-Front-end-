import React from "react";
import {Route} from "react-router-dom";
import Register from "./register/register";
import Login from "./login/login";

const Auth = () => {
  return (
    <div className="auth">
      <Route exact path={"/api/user/register"} component={Register} />
      <Route exact path={"/api/user/login"} component={Login} />
    </div>
  );
};

export default Auth;
