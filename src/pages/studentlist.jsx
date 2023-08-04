import React, { useEffect, useState } from "react";
import "../styles/studentlist.css";
import axios from "axios";

const Studentlist = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/user/studentlist`
      );
      console.log(response);
      setStudents(response.data.students);
    } catch (error) {
      console.error("Error fetching students list:", error);
    }
  };

  return (
    <div className="studentlist">
      <div className="bgrect"></div>
      <p className="title">List of Students </p>
      {students.map((student) => (
        <div key={student}>
          <h3>Name:{student.name}</h3>
          <p>Email:{student.email}</p>
          <p>Phone Number:{student.phoneno}</p>
          <p>Register Number:{student.regno}</p>
          <p>Admission Number:{student.admno}</p>
          <p>Semester:{student.sem}</p>
          <p>Department:{student.dept}</p>
          <p>Roll Number:{student.rollno}</p>
          <p>College:{student.college}</p>
          <button></button>
        </div>
      ))}
    </div>
  );
};

export default Studentlist;
