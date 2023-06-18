import React from "react";
import "../styles/projectsearch.css";

export default function ProjectSearch() {
  return (
    <div>
      <div className="projectsearch">
        {/* <Link to="/src/pages/homepage.jsx">
        <p className="back">Close</p>
      </Link> */}
        <div className="search_rect"></div>
        <img className="searchimg"></img>
        <p className="title">Searching Similar Projects...</p>
        {/* <input
        className="list"
        id="minilist"
        defaultValue="List of Projects"
        onClick={(event) => (event.target.value = "")}
      /> */}
        <div className="bgrect"></div>
      </div>
    </div>
  );
}
