import React from "react";
import "../styles/forgotpassword.css";
import { Link } from "react-router-dom";

export function ForgotPassword() {
  return (
    <div className="forgot">
      <p className="title">Let's Recover Your Account</p>
      <div className="bgrect"></div>
      <input
        className="email"
        defaultValue={"Enter Your Email ID"}
        onClick={(event) => (event.target.value = "")}
      ></input>
      <p className="question">What is your favorite Place ?</p>
      <input
        className="answer"
        defaultValue={"Enter Your Answer"}
        onClick={(event) => (event.target.value = "")}
      ></input>
      <Link to="/src/pages/loginpage.jsx">
        <div className="submit">Submit</div>
      </Link>
    </div>
  );
}
