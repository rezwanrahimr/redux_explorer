import {
  fetchFailure,
  fetchStart,
  fetchSuccess,
} from "../action/actionCreators";

const LoadDatas = () => {
  return async (dispatch) => {
    dispatch(fetchStart());

    try {
      const response = await fetch(
        "https://back-157bn43nw-rezwanrahimr.vercel.app/api/get-all"
      );
      const data = await response.json();

      if (data) {
        dispatch(fetchSuccess(data));
      }
    } catch (error) {
      dispatch(fetchFailure(error.message));
    }
  };
};
export default LoadDatas;
