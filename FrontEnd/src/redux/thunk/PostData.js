// src/redux/thunks/postData.js

import {
  fetchFailure,
  fetchStart,
  fetchSuccess,
} from "../action/actionCreators";

const postData = (postData) => {
  return async (dispatch) => {
    dispatch(fetchStart());

    try {
      // Make API request
      const response = await fetch(
        "https://back-157bn43nw-rezwanrahimr.vercel.app/api/add-content",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to post data");
      }

      const data = await response.json();
      dispatch(fetchSuccess(data));
    } catch (error) {
      dispatch(fetchFailure(error.message));
    }
  };
};

export default postData;
