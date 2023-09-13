import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleAddEmployee = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/employee", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, age, address }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Assuming the server responds with the newly created employee data
      const newEmployee = await response.json();
      console.log("New employee added:", newEmployee);
    } catch (error) {
      console.error("Error adding employee:", error);
    }
    navigate("/employee");
  };
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Add Employee</h2>
      <div className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Name"
            className="border border-gray-300 rounded-lg px-4 py-2 w-72 focus:outline-none focus:border-indigo-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Age"
            className="border border-gray-300 rounded-lg px-4 py-2 w-72 focus:outline-none focus:border-indigo-500"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Address"
            className="border border-gray-300 rounded-lg px-4 py-2 w-72 focus:outline-none focus:border-indigo-500"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button
          onClick={handleAddEmployee}
          className="bg-indigo-600 text-white rounded-lg px-4 py-2 font-semibold hover:bg-indigo-700 focus:outline-none"
        >
          Add
        </button>
        <Link
          to="/employee"
          className="bg-red-600 text-white rounded-lg px-4 py-2 font-semibold hover:bg-indigo-700 focus:outline-none"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default AddEmployee;
