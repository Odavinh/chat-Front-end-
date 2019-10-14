import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";

import {Bloc, AuthInput, AuthButton} from "../../../components";
import {SERVER} from "../../../config";
import "../auth.css";

class Register extends Component {
  state = {login: "", email: "", password: ""};
  error = "";

  onChangeValue = (value, name) => {
    this.setState({[name]: value});
  };

  submitHandler = async e => {
    e.preventDefault();
    console.log(this.state);
    try {
      const response = await axios.post(
        SERVER + "/api/user/register",
        this.state.user
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div className="auth">
        <Bloc>
          <div className="header">
            <p>Create your account.</p>
            <p> It’s free and only takes a minute.</p>
          </div>
          <p className="text-error">{this.error ? this.error : ""}</p>
          <form className="registerForm" onSubmit={this.submitHandler}>
            <AuthInput
              placeholder="Login"
              onChangeValue={this.onChangeValue}
              name="login"
              value={this.state.login}
              error={this.error}
            />
            <AuthInput
              placeholder="Email"
              onChangeValue={this.onChangeValue}
              name="email"
              value={this.state.email}
              error={this.error}
            />
            <AuthInput
              placeholder="Password"
              onChangeValue={this.onChangeValue}
              type="password"
              name="password"
              value={this.state.password}
              error={this.error}
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
  }
}

export default Register;
