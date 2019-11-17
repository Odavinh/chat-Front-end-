import React, {useState} from "react";
import {NavLink, Redirect} from "react-router-dom";
import {connect} from "react-redux";

import {loginFetch} from "../../../actions/auth";
import {
  setTokenLocalStorage,
  setUserIdLocalStorage,
  setUserLoginLocalStorage
} from "../../../actions/authData";

import {Bloc, AuthInput, AuthButton, Loading} from "../../../components";
import "../auth.css";

const Login = props => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const onChangeEmail = email => {
    setEmail(email);
  };

  const onChangePassword = password => {
    setPassword(password);
  };

  const submitHandler = async e => {
    e.preventDefault();
    props.loginUser("/api/user/login", email, password);
    setEmail(null);
    setPassword(null);
  };

  const {err, message, id, token, login, isLoading} = props;
  const field = String(err).split('"')[1];
  if (isLoading) return <Loading text="log in..." />;
  if (message) {
    props.setId(id);
    props.setToken(token);
    props.setLogin(login);
    return <Redirect to="/" />;
  }
  return (
    <div className="auth">
      <Bloc>
        <div className="header">
          <p>Log in to your account</p>
        </div>
        <p className="text-error">{err ? err : ""}</p>
        <form className="loginForm" onSubmit={submitHandler}>
          <AuthInput
            placeholder="Email"
            onChangeValue={onChangeEmail}
            name="email"
            value={email}
            error={field === "email" ? true : false}
          />
          <AuthInput
            placeholder="Password"
            onChangeValue={onChangePassword}
            type="password"
            name="password"
            value={password}
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
};

const mapStateToProps = state => ({
  err: state.auth.err,
  message: state.auth.message,
  isLoading: state.auth.isLoading,
  token: state.auth.token,
  login: state.auth.login,
  id: state.auth.id
});

const mapDispatchToProps = dispatch => ({
  loginUser: (url, email, password) =>
    dispatch(loginFetch(url, email, password)),
  setId: id => setUserIdLocalStorage(id),
  setToken: token => setTokenLocalStorage(token),
  setLogin: login => setUserLoginLocalStorage(login)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
