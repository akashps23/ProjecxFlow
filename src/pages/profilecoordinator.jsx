import React from "react";
import "../styles/profilecoordinator.css";
import { Link } from "react-router-dom";

function ProfileCoordinator() {
  return (
    <div className="coordinator">
      <p className="title">Welcome Coordinator</p>
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

export default ProfileCoordinator;
