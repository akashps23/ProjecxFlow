import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const MyProjects = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const coordinatorId = searchParams.get('coordinatorId');

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (coordinatorId) {
      fetchProjects();
    }
  }, [coordinatorId]);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${process.env.VITE_API_URL}/user/projects?coordinatorId=${coordinatorId}`);
      setProjects(response.data.projects);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Projects of Coordinator {coordinatorId}</h1>
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

export default MyProjects;
