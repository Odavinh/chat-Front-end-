import {
  GET_TOKEN,
  SET_TOKEN,
  GET_USER_ID,
  SET_USER_ID,
  GET_USER_LOGIN,
  SET_USER_LOGIN
} from "../types/authData";

export const authData = (state = {}, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state
      };
    case GET_TOKEN:
      return {
        ...state,
        token: action.token
      };

    case SET_USER_ID:
      return {
        ...state
      };
    case GET_USER_ID:
      return {
        ...state,
        id: action.id
      };

    case SET_USER_LOGIN:
      return {
        ...state
      };
    case GET_USER_LOGIN:
      return {
        ...state,
        login: action.login
      };
    default:
      return state;
  }
};
