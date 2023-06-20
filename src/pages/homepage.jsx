import React from "react";
import "../styles/homepage.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [val, setVal] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    //console.log(val);
    navigate("/src/pages/projectsearch.jsx", { state: { txt: val } });
  };
  return (
    <div className="home_page">
      <p className="title">ProjecXFlow</p>

      {/* <Link to="/src/pages/projectsearch.jsx">
        <p className="searchimg">Search</p>
      </Link> */}

      <img className="logo"></img>

      <Link to="/src/pages/loginpage.jsx">
        <div className="login_key">Login</div>
      </Link>

      <div className="search_rect"></div>

      <form onSubmit={handleSearch}>
        <input
          className="search"
          id="searchpro"
          defaultValue="Search Project"
          onChange={(e) => setVal(e.target.value)}
          onClick={(event) => (event.target.value = "")}
        />
        <button className="searchimg" type="submit">
          Search
        </button>
      </form>
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
