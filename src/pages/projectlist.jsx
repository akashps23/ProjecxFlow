import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/adminprojectlist.css";
import ReusableCard from "../components/cards/ReusableCard";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/user/projectlist`
      );
      console.log(response);
      setProjects(response.data.projects);
    } catch (error) {
      console.error("Error fetching projects list:", error);
    }
  };

  return (
    <div className="admin_proj_list">
      <img className="logo" />
      <div className="line"></div>
      <p className="usertype">Project History</p>
      <div className="bgrect"></div>
      <div
        className="searchResults_s"
        style={{ marginTop: "8rem", display: "flex", justifyContent: "left" }}
      >
        {projects.map((project, index) => (
          <ReusableCard key={index} height={150}>
            <h3>{project.title}</h3>
            <p>{project.type}</p>
            <p>{project.year}</p>
          </ReusableCard>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
