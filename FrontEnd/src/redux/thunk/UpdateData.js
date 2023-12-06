import { updateStart } from "../action/actionCreators";

const UpdateDataFun = (updateData, { id }) => {
  console.log("check", updateData, id);
  return async (dispatch) => {
    dispatch(updateStart);

    try {
      const response = await fetch(
        `https://back-157bn43nw-rezwanrahimr.vercel.app/api/update-content/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateData),
        }
      );
      const data = await response.json();

      if (data.status === 200) {
        alert("data update success");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export default UpdateDataFun;
