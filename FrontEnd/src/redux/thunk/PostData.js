import { fetchFaild, fetchStart, fetchSuccess } from "../action/actionCreators";

const PostData = (postData) => {
  console.log(postData);
  return async (dispatch) => {
    dispatch(fetchStart());

    try {
      const response = await fetch("http://localhost:5000/api/add-content", {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
      const data = await response.json();
      console.log(data);
      if (data) {
        dispatch(fetchSuccess());
      }
    } catch (error) {
      dispatch(fetchFaild(error?.message));
    }
  };
};

export default PostData;
