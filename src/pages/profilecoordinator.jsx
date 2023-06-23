import React from "react";
import "../styles/profilecoordinator.css";

function ProfileCoordinator() {
  return (
    <div className="coordinator">
      <p className="title">Welcome</p>
      <button className="mini">Mini Project</button>
      <button className="main">Main Project</button>
      <button className="student">Student List</button>
      <button className="project">Project List</button>
      <button className="mine">My Projects</button>
      <button className="guidance">Under Guidance</button>
    </div>
  );
}

export default ProfileCoordinator;
