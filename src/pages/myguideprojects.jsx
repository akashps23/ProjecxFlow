import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const MyguideProjects = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const guideId = searchParams.get('guideId');

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (guideId) {
      fetchProjects();
    }
  }, [guideId]);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`http://localhost:9014/api/v1/user/guideprojects?guideId=${guideId}`);
      setProjects(response.data.projects);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Projects of Guide {guideId}</h1>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <p>Title: {project.title}</p>
            <p>Year: {project.year}</p>
            <p>Type: {project.type}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyguideProjects;
