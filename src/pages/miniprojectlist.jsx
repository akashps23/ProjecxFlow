import React from "react";
import "../styles/miniprojectlist.css";
import { Link } from "react-router-dom";

export function MiniList() {
  return (
    <div className="minilist">
      {/* <Link to="/src/pages/homepage.jsx">
        <p className="back">Close</p>
      </Link> */}
      <p className="title">List of Mini Projects</p>
      {/* <input
        className="list"
        id="minilist"
        defaultValue="List of Projects"
        onClick={(event) => (event.target.value = "")}
      /> */}
      <div className="bgrect"></div>
    </div>
  );
}
