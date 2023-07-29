import React, { useState } from "react";
import "../styles/adminprofile.css";
import { Link } from "react-router-dom";

export default function AdminHome() {
  return (
    <div className="admin_profile">
      <p className="title">Welcome</p>
      <button className="mini">
        <Link to="/miniproject">Mini Projects</Link>
      </button>
      <button className="main">
        <Link to="/mainproject">Main Projects</Link>
      </button>
      <button className="student">
        <Link to="/studentlistadmin">Students List</Link>
      </button>
      <button className="guide">
        <Link to="/guidelistadmin">Guides List</Link>
      </button>
      <button className="coordinator">
        <Link to="/coordinatorlist">Coordinators List</Link>
      </button>
      <button className="move">
        <Link to="/projectlist">Projects History</Link>
      </button>
      <img className="logo" />
      <div className="line"></div>
      <p className="usertype">Administrator</p>
      <Link to="/">
        <p className="logout">Log Out</p>
      </Link>
      <div className="bgrect"></div>
      <div className="bgrect"></div>
    </div>
  );
}
