const AddForm = () => {
    const handleSubmit = () =>{
        
    }
    return <>

        <h1 className="text-xl">Add New Post</h1>
        <form  onSubmit={handleSubmit}>
            <label>Title</label>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            <br />
            <label > Description</label>
            <br />
            <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>
            <br />
            <button className="btn">Submit</button>

        </form>
    </>
}
export default AddForm;