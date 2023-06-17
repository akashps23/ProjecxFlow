import React from "react";
import "../styles/homepage.css";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="home_page">
      <p className="title">ProjecXFlow</p>
      <div className="login_rect"></div>
      <div className="login_key">Login</div>
      <div className="search_rect"></div>
      <input
        className="search"
        defaultValue="Search Project"
        onClick={(event) => (event.target.value = "")}
      />
      <div className="mini_rect"></div>
      <p className="miniproject">Mini Project</p>
      <div className="main_rect"></div>
      <p className="miniproject">Main Project</p>
      <p className="tagline_head">Manage projects with ProjectXFlow</p>
      <p className="tagline">
        All in one solution for project management. Here you can simply manage
        your projects under the guidance of your faculties.
      </p>
      <div className="signup_rect"></div>
      <p className="getstarted">Get Started</p>
    </div>
  );
}
