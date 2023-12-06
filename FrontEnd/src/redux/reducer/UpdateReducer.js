import {
  UPDATE_FAIL,
  UPDATE_START,
  UPDATE_SUCCESS,
} from "../action/actionTypes";
const initialState = {
  isLoading: false,
  updateData: null,
  updateFailStatus: null,
};
const UpdateReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_START:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        updateData: action.payload,
      };
    case UPDATE_FAIL:
      return {
        ...state,
        isLoading: false,
        updateData: action.payload,
      };

    default:
      return state;
  }
};

export default UpdateReducer;
