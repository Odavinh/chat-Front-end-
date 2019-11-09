import {
  USER_LOGIN__STARTED,
  USER_LOGIN__SUCCESS,
  USER_LOGIN__FAILURE,
  USER_REGISTER__STARTED,
  USER_REGISTER__SUCCESS,
  USER_REGISTER__FAILURE
} from "../types/auth";
import {BASE_PATH, isDevelopment} from "../config";

export const registerFetchSuccess = (message, err) => ({
  type: USER_REGISTER__SUCCESS,
  message,
  err
});

export const registerFetchFailure = err => ({
  type: USER_REGISTER__FAILURE,
  err
});

export const registerFetchStarted = () => ({
  type: USER_REGISTER__STARTED
});

export const loginFetchSuccess = (message, err, token, id, login) => ({
  type: USER_LOGIN__SUCCESS,
  message,
  id,
  token,
  login,
  err
});

export const loginFetchFailure = err => ({
  type: USER_LOGIN__FAILURE,
  err
});

export const loginFetchStarted = () => ({
  type: USER_LOGIN__STARTED
});

export const registerFetch = (
  url,
  email,
  password,
  login
) => async dispatch => {
  try {
    dispatch(registerFetchStarted());
    const data = await fetch(BASE_PATH + url, {
      headers: {
        "Content-Type": "application/json"
      },
      mode: "cors",
      method: "POST",
      body: JSON.stringify({email, password, login})
    }).then(response => response.json());
    dispatch(registerFetchSuccess(data.message, data.error));
  } catch (err) {
    if (isDevelopment) console.log(err);
    dispatch(registerFetchFailure("Request error!"));
  }
};

export const loginFetch = (url, email, password) => async dispatch => {
  try {
    dispatch(loginFetchStarted());
    const data = await fetch(BASE_PATH + url, {
      headers: {
        "Content-Type": "application/json"
      },
      mode: "cors",
      method: "POST",
      body: JSON.stringify({email, password})
    }).then(response => response.json());
    dispatch(
      loginFetchSuccess(
        data.message,
        data.error,
        data.token,
        data.id,
        data.login
      )
    );
  } catch (err) {
    if (!isDevelopment) console.log(err);
    dispatch(loginFetchFailure("Request error!"));
  }
};
