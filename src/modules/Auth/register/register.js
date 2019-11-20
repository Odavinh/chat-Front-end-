import React, {useState} from "react";
import {NavLink, Redirect} from "react-router-dom";
import {connect} from "react-redux";

import {registerFetch} from "../../../actions/auth";

import {Bloc, AuthInput, AuthButton, Loading} from "../../../components";
import "../auth.css";

const Register = props => {
  const [login, setLogin] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const onChangeLogin = value => setLogin(value);
  const onChangeEmail = value => setEmail(value);
  const onChangePassword = value => setPassword(value);

  const submitHandler = async e => {
    e.preventDefault();
    props.registerUser("/api/user/register", email, password, login);
    setEmail("");
    setPassword("");
    setLogin("");
  };

  const {err, message, isLoading} = props;
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
        <form className="registerForm" onSubmit={submitHandler}>
          <AuthInput
            placeholder="Login"
            onChangeValue={onChangeLogin}
            name="login"
            value={login}
            error={Boolean(field === "login")}
          />
          <AuthInput
            placeholder="Email"
            onChangeValue={onChangeEmail}
            name="email"
            value={email}
            error={Boolean(field === "email")}
          />
          <AuthInput
            placeholder="Password"
            onChangeValue={onChangePassword}
            type="password"
            name="password"
            value={password}
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
};

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
