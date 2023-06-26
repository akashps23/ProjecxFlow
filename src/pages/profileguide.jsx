import React, { useEffect, useState } from "react";
import "../styles/profileguide.css";
import { Link } from "react-router-dom";
import axios from "axios";

const GuideHome = () => {
  const [userData, setUserData] = useState(null);

  const getUserData = async () => {
    try {
      const response = await axios.post(
        "https://server-bfex.onrender.com/api/v1/user/getGuideData",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
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
    <div className="guide">
      <button className="mini">
        <Link to="/miniproject">Mini Projects</Link>
      </button>

      <button className="main">
        <Link to="/mainproject">Main Projects</Link>
      </button>
      {userData ? (
        <>
          <p className="title">Welcome {userData.name}</p>
          <p>ID: {userData.id}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}

      <button className="student">
        <Link to="/studentlist">Students List</Link>
      </button>

      <button className="mine">
        <Link to="/myprojects">Under My Guidance</Link>
      </button>
      <img className="logo" />
      <div className="line"></div>
      <p className="usertype">Project Guide</p>
      <Link to="/">
        <p className="logout">Log Out</p>
      </Link>
      <div className="bgrect"></div>
      <div className="bgrect"></div>
    </div>
  );
};

export default GuideHome;
