import {
  DELETE_FAIL,
  DELETE_START,
  DELETE_SUCCESS,
} from "../action/actionTypes";

const initialState = {
  isLoading: false,
  status: null,
  error: null,
};
const DeleteReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_START:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        state: 200,
      };
    case DELETE_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default DeleteReducer;
