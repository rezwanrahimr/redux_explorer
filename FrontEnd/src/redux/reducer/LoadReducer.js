import { FETCH_FAIL, FETCH_START, FETCH_SUCCESS } from "../action/actionTypes";

const initialState = {
  isLoading: false,
  data: [],
  error: null,
};
const LoadReducer = (state = initialState, action) => {
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
        data: action.payload,
      };
    case FETCH_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default LoadReducer;
