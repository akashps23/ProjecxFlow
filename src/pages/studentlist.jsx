import React, { useEffect, useState } from "react";
import "../styles/studentlist.css";
import axios from "axios";
import StudentCard from "../components/cards/StudentCard";

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
      <img className="logo" />
      <div className="line"></div>
      <p className="usertype">Student List</p>
      <div className="bgrect"></div>
      <div
        className="searchResults_s"
        style={{ marginTop: "8rem", display: "flex", justifyContent: "center" }}
      >
        {students.map((student, index) => (
          <StudentCard
            key={index}
            name={student.name}
            email={student.email}
            phoneno={student.phoneno}
            regno={student.regno}
            admno={student.admno}
            sem={student.sem}
            dept={student.dept}
            rollno={student.rollno}
            college={student.college}
          />
        ))}
      </div>
    </div>
  );
};

export default Studentlist;
