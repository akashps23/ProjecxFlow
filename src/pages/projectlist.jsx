import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Projectlist = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://localhost:9014/api/v1/user/projectlist');
      console.log(response)
      setProjects(response.data.projects);
    } catch (error) {
      console.error('Error fetching projects list:', error);
    }
  };

  return (
    <div>
      <h2>Projects List</h2>
      {projects.map((project) => (
        <div key={project}>
          <h3>Title:{project.title}</h3>
          <p>Type:{project.type}</p>
          <p>Year:{project.year}</p>
        </div>
      ))}
    </div>
  );
};

export default Projectlist;
