import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const MyguideProjects = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const guideId = searchParams.get('guideId');

  const [projects, setProjects] = useState([]);
  const [guideName, setGuideName ] = useState([]);

  useEffect(() => {
    if (guideId) {
      fetchProjects();
    }
  }, [guideId]);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${process.env.VITE_API_URL}/user/guideprojects?guideId=${guideId}`);
      setProjects(response.data.projects);
      setGuideName(response.data.guideName);
      console.log(guideName.name)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {guideName.map((guide, index) => (
        <h1 key={index}>Projects of Guide {guideName.name}</h1>
      ))}
      
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
