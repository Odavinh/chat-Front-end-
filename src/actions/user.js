import {
  GET_USER__STARTED,
  GET_USER__SUCCESS,
  GET_USER__FAILURE
} from "../types/user";
import {BASE_PATH} from "../config";

export const getUserFetchDataStarted = () => ({
  type: GET_USER__STARTED
});

export const getUserFetchDataSuccess = (
  id,
  image,
  last_online,
  login,
  createAt
) => ({
  type: GET_USER__SUCCESS,
  id,
  image,
  last_online,
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
        data.login,
        data.createAt
      )
    );
  } catch (err) {
    dispatch(getUserFetchDataFailure(err));
  }
};
