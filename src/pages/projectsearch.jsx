import React from "react";
import "../styles/projectsearch.css";
import { useLocation } from "react-router-dom";

export default function ProjectSearch() {
  const txt = useLocation().state?.txt;
  console.log(txt);
  return (
    <div>
      <div className="projectsearch">
        {/* <Link to="/src/pages/homepage.jsx">
        <p className="back">Close</p>
      </Link> */}
        <div className="search_rect"></div>
        <img className="searchimg"></img>
        <p className="title">Similar Projects Like</p>
        <p className="search">" {txt} "</p>
        <div className="bgrect"></div>
      </div>
    </div>
  );
}
