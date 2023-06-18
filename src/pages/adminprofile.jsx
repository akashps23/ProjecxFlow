import React, { useState } from "react";
import "../styles/adminprofile.css";
import { Link } from "react-router-dom";

export default function AdminProfile() {
  return (
    <div className="admin_profile">
      <h1 className="title">Welcome Admin</h1>

      <div className="mini_rect"></div>
      <div className="bgrect"></div>

      <Link to="/src/pages/miniprojectlist.jsx">
        <p className="miniproject">Mini Project</p>
      </Link>

      <div className="main_rect"></div>

      <Link to="/src/pages/mainprojectlist.jsx">
        <p className="mainproject">Main Project</p>
      </Link>

      <div className="guide_rect"></div>

      <Link to="/src/pages/guidelist.jsx">
        <p className="guides">Guide</p>
      </Link>

      <div className="cord_rect"></div>

      <Link to="/src/pages/cordinatorlist.jsx">
        <p className="cordinator">Cordinators</p>
      </Link>

      <div className="prolist_rect"></div>

      <Link to="/src/pages/projectlist.jsx">
        <p className="projectlist">Project List</p>
      </Link>

      <div className="student_rect"></div>

      <Link to="/src/pages/cordinatorlist.jsx">
        <p className="studentlist">Student List</p>
      </Link>

      <div className="notif_rect"></div>

      <Link to="/src/pages/notifications.jsx">
        <p className="notification">Notifications</p>
      </Link>

      <div className="req_rect"></div>

      <Link to="/src/pages/request.jsx">
        <p className="request">Requests</p>
      </Link>
    </div>
  );
}
