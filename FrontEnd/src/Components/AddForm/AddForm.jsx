import PostData from "../../redux/thunk/PostData";

const AddForm = () => {
<<<<<<< HEAD

    const handleChange = (e) => {
        const { name, value } = e.target;
        const formData = {
            [name]: value
        }

        console.log("Handle CHange", formData)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        // const formData = {
        //     [name]: value
        // }

        console.log("FormData", name, value);
    }
    return <>

        <h1 className="text-xl">Add New Post</h1>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input onChange={handleChange} name="title" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            <br />
            <label > Description</label>
            <br />
            <textarea onChange={handleChange} name="description" className="textarea textarea-bordered" placeholder="Bio"></textarea>
            <br />
            <button className="btn" type="submit">Submit</button>

        </form>
=======
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
>>>>>>> 3ee690e045216e5b688a5bbd4e5610cf16a35286
    </>
  );
};
export default AddForm;
