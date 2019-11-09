import {
  GET_ALL_MESSAGES__STARTED,
  GET_ALL_MESSAGES__SUCCESS,
  GET_ALL_MESSAGES__FAILURE
} from "../types/message";

import {BASE_PATH, isDevelopment} from "../config";

export const getAllMessageFetchDataStarted = () => ({
  type: GET_ALL_MESSAGES__STARTED
});

export const getAllMessageFetchDataSuccess = messages => ({
  type: GET_ALL_MESSAGES__SUCCESS,
  ...messages
});

export const getAllMessageFetchDataFailure = error => ({
  type: GET_ALL_MESSAGES__FAILURE,
  error
});

export const getAllMessageFetchData = (url, dialogId) => async dispatch => {
  try {
    dispatch(getAllMessageFetchDataStarted());
    const data = await fetch(`${BASE_PATH}${url}/${dialogId}`, {
      headers: {
        "auth-token": localStorage.getItem("token")
      },
      mode: "cors"
    }).then(response => response.json());
    if (data.error) {
      dispatch(getAllMessageFetchDataFailure(data.error));
      return;
    }
    dispatch(getAllMessageFetchDataSuccess(data.messages));
  } catch (err) {
    if (isDevelopment) console.log(err);
    dispatch(getAllMessageFetchDataFailure("Request error!"));
  }
};
