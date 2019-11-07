import {
  GET_USER__STARTED,
  GET_USER__SUCCESS,
  GET_USER__FAILURE,
  DELETE_USER__STARTED,
  DELETE_USER__SUCCESS,
  DELETE_USER__FAILURE
} from "../types/user";
import {BASE_PATH} from "../config";

// GET USER
export const getUserFetchDataStarted = () => ({
  type: GET_USER__STARTED
});

export const getUserFetchDataSuccess = (
  id,
  image,
  last_online,
  email,
  login,
  createAt
) => ({
  type: GET_USER__SUCCESS,
  id,
  image: BASE_PATH + "/" + image,
  last_online,
  email,
  login,
  createAt
});

export const getUserFetchDataFailure = error => ({
  type: GET_USER__FAILURE,
  error
});

export const getUserFetchData = (url, Login) => async dispatch => {
  try {
    dispatch(getUserFetchDataStarted());
    const data = await fetch(`${BASE_PATH}${url}/${Login}`).then(response =>
      response.json()
    );
    if (data.error) {
      dispatch(getUserFetchDataFailure(data.error));
      return;
    }
    dispatch(
      getUserFetchDataSuccess(
        data.id,
        data.image,
        data.last_online,
        data.email,
        data.login,
        data.createAt
      )
    );
  } catch (err) {
    dispatch(getUserFetchDataFailure(err));
  }
};

// DELETE USER

export const deleteUserFetchDataStarted = () => ({
  type: DELETE_USER__STARTED
});

export const deleteUserFetchDataSuccess = message => ({
  type: DELETE_USER__SUCCESS,
  message
});

export const deleteUserFetchDataFailure = error => ({
  type: DELETE_USER__FAILURE,
  error
});

export const deleteUserFetchData = (url, id) => async dispatch => {
  try {
    dispatch(deleteUserFetchDataStarted());
    const data = await fetch(`${BASE_PATH}${url}/${id}`, {
      method: "DELETE"
    }).then(response => response.json());
    if (data.error) {
      dispatch(deleteUserFetchDataFailure(data.error));
      return;
    }
    dispatch(deleteUserFetchDataSuccess(data.message));
  } catch (err) {
    dispatch(getUserFetchDataFailure(err));
  }
};
