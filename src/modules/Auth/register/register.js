import React from "react";
import axios from "axios";

import {Bloc, AuthInput, AuthButton} from "../../../components";

import "./register.css";

const register = props => {
  const user = {login: "", email: "", password: ""};

  const onChangeValue = (value, name) => {
    user[name] = value;
  };

  const submitHandler = async e => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await axios.post(
        "http://localhost:4000/api/user/register",
        user
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register">
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
            name="password"
            value={user.password}
          />
          <AuthButton text="Sign up" />
        </form>
      </Bloc>
    </div>
  );
};

export default register;
