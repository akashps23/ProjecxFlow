import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "../styles/myproject.css";
import ReusableCard from "../components/cards/ReusableCard";

const MyProjects = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const coordinatorId = searchParams.get("coordinatorId");

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (coordinatorId) {
      fetchProjects();
    }
  }, [coordinatorId]);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_API_URL
        }/user/projects?coordinatorId=${coordinatorId}`
      );
      setProjects(response.data.projects);
    } catch (error) {
      console.error(error);
    }
  };
  const handleClick = (teamId) => {
    console.log(teamId);
    localStorage.setItem("teamId", teamId);
    navigate("/teammembers");
  };
  return (
    <div className="myprojects">
      <img className="logo" />
      <div className="line"></div>
      <p className="usertype">Projects Coordinates</p>
      <div className="bgrect"></div>
      <div
        className="searchResults_s"
        style={{ marginTop: "8rem", display: "flex", justifyContent: "left" }}
      >
        {projects.map((project, index) => (
          <ReusableCard
            handleClick={() => handleClick(project.teamId)}
            key={index}
            height={150}
          >
            <p>{project.title}</p>
            <p>{project.year}</p>
            <p>{project.type}</p>
          </ReusableCard>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
