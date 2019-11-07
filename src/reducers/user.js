import {
  GET_USER__STARTED,
  GET_USER__SUCCESS,
  GET_USER__FAILURE,
  DELETE_USER__STARTED,
  DELETE_USER__SUCCESS,
  DELETE_USER__FAILURE
} from "../types/user";

export const user = (state = {}, action) => {
  switch (action.type) {
    // GET USER
    case GET_USER__STARTED:
      return {
        ...state,
        isLoading: true
      };
    case GET_USER__SUCCESS:
      return {
        ...state,
        isLoading: false,
        id: action.id,
        login: action.login,
        email: action.email,
        image: action.image,
        last_online: action.last_online,
        createAt: action.createAt
      };
    case GET_USER__FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    // DELETE USER
    case DELETE_USER__STARTED:
      return {
        ...state,
        isLoading: true
      };
    case DELETE_USER__SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: action.message
      };
    case DELETE_USER__FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
};
