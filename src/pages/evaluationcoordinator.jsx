import React, { useState } from "react";
import "../styles/evaluationcoordinator.css";
import axios from "axios";
import { message } from "antd";
const rowStyles = {
  height: "100px",
  width: "40%",
  display: "grid",
  gridAutoFlow: "column",
  alignItems: "center",
  marginTop: "20px",
};
const inputStyles = {
  height: "50px",
  width: "80px",
  padding: "0px 10px",
  border: "1px solid black",
  borderRadius: "10px",
};
const submitStyles = {
  backgroundColor: "black",
  height: "50px",
  fontSize: "3rem",
  width: "125px",
};

function EvaluationCoordinator() {
  const [projectId, setProectId] = useState(
    localStorage.getItem("projectId") || null
  );
  const fetchLinkFromFile = async (route) => {
    try {
      if (!projectId) {
        message.error("No token for project present!");
        return;
      }
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/pdf/view${route}/${projectId}`
      );
      let link = response.data;
      if (link === "") message.error("File not uploaded yet!");
      else window.open(link);
    } catch (error) {
      console.log(error);
    }
  };
  const handleViewabstract = async () => {
    await fetchLinkFromFile("abstract");
  };
  const handleViewdiary = async () => {
    await fetchLinkFromFile("diary");
  };
  const handleViewsdd = async () => {
    await fetchLinkFromFile("srs");
  };
  const handleViewsrs = async () => {
    await fetchLinkFromFile("sdd");
  };
  const handleViewppt = async () => {
    await fetchLinkFromFile("ppt");
  };
  const handleViewimplementation = async () => {
    await fetchLinkFromFile("implementation");
  };
  const handleViewreport = async () => {
    await fetchLinkFromFile("report");
  };
  return (
    <div className="mark">
      <img className="logo" />
      <div className="line"></div>
      <p className="usertype">Coordinator's Evaluation</p>
      <div className="bg_rect">
        <div style={{ height: "150px" }} />
        <div className="view_buttons" style={{ paddingLeft: "8rem" }}>
          <div style={{ ...rowStyles }}>
            <button
              className="view_button"
              onClick={handleViewabstract}
              style={{ fontSize: "3rem", position: "initial" }}
            >
              View Abstract
            </button>
            <input
              type="number"
              style={{ ...inputStyles }}
              placeholder="Enter marks"
            />
            <button style={{ ...submitStyles }}>Submit</button>
          </div>
          <div style={{ ...rowStyles }}>
            <button
              className="view_button"
              onClick={handleViewdiary}
              style={{ fontSize: "3rem", position: "initial" }}
            >
              View SRS
            </button>
            <input
              type="number"
              style={{ ...inputStyles }}
              placeholder="Enter marks"
            />
            <button style={{ ...submitStyles }}>Submit</button>
          </div>
          <div style={{ ...rowStyles }}>
            <button
              className="view_button"
              onClick={handleViewsdd}
              style={{ fontSize: "3rem", position: "initial" }}
            >
              View SDD
            </button>
            <input
              type="number"
              style={{ ...inputStyles }}
              placeholder="Enter marks"
            />
            <button style={{ ...submitStyles }}>Submit</button>
          </div>
          <div style={{ ...rowStyles }}>
            <button
              className="view_button"
              onClick={handleViewsrs}
              style={{ fontSize: "3rem", position: "initial" }}
            >
              View PPT
            </button>
            <input
              type="number"
              style={{ ...inputStyles }}
              placeholder="Enter marks"
            />
            <button style={{ ...submitStyles }}>Submit</button>
          </div>
          <div style={{ ...rowStyles }}>
            <button
              className="view_button"
              onClick={handleViewppt}
              style={{ fontSize: "3rem", position: "initial" }}
            >
              View Implementation
            </button>
            <input
              type="number"
              style={{ ...inputStyles }}
              placeholder="Enter marks"
            />
            <button style={{ ...submitStyles }}>Submit</button>
          </div>
          <div style={{ ...rowStyles }}>
            <button
              className="view_button"
              onClick={handleViewimplementation}
              style={{ fontSize: "3rem", position: "initial" }}
            >
              View Diary
            </button>
            <input
              type="number"
              style={{ ...inputStyles }}
              placeholder="Enter marks"
            />
            <button style={{ ...submitStyles }}>Submit</button>
          </div>
          <div style={{ ...rowStyles }}>
            <button
              className="view_button"
              onClick={handleViewreport}
              style={{ fontSize: "3rem", position: "initial" }}
            >
              View Report
            </button>
            <input
              type="number"
              style={{ ...inputStyles }}
              placeholder="Enter marks"
            />
            <button style={{ ...submitStyles }}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EvaluationCoordinator;
