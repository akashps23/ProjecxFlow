import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/miniprojectlist.css"

const Miniproject = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/user/projectmini`);
      setProjects(response.data.projects);
      console.log(response);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  return (
    <div className='minilist'>
      <h2 className='title'>Mini Projects</h2>
      <div className='bgrect'></div>
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