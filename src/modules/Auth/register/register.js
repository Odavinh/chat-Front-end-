import React from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";

import {Bloc, AuthInput, AuthButton} from "../../../components";
import {SERVER} from "../../../config";
import "../auth.css";

const register = props => {
  const user = {login: "", email: "", password: ""};

  const onChangeValue = (value, name) => {
    user[name] = value;
  };

  const submitHandler = async e => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await axios.post(SERVER + "/api/user/register", user);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="auth">
      <Bloc>
        <div className="header">
          <p>Create your account.</p>
          <p> It’s free and only takes a minute.</p>
        </div>
        <form className="registerForm" onSubmit={submitHandler}>
          <AuthInput
            placeholder="Login"
            onChangeValue={onChangeValue}
            name="login"
            value={user.login}
          />
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
          <AuthButton text="Sign up" />
        </form>
        <div className="footer">
          <p>
            Already have an account?
            <NavLink to="/api/user/login" className="link">
              Log in
            </NavLink>
          </p>
        </div>
      </Bloc>
    </div>
  );
};

export default register;
