import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Mainproject = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://localhost:9014/api/v1/user/projectmain');
      console.log(response)
      setProjects(response.data.projects);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  return (
    <div>
      <h2>Main Projects</h2>
      {projects.map((project) => (
        <div key={project._id}>
          <h3>{project.title}</h3>
          <p>{project.year}</p>
        </div>
      ))}
    </div>
  );
};

export default Mainproject;
