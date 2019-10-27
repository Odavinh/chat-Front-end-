import React, {Component} from "react";
import {NavLink, Redirect} from "react-router-dom";
import {connect} from "react-redux";

import {loginFetch} from "../../../actions/auth";

import {Bloc, AuthInput, AuthButton} from "../../../components";
import "../auth.css";

class Login extends Component {
  state = {email: "", password: ""};

  onChangeValue = (value, name) => {
    this.setState({[name]: value});
  };

  submitHandler = async e => {
    e.preventDefault();
    this.props.loginUser(
      "/api/user/login",
      this.state.email,
      this.state.password
    );
    this.setState({
      email: "",
      password: "",
      error: ""
    });
  };
  render() {
    const {err, message} = this.props;
    const field = String(err).split('"')[1];
    if (message) return <Redirect to="/" />;
    return (
      <div className="auth">
        <Bloc>
          <div className="header">
            <p>Log in to your account</p>
          </div>
          <p className="text-error">{err ? err : ""}</p>
          <form className="loginForm" onSubmit={this.submitHandler}>
            <AuthInput
              placeholder="Email"
              onChangeValue={this.onChangeValue}
              name="email"
              value={this.state.email}
              error={field === "email" ? true : false}
            />
            <AuthInput
              placeholder="Password"
              onChangeValue={this.onChangeValue}
              type="password"
              name="password"
              value={this.state.password}
              error={field === "password" ? true : false}
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

const mapStateToProps = state => ({
  err: state.auth.err,
  message: state.auth.message,
  isLoading: state.isLoading
});

const mapDispatchToProps = dispatch => ({
  loginUser: (url, email, password) =>
    dispatch(loginFetch(url, email, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
