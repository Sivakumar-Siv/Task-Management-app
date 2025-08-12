const Form = ({ handleFormDataChange, handleSubmit }) => {
    //  console.log("props", props);
    return (
        <>
            <h1 className="text-xl font-semibold mb-4">Add New Task</h1>
            <form className="border rounded-lg p-4"
                onSubmit={handleSubmit}>
                <input className="w-full p-2 border rounded mb-2" type="text" placeholder="Name"
                    onChange={(e) => {
                        const { value } = e.target;
                        handleFormDataChange("name", value);
                    }}
                    required
                />

                <input className="w-full p-2 border rounded mb-2" type="text" placeholder="Description"
                    onChange={(e) => {
                        const { value } = e.target;
                        handleFormDataChange("Description", value);
                    }}
                    required
                />
                <input className="w-full p-2 border rounded mb-2" type="text" placeholder="Email"
                    onChange={(e) => {
                        const { value } = e.target;
                        handleFormDataChange("Email", value);
                    }}
                    required
                />
                <select className="w-full p-2 border rounded mb-2" name="Status" id="Status"
                    onChange={(e) => {
                        const { value } = e.target;
                        handleFormDataChange("Status", value);
                    }}
                    required
                >
                    <option value="">Select status</option>
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>

                <button className="bg-blue-500 text-white px-4 py-2 rounded" type="Submit">Add</button>
            </form>
        </>
    );
}

export default Form;