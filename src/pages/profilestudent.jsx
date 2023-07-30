import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/profilestudent.css";
import { Link, useNavigate } from "react-router-dom";
import CardComponent from '../pages/cardcomponent'

const StudentHome = () => {
  const navigate = useNavigate()
  const [userData, setUserData] = useState(null);
  const [projects, setProjects] = useState([]);

  const fetchProjects = async (email) => {
    try {
      const response = await axios.get(`http://localhost:9014/api/v1/user/getdashboard?studentId=${email}`);
      console.log(response)
      setProjects(response.data.projects);
    } catch (error) {
      console.error('Error fetching projects list:', error);
    }
  };

  const getUserData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:9014/api/v1/user/getStudentData",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (response.data.success) {
        setUserData(response.data.data);
        await fetchProjects(response.data.data.email);
      }
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="student">
      {userData ? (
        <>
          <p className="title">Welcome {userData.name}</p>
          <p>ID: {userData.id}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
      <img className="logo" />
      <div className="line"></div>
      <p className="usertype">Student</p>
      <Link to="/">
        <p className="logout">Log Out</p>
      </Link>
      <div className="bgrect"></div>
      <div className="bgrect"></div>
      <h2>Dashboards</h2>
      <button className="searchResults_s projectsmap" onClick={()=>{
        navigate('/teamdashboard')
      }}>
      {projects.map((project, index) => (
        <CardComponent key={index} 
        title={project.title}
        type={project.type}
        year={project.year} />
        ))}
        </button>
    </div>
  );
};

export default StudentHome;
