import {USER_LOGIN} from "../types/auth";

const error = "";

export const logIn = (state = {error}, {type, email, password}) => {
  switch (type) {
    case USER_LOGIN:
      return {
        email,
        password,
        error: state.error
      };
    default:
      return state;
  }
};
