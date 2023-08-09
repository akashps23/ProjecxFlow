import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/adminguide.css";
import GuideCard from "../components/cards/GuideCard";

const GuidelistAdmin = () => {
  const [guides, setGuides] = useState([]);

  useEffect(() => {
    fetchGuides();
  }, []);

  const fetchGuides = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/user/guidelistadmin`
      );
      console.log(response);
      setGuides(response.data.guides);
    } catch (error) {
      console.error("Error fetching guides list:", error);
    }
  };

  return (
    <div className="admin_guidelist">
      <img className="logo" />
      <div className="line"></div>
      <p className="usertype">Guide List</p>
      <div className="bgrect"></div>
      {/* {guides.map((guide) => (
        <div key={guide}>
          <h3>{guide.name}</h3>
          <p>Email : {guide.email}</p>
          <p>Phone Number : {guide.phoneno}</p>
          <p>Faculty ID : {guide.fid}</p>
          <p>Department : {guide.dept}</p>
          <p>College : {guide.college}</p>
        </div>
      ))} */}

      <div
        className="searchResults_s"
        style={{ marginTop: "8rem", display: "flex", justifyContent: "center" }}
      >
        {guides.map((guide, index) => (
          <GuideCard
            key={index}
            name={guide.name}
            email={guide.email}
            phoneno={guide.phoneno}
            fid={guide.fid}
            dept={guide.dept}
            college={guide.college}
          />
        ))}
      </div>

      <Link to="/deleteguide">
        <div className="delete_guide">Remove Guide</div>
      </Link>
    </div>
  );
};

export default GuidelistAdmin;
