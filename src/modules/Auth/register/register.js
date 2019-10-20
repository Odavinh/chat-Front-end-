import React, {Component} from "react";
import {NavLink} from "react-router-dom";

import {Bloc, AuthInput, AuthButton} from "../../../components";
import {BASE_PATH} from "../../../config";
import "../auth.css";

const SEARCH_PATH = "/api/user/register";
//const SEARCH_PARAM = "query=";

class Register extends Component {
  state = {login: "", email: "", password: "", searchQuery: ""};
  error = "";

  onChangeValue = (value, name) => {
    this.setState({[name]: value});
  };

  submitHandler = async e => {
    e.preventDefault();
    console.log(this.state);
    /*
      request
      */
    const {email, password, login} = this.state;
    fetch(`${BASE_PATH}${SEARCH_PATH}`)
      .then(res => res.json({email, password, login}))
      .then(res => this.resultReq(res))
      .catch(error => console.log(error));
    this.setState({
      email: "",
      password: "",
      login: ""
    });
  };

  resultReq(result) {
    console.log(result);
  }

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
              error={Boolean(this.error)}
            />
            <AuthInput
              placeholder="Email"
              onChangeValue={this.onChangeValue}
              name="email"
              value={this.state.email}
              error={Boolean(this.error)}
            />
            <AuthInput
              placeholder="Password"
              onChangeValue={this.onChangeValue}
              type="password"
              name="password"
              value={this.state.password}
              error={Boolean(this.error)}
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
