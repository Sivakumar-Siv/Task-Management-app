const Table = ({ tableData }) => {

    return (
        <>
            <table className="w-full border mt-8">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border p-2" >Name</th>
                        <th className="border p-2">Description</th>
                        <th className="border p-2">Email</th>
                        <th className="border p-2">Status</th>
                        <th className="w-20 border p-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((data, idx) => {
                        return (
                            <tr key={idx}>
                                <td className="border border-gray-300 px-4 py-2">
                                    {data.name}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {data.Description}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {data.Email}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {data.Status}</td>
                                <td className="border border-gray-300 px-2 py-2">
                                    <button className="w-full bg-blue-500 text-white px-1 py-1 rounded">
                                        Edit</button>
                                    <button className="w-full bg-red-500 text-white px-1 py-1 mt-1 rounded">
                                        Delete</button>
                                </td>

                            </tr>
                        );
                    })}
                </tbody>

            </table>
        </>
    );
}

export default Table;