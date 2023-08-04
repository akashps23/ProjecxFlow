import  React,{ useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const GuidelistAdmin = () => {
  const [guides, setGuides] = useState([]);

  useEffect(() => {
    fetchGuides();
  }, []);

  const fetchGuides = async () => {
    try {
      const response = await axios.get(`${process.env.VITE_API_URL}/user/guidelistadmin`);
      console.log(response)
      setGuides(response.data.guides);
    } catch (error) {
      console.error('Error fetching guides list:', error);
    }
  };

  return (
    <div>
      <h2 color='black'>Guides List</h2>
      {guides.map((guide) => (
        <div key={guide}>
          <h3>Name:{guide.name}</h3>
          <p>Email:{guide.email}</p>
          <p>Phone Number:{guide.phoneno}</p>
          <p>Faculty ID:{guide.fid}</p>
          <p>Department:{guide.dept}</p>
          <p>College:{guide.college}</p>
        </div>
      ))}
      <button className="deleteguide">
        <Link to="/deleteguide">Remove Guide</Link>
      </button>
    </div>
  );
};

export default GuidelistAdmin;
