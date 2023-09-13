import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditEmployee = () => {
  const { id } = useParams<{ id?: string }>();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Function to fetch data of the employee with the given id
    const fetchEmployeeData = async () => {
      try {
        const employeeId = parseInt(id ?? "", 10);
        if (isNaN(employeeId)) {
          setLoading(false);
          return;
        }

        const response = await fetch(
          `http://localhost:8000/employee/${employeeId}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setName(data.name);
        setAge(data.age);
        setAddress(data.address);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching employee data:", error);
        setLoading(false);
      }
    };

    fetchEmployeeData();
  }, [id]);

  const handleEditEmployee = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const employeeId = parseInt(id ?? "", 10);
      if (isNaN(employeeId)) {
        return;
      }

      const response = await fetch(
        `http://localhost:8000/employee/${employeeId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, age, address }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const updatedEmployee = await response.json();
      console.log("Employee updated:", updatedEmployee);
      navigate("/employee");
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Edit Employee</h2>
      <form onSubmit={handleEditEmployee} className="space-y-4">
        <div>
          <label className="block">
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 w-72 focus:outline-none focus:border-indigo-500"
            />
          </label>
        </div>
        <div>
          <label className="block">
            Age:
            <input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 w-72 focus:outline-none focus:border-indigo-500"
            />
          </label>
        </div>
        <div>
          <label className="block">
            Address:
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 w-72 focus:outline-none focus:border-indigo-500"
            />
          </label>
        </div>
        <button
          type="submit"
          className="bg-indigo-600 text-white rounded-lg px-4 py-2 font-semibold hover:bg-indigo-700 focus:outline-none"
        >
          Update
        </button>
        <Link
          to="/employee"
          className="bg-red-600 text-white rounded-lg px-4 py-2 font-semibold hover:bg-indigo-700 focus:outline-none"
        >
          Back
        </Link>
      </form>
    </div>
  );
};

export default EditEmployee;
