import {
  ADD_DIALOG__STARTED,
  ADD_DIALOG__SUCCESS,
  ADD_DIALOG__FAILURE,
  GET_ALL_DIALOG__STARTED,
  GET_ALL_DIALOG__SUCCESS,
  GET_ALL_DIALOG_FAILURE
} from "../types/dialog";
const initialState = {dialogs: []};
export const dialog = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DIALOG__STARTED:
      return {...state, isLoading: true};

    case ADD_DIALOG__SUCCESS:
      return {
        ...state,
        ...action.dialog,

        isLoading: false
      };
    case ADD_DIALOG__FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.err
      };

    case GET_ALL_DIALOG__STARTED:
      return {...state, isLoading: true};

    case GET_ALL_DIALOG__SUCCESS:
      return {
        ...state,
        dialogs: action.dialogs,
        isLoading: false
      };

    case GET_ALL_DIALOG_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.err,
        redirect: action.redirect
      };
    default:
      return state;
  }
};
