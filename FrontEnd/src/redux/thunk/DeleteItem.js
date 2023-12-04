import {
  deleteFail,
  deleteStart,
  deleteSuccess,
} from "../action/actionCreators";

// eslint-disable-next-line no-unused-vars
const DeleteItem = (id) => {
  return async (dispatch) => {
    dispatch(deleteStart());
    try {
      const response = await fetch(
        `https://back-157bn43nw-rezwanrahimr.vercel.app/api/delete-Content/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      if (data) {
        dispatch(deleteSuccess());
      }
    } catch (error) {
      dispatch(deleteFail(error.message));
    }
  };
};

export default DeleteItem;
