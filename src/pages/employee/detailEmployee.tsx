import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Define an interface for the Employee data
interface Employee {
  name: string;
  age: number;
  address: string;
  // Add any other properties that may be part of the Employee data
}

const DetailEmployee = () => {
  const { id } = useParams<{ id: string }>();
  const [employee, setEmployee] = useState<Employee | null>(null);

  useEffect(() => {
    // Function to fetch the employee data using the id from the URL parameters
    const fetchEmployeeData = async () => {
      try {
        console.log(id);
        const response = await fetch(`http://localhost:8000/employee/${id}`);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const employeeData: Employee = await response.json();
        setEmployee(employeeData);
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    };

    // Call the fetch function
    fetchEmployeeData();
  }, [id]);

  if (!employee) {
    // Display a loading message or spinner while data is being fetched
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Employee Details</h2>
      <div>
        <strong>Name:</strong> {employee.name}
      </div>
      <div>
        <strong>Age:</strong> {employee.age}
      </div>
      <div>
        <strong>Address:</strong> {employee.address}
      </div>
    </div>
  );
};

export default DetailEmployee;
