import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/myguideprojects.css";
import CardComponent from "../pages/cardcomponent";

const MyguideProjects = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const guideId = searchParams.get("guideId");

  const [projects, setProjects] = useState([]);
  const [guideName, setGuideName] = useState([]);

  useEffect(() => {
    if (guideId) {
      fetchProjects();
    }
  }, [guideId]);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/user/guideprojects?guideId=${guideId}`
      );
      setProjects(response.data.projects);
      setGuideName(response.data.guideName);
      console.log(guideName.name);
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
    <div className="myguide">
      <img className="logo" />
      <div className="line"></div>
      <p className="usertype">Projects Under My Guidance</p>
      <div className="bg_rect"></div>

      <div className="searchResults_s" style={{ marginTop: `30rem` }}>
        {projects.map((project, index) => (
          <CardComponent
            key={index}
            title={project.title}
            type={project.type}
            year={project.year}
            handleClick={() => handleClick(project.teamId)}
          />
        ))}
      </div>
    </div>
  );
};

export default MyguideProjects;
