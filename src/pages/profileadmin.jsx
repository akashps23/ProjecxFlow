import React, { useState } from "react";
import "../styles/adminprofile.css";
import { Link } from "react-router-dom";

export default function AdminProfile() {
  return (
    <div className="admin_profile">
      <p className="title">Welcome Admin</p>
      <button className="mini">
        <Link to="/miniproject">Mini Projects</Link>
      </button>
      <button className="main">
        <Link to="/mainproject">Main Projects</Link>
      </button>
      <button className="student">
        <Link to="/studentlist">Students List</Link>
      </button>
      <button className="guide">
        <Link to="./guidelist.jsx">Guides List</Link>
      </button>
      <button className="coordinator">
        <Link to="./coordinatorlist.jsx">Coordinators List</Link>
      </button>
      <button className="move">
        <Link to="./history.jsx">Moved Projects</Link>
      </button>
      <div className="bgrect"></div>
    </div>
  );
}
