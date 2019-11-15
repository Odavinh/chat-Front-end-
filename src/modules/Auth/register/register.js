import React, {Component} from "react";
import {NavLink, Redirect} from "react-router-dom";
import {connect} from "react-redux";

import {registerFetch} from "../../../actions/auth";

import {Bloc, AuthInput, AuthButton, Loading} from "../../../components";
import "../auth.css";

class Register extends Component {
  state = {login: "", email: "", password: ""};

  onChangeValue = (value, name) => {
    this.setState({[name]: value});
  };

  submitHandler = async e => {
    e.preventDefault();
    const {email, password, login} = this.state;
    this.props.registerUser("/api/user/register", email, password, login);
    this.setState({
      email: "",
      password: "",
      login: ""
    });
  };

  render() {
    const {err, message, isLoading} = this.props;
    const field = String(err).split('"')[1];

    if (isLoading) return <Loading text="register" />;

    if (message)
      return (
        <Redirect
          to={{
            pathname: "/api/user/login",
            state: {register: message}
          }}
        />
      );
    return (
      <div className="auth">
        <Bloc>
          <div className="header">
            <p>Create your account.</p>
            <p> It’s free and only takes a minute.</p>
          </div>
          <p className="text-error">{err ? err : ""}</p>
          <form className="registerForm" onSubmit={this.submitHandler}>
            <AuthInput
              placeholder="Login"
              onChangeValue={this.onChangeValue}
              name="login"
              value={this.state.login}
              error={Boolean(field === "login")}
            />
            <AuthInput
              placeholder="Email"
              onChangeValue={this.onChangeValue}
              name="email"
              value={this.state.email}
              error={Boolean(field === "email")}
            />
            <AuthInput
              placeholder="Password"
              onChangeValue={this.onChangeValue}
              type="password"
              name="password"
              value={this.state.password}
              error={Boolean(field === "password")}
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

const mapStateToProps = state => ({
  err: state.auth.err,
  message: state.auth.message,
  isLoading: state.isLoading
});

const mapDispatchToProps = dispatch => ({
  registerUser: (url, login, email, password) =>
    dispatch(registerFetch(url, login, email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
