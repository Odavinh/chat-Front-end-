import {
  ADD_DIALOG__FAILURE,
  ADD_DIALOG__STARTED,
  ADD_DIALOG__SUCCESS,
  GET_ALL_DIALOG__SUCCESS,
  GET_ALL_DIALOG_FAILURE,
  GET_ALL_DIALOG__STARTED
} from "../types/dialog";
import {BASE_PATH} from "../config";

export const dialogAddFetchDataSuccess = (id, image, lastOnline, login) => ({
  type: ADD_DIALOG__SUCCESS,
  dialog: {id, image, lastOnline, login}
});

export const dialogAddFetchDataFailure = err => ({
  type: ADD_DIALOG__FAILURE,
  err
});

export const dialogAddFetchDataStarted = () => ({
  type: ADD_DIALOG__STARTED
});

export const dialogsFetchDataSuccess = dialogs => ({
  type: GET_ALL_DIALOG__SUCCESS,
  dialogs
});

export const dialogsFetchDataFailure = err => ({
  type: GET_ALL_DIALOG_FAILURE,
  err
});

export const dialogsFetchDataStarted = () => ({
  type: GET_ALL_DIALOG__STARTED
});

export const dialogsFetchData = url => async dispatch => {
  try {
    dispatch(dialogsFetchDataStarted());
    const data = await fetch(BASE_PATH + url).then(response => response.json());
    dispatch(dialogsFetchDataSuccess(data.dialogs));
  } catch (err) {
    dispatch(dialogsFetchDataFailure(err));
  }
};

export const dialogAddFathData = (url, partnerId) => async dispatch => {
  try {
    dispatch(dialogAddFetchDataStarted());
    const data = await fetch(`${BASE_PATH}${url}/${partnerId}`).then(res =>
      res.json()
    );
    dispatch(dialogAddFetchDataSuccess(data.dialog));
  } catch (err) {
    dispatch(dialogsFetchDataFailure(err));
  }
};
