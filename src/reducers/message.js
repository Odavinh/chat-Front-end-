import {
  GET_ALL_MESSAGES__STARTED,
  GET_ALL_MESSAGES__SUCCESS,
  GET_ALL_MESSAGES__FAILURE
} from "../types/message";

export const message = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_MESSAGES__STARTED:
      return {
        ...state,
        isLoading: true
      };
    case GET_ALL_MESSAGES__SUCCESS:
      return {
        ...state,
        messages: action.messages,
        isLoading: false
      };
    case GET_ALL_MESSAGES__FAILURE:
      return {
        ...state,
        error: state.error,
        isLoading: false
      };

    default:
      return state;
  }
};
