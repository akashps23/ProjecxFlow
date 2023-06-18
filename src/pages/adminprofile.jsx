import React, { useState } from 'react';
import "../styles/adminprofile.css";
import { Link } from "react-router-dom";

export default function adminprofile() {
 
  // const [searchTerm, setSearchTerm] = useState('');

  // const handleSearchChange = (event) => {
  //   setSearchTerm(event.target.value);
  // };

  // const handleSelection = (selection) => {
  //   // Handle selection logic here
  //   console.log(`Selected option: ${selection}`);
  // };

  return (
    <div className="admin_profile">
       
      <p className="title">Welcome Admin</p>

      <Link to="/src/pages/projectsearch.jsx">
        <img className="searchimg"></img>
      </Link>

      <div className="minipro_rect"></div>

      <Link to="/src/pages/miniprojectlist.jsx">
        <div className="miniproject">LMini Project</div>
      </Link>
      <div>
        <button onClick={() => handleSelection('Mini Project')}>Mini Project</button>
        <button onClick={() => handleSelection('Main Project')}>Main Project</button>
        <button onClick={() => handleSelection('Guides')}>Guides</button>
        <button onClick={() => handleSelection('Cordinators')}>Cordinators</button>
        <button onClick={() => handleSelection('Project List')}>Project List</button>
        <button onClick={() => handleSelection('Student list')}>Student list</button>
        <button onClick={() => handleSelection('Notifications')}>Notifications</button>
        <button onClick={() => handleSelection('Request')}>Request</button>
      </div>
    </div>
  );
}


