import React from "react";
import "../styles/mainprojectlist.css";
import { Link } from "react-router-dom";

export default function MainList() {
  return (
    <div>
      <div className="mainlist">
        {/* <Link to="/src/pages/homepage.jsx">
        <p className="back">Close</p>
      </Link> */}
        <p className="title">List of Main Projects</p>
        {/* <input
        className="list"
        id="minilist"
        placeholder="List of Projects"
        onClick={(event) => (event.target.value = "")}
      /> */}
        <div className="bgrect"></div>
      </div>
    </div>
  );
}
