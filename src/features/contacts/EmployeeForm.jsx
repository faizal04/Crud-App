import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "./contactsSlice";
import { useNavigate } from "react-router-dom";

function EmployeeForm() {
  const [employeeData, setEmployeeData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleInputChange(e) {
    const { name, value } = e.target;
    setEmployeeData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(employeeData);
    dispatch(addContact(employeeData));
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={employeeData.name}
            onChange={handleInputChange}
            placeholder="Enter employee's name"
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            value={employeeData.phoneNumber}
            onChange={handleInputChange}
            placeholder="Enter phone number"
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={employeeData.email}
            onChange={handleInputChange}
            placeholder="Enter email address"
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          onClick={() => {
            navigate(-1);
          }}
        >
          Save Employee
        </button>
      </form>
    </div>
  );
}

export default EmployeeForm;
