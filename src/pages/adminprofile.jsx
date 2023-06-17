import React, { useState } from 'react';
import "../styles/adminprofile.css";
import { Link } from "react-router-dom";

function adminprofile() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSelection = (selection) => {
    // Handle selection logic here
    console.log(`Selected option: ${selection}`);
  };

  return (
    <div>
      <h1>Welcome, Admin!</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search..."
      />
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

export default adminprofile;
