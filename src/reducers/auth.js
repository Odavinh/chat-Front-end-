import {
  USER_LOGIN__STARTED,
  USER_LOGIN__SUCCESS,
  USER_LOGIN__FAILURE,
  USER_REGISTER__STARTED,
  USER_REGISTER__SUCCESS,
  USER_REGISTER__FAILURE
} from "../types/auth";

export const auth = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER__STARTED:
      return {
        ...state,
        isLoading: true
      };
    case USER_REGISTER__SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: action.message,
        err: action.err
      };
    case USER_REGISTER__FAILURE:
      return {
        ...state,
        isLoading: false,
        err: action.err
      };
    case USER_LOGIN__STARTED:
      return {
        ...state,
        isLoading: true
      };
    case USER_LOGIN__SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: action.message,
        err: action.err,
        token: action.token,
        login: action.login,
        id: action.id
      };
    case USER_LOGIN__FAILURE:
      return {
        ...state,
        isLoading: false,
        err: action.err
      };
    default:
      return state;
  }
};
