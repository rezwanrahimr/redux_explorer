import { FETCH_FAIL, FETCH_START, FETCH_SUCCESS } from "../action/actionTypes";

const initialState = {
  isLoading: false,
  result: null,
};
export const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        result: "Post Data Successfully",
      };
    case FETCH_FAIL:
      return {
        ...state,
        isLoading: false,
        result: action.payload,
      };
    default:
      return state;
  }
};
