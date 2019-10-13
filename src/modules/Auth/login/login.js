import React from "react";
import {NavLink} from "react-router-dom";

import {Bloc, AuthInput, AuthButton} from "../../../components";
import "../auth.css";

const login = props => {
  const user = {email: "", password: ""};

  const onChangeValue = (value, name) => {
    user[name] = value;
  };

  const submitHandler = async e => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div className="auth">
      <Bloc>
        <div className="header">
          <p>Log in to your account</p>
        </div>
        <form className="loginForm" onSubmit={submitHandler}>
          <AuthInput
            placeholder="Email"
            onChangeValue={onChangeValue}
            name="email"
            value={user.email}
          />
          <AuthInput
            placeholder="Password"
            onChangeValue={onChangeValue}
            type="password"
            name="password"
            value={user.password}
          />
          <AuthButton text="Log in" />
        </form>
        <div className="footer">
          <p>
            Don’t have an account?
            <NavLink to="/api/user/register" className="link">
              Sing up
            </NavLink>
          </p>
        </div>
      </Bloc>
    </div>
  );
};

export default login;
