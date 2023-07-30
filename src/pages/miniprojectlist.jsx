import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Miniproject = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://localhost:9014/api/v1/user/projectmini');
      setProjects(response.data.projects);
      console.log(response);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  return (
    <div>
      <h2>Mini Projects</h2>
      {projects.map((project) => (
        <div key={project._id}>
          <h3>{project.title} - {project.year}</h3>
          
        </div>
      ))}
    </div>
  );
};

export default Miniproject;
//<p>{project.year}</p>