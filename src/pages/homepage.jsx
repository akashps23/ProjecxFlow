import React from 'react';
import '../styles/homepage.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home_page">
        <div className="rectangle01"></div>
        <div className="projecx_flow">ProjecX flow</div>
        <div className="rectangle02"></div>
        <Link to='/pages/loginpage.jsx'>Login</Link>
        <p className="title">Manage projects with ProjectXFlow</p>
        <p className="tagline">All in one solution for project management. Here you can simply manage your projects under the guidance of your faculties.</p>
        <div className="rectangle03"></div>
        <p className="search">Search Project</p>
        <div className="item">|</div>
        <img className="glass_img" src="./assets/magnifying-glass-1-38a.png"/>
        <img className="projectxflow_logo" src="./assets/projectxflow-2-H8i.png"/>
        <div className="rectangle04"></div>
        <div className="main_proj">Main Project</div>
        <div className="rectangle05"></div>
        <div className="mini_proj">Mini Project</div>
        <div className="rectangle06"></div>
        <p className="start">Get started</p>
   </div>
  );
}
