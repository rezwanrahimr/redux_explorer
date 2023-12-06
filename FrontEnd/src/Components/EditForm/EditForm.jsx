import { useDispatch } from "react-redux";
import UpdateDataFun from "../../redux/thunk/UpdateData";
import { useParams } from "react-router-dom";

const EditForm = () => {
  const id = useParams();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    const information = {
      title: e.target.title.value,
      description: e.target.description.value,
    };

    if (information) {
      dispatch(UpdateDataFun(information, id));
    }
  };
  return (
    <div>
      <>
        <h1 className="text-xl">Edit Post</h1>
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            name="title"
          />
          <br />
          <label>Description</label>
          <br />
          <textarea
            className="textarea textarea-bordered"
            placeholder="Bio"
            name="description"
          ></textarea>
          <br />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </>
    </div>
  );
};

export default EditForm;
