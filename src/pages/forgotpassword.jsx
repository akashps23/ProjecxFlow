import React from "react";
import "../styles/forgotpassword.css";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div className="forgot">
      <p className="title">Let's Recover Your Account</p>
      <div className="bgrect"></div>
      <input
        className="email"
        placeholder={"Email ID"}
        onClick={(event) => (event.target.value = "")}
      ></input>
      <p className="question">Which is your favorite Place ?</p>
      <input
        className="answer"
        placeholder={"Answer"}
        onClick={(event) => (event.target.value = "")}
      ></input>
      <Link to="/login">
        <div className="submit">Submit</div>
      </Link>
    </div>
  );
}
