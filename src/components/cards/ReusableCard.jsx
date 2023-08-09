import React from "react";

export default function ReusableCard(props) {
  return (
    <div
      className="card"
      style={{ height: props?.height + "px", width: "300px" }}
    >
      <div
        className="card-content"
        style={{
          color: "white",
          opacity: "0.8",
        }}
      >
        {props.children}
      </div>
    </div>
  );
}
