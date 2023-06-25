import React from "react";
import "../styles/selectingtype.css";
import { Link } from "react-router-dom";

export default function UserType() {
  return (
    <div className="select">
      <p className="title">Hey ! Welcome to ProjecXFlow</p>
      <p className="subtitle">Can You Please Select Your Role </p>
      <Link to="/signupcoordinator">
        <div className="coordinator">Coordinator</div>
      </Link>
      <Link to="/signupcoordinator">
        <div className="guide">Guide</div>
      </Link>
      <Link to="/signupstudent">
        <div className="student">Student</div>
      </Link>
      <Link to="/login">
        <div className="loginkey">Login</div>
      </Link>
      <div className="bgrect"></div>
    </div>
  );
}
