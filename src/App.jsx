import Navbar from "./components/Navbar"
import Form from "./components/Form"
import Table from "./components/Table"
import { useState } from "react"
function App() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    email: "",
    status: "",
  });

  const [tableData, setTableData] = useState([]);





  const handleFormDataChange = (key, value) => {
    console.log({ key, value });

    setFormData({
      ...formData,
      [key]: value

    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    setTableData([...tableData, formData,])
  };


  console.log("Form data changed", { formData, tableData });

  return (
    <>
      <Navbar />
      <div className="p-6 mx-auto max-w-2xl">
        <Form handleFormDataChange={handleFormDataChange}
          handleSubmit={handleSubmit} />
        <Table tableData={tableData} />
      </div>

    </>
  )
}

export default App
