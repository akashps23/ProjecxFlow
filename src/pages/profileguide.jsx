import React from "react";
import "../styles/profileguide.css";
import { Link } from "react-router-dom";

function ProfileGuide() {
  return (
    <div className="guide">
      <button className="mini">
        <Link to="./miniprojectlist.jsx">Mini Projects</Link>
      </button>

      <button className="main">
        <Link to="./mainprojectlist.jsx">Main Projects</Link>
      </button>
      <p className="title">Welcome</p>

      <button className="student">
        <Link to="./studentlist.jsx">Students List</Link>
      </button>

      <button className="mine">
        <Link to="./myprojects.jsx">Under My Guidance</Link>
      </button>

      <div className="bgrect"></div>
    </div>
  );
}

export default ProfileGuide;
