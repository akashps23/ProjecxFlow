import React, { useEffect, useState } from 'react';
import "../styles/profilecoordinator.css";
import { Link } from "react-router-dom";
import axios from 'axios';

const CoordinatorHome = () => {
  const [userData, setUserData] = useState(null);

  const getUserData = async () => {
    try {
      const response = await axios.post(
        'http://localhost:9014/api/v1/user/getCoordinatorData',
        {},
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        }
      );
      if (response.data.success) {
        setUserData(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="coordinator">
      {userData ? (
        <>
          <p className="title">Welcome {userData.name}</p>
          <p>ID: {userData.id}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
      <button className="mini">
        <Link to="./miniprojectlist.jsx">Mini Projects</Link>
      </button>
      <button className="main">
        <Link to="./mainprojectlist.jsx">Main Projects</Link>
      </button>
      <button className="student">
        <Link to="./studentlist.jsx">Students List</Link>
      </button>
      <button className="guide">
        <Link to="./guidelist.jsx">Guides List</Link>
      </button>
      <button className="mine">
        <Link to="./myprojects.jsx">My Projects</Link>
      </button>
      <button className="guidance">
        <Link to="./guidanceproject.jsx">Under My Guidance</Link>
      </button>
      <div className="bgrect"></div>
    </div>
  );
}

export default CoordinatorHome;
