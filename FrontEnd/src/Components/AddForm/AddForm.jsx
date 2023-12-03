const AddForm = () => {

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
    </>
}
export default AddForm;