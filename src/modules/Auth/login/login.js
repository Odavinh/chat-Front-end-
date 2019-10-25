import React, {Component} from "react";
import {NavLink} from "react-router-dom";

import {Bloc, AuthInput, AuthButton} from "../../../components";
import "../auth.css";

class Login extends Component {
  state = {email: "", password: "", error: ""};

  onChangeValue = (value, name) => {
    this.setState({[name]: value});
  };
  render() {
    const submitHandler = async e => {
      e.preventDefault();
      /*
      request
      */
      this.setState({
        email: "",
        password: "",
        error: ""
      });
    };
    return (
      <div className="auth">
        <Bloc>
          <div className="header">
            <p>Log in to your account</p>
          </div>
          <p className="text-error">{this.props.error ? this.error : ""}</p>
          <form className="loginForm" onSubmit={submitHandler}>
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
  }
}

export default Login;
