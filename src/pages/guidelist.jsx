import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/guidelist.css";
import GuideCard from "../components/cards/GuideCard";

const Guidelist = () => {
  const [guides, setGuides] = useState([]);

  useEffect(() => {
    fetchGuides();
  }, []);

  const fetchGuides = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/user/guidelist`
      );
      console.log(response);
      setGuides(response.data.guides);
    } catch (error) {
      console.error("Error fetching guides list:", error);
    }
  };

  return (
    <div className="guide">
      <img className="logo" />
      <div className="line"></div>
      <p className="usertype">Guide List</p>
      <div className="bgrect"></div>
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
    </div>
  );
};

export default Guidelist;
