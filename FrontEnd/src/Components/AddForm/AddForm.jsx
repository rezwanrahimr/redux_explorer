import PostData from "../../redux/thunk/PostData";

const AddForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const information = {
      title: e.target.title.value,
      description: e.target.description.value,
    };

    console.log("post info", information);

    if (information) {
      PostData(information);
    }
  };
  return (
    <>
      <h1 className="text-xl">Add New Post</h1>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          name="title"
        />
        <br />
        <label> Description</label>
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
  );
};
export default AddForm;
