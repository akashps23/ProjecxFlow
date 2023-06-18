import React from "react";
import "../styles/homepage.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home_page">
      <p className="title">ProjecXFlow</p>

      <Link to="/src/pages/projectsearch.jsx">
        <img className="searchimg"></img>
      </Link>

      <img className="logo"></img>

      <Link to="/src/pages/loginpage.jsx">
        <div className="login_key">Login</div>
      </Link>

      <div className="search_rect"></div>

      <input
        className="search"
        id="searchpro"
        defaultValue="Search Project"
        onClick={(event) => (event.target.value = "")}
      />

      <div className="mini_rect"></div>
      <div className="bgrect"></div>

      <Link to="/src/pages/miniprojectlist.jsx">
        <p className="miniproject">Mini Project</p>
      </Link>

      <div className="main_rect"></div>

      <Link to="/src/pages/mainprojectlist.jsx">
        <p className="mainproject">Main Project</p>
      </Link>

      <p className="tagline_head">Manage projects with ProjectXFlow</p>

      <div className="signup_rect"></div>

      <Link to="/src/pages/selectingtype.jsx">
        <p className="getstarted">Get Started</p>
      </Link>
    </div>
  );
}
