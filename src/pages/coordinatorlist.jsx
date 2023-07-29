import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Coordinatorlist = () => {
  const [coordinators, setCoordinantors] = useState([]);

  useEffect(() => {
    fetchCoordinators();
  }, []);

  const fetchCoordinators = async () => {
    try {
      const response = await axios.get('http://localhost:9014/api/v1/user/coordinatorlist');
      console.log(response)
      setCoordinantors(response.data.coordinators);
    } catch (error) {
      console.error('Error fetching coordinators list:', error);
    }
  };

  return (
    <div>
      <h2>Coordinators List</h2>
      {coordinators.map((coordinator) => (
        <div key={coordinator}>
          <h3>Name:{coordinator.name}</h3>
          <p>Email:{coordinator.email}</p>
          <p>Phone Number:{coordinator.phoneno}</p>
          <p>Faculty ID:{coordinator.fid}</p>
          <p>Department:{coordinator.dept}</p>
          <p>College:{coordinator.college}</p>
        </div>
      ))}
      <button className="deletecoordinator">
        <Link to="/deletecoordinator">Remove coordinator</Link>
      </button>
    </div>
  );
};

export default Coordinatorlist;
