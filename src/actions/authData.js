import {
  GET_TOKEN,
  SET_TOKEN,
  GET_USER_ID,
  SET_USER_ID,
  GET_USER_LOGIN,
  SET_USER_LOGIN
} from "../types/authData";

export const getToken = token => ({
  type: GET_TOKEN,
  token
});

export const setToken = () => ({
  type: SET_TOKEN
});

export const getUserId = id => ({
  type: GET_USER_ID,
  id
});

export const setUserId = () => ({
  type: SET_USER_ID
});

export const getUserLogin = login => ({
  type: GET_USER_LOGIN,
  login
});

export const setUserLogin = () => ({
  type: SET_USER_LOGIN
});

export const getTokenLocalStorage = () => dispatch => {
  const token = localStorage.getItem("token");
  dispatch(getToken(token));
};

export const setTokenLocalStorage = token => {
  localStorage.setItem("token", token);
};

export const getUserIdLocalStorage = () => dispatch => {
  const id = localStorage.getItem("id");
  dispatch(getUserId(id));
};

export const setUserIdLocalStorage = id => {
  localStorage.setItem("id", id);
};

export const getUserLoginLocalStorage = () => dispatch => {
  const login = localStorage.getItem("login");
  dispatch(getUserLogin(login));
};

export const settUserLoginLocalStorage = login => {
  localStorage.setItem("login", login);
};
