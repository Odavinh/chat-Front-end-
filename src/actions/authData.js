import {
  GET_TOKEN,
  SET_TOKEN,
  GET_USER_ID,
  SET_USER_ID,
  GET_USER_LOGIN,
  SET_USER_LOGIN
} from "../types/user";

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

export const getTokenLocalStorage = () => {
  const token = localStorage.getItem("token");
  getToken(token);
};

export const setTokenLocalStorage = token => {
  localStorage.setItem("token", token);
};

export const getUserIdLocalStorage = () => {
  const id = localStorage.getItem("id");
  getUserId(id);
};

export const setUserIdLocalStorage = id => {
  localStorage.setItem("id", id);
};

export const getUserLoginLocalStorage = () => {
  const login = localStorage.getItem("login");
  getToken(login);
};

export const settUserLoginLocalStorage = login => {
  localStorage.setItem("login", login);
};
