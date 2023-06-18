import React from "react";
import "../styles/selectingtype.css";
import { Link } from "react-router-dom";

export function UserType() {
  return (
    <div className="select">
      <p className="title">Hey ! Welcome to ProjecXFlow</p>
      <p className="subtitle">Can You Please Select Your Role </p>
      <div className="coordinator">Coordinator</div>
      <div className="guide">Guide</div>
      <div className="student">Student</div>
      <div className="loginrect"></div>
      <div className="progline"></div>
      <div className="rectline"></div>
      <Link to="/src/pages/loginpage.jsx">
        <div className="loginkey">Login</div>
      </Link>
    </div>
  );
}
