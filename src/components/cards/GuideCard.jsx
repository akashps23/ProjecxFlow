import React from "react";

export default function GuideCard(props) {
  return (
    <div className="card" style={{ height: "250px", width: "300px" }}>
      <div
        className="card-content"
        style={{
          color: "white",
          opacity: "0.8",
        }}
      >
        <div
          className="holder_title"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <h2 className="card-title" style={{ fontSize: "4rem" }}>
            {props.name}
          </h2>
          <p className="card-type">Email ID : {props.email}</p>
          <p className="card-type">Phone Number : {props.phoneno}</p>
          <p className="card-type">Faculty ID : {props.fid}</p>
          <p className="card-type">Department : {props.dept}</p>
          <p className="card-type">College : {props.college}</p>
        </div>
      </div>
    </div>
  );
}
