import React from "react";
import "../styles/signup.css";
import { Link } from "react-router-dom";
import { Button } from "antd";

export default function SignUp() {
  return (
    <div className="sign_up">
      <div className="title">Creating an Account</div>
      <Link to="/src/pages/loginpage.jsx">
        <div className="login">Login</div>
      </Link>
      <input
        className="name"
        defaultValue="Name"
        onClick={(event) => (event.target.value = "")}
      />
      <input
        className="phno"
        defaultValue="Phone Number"
        onClick={(event) => (event.target.value = "")}
      />
      <input
        className="email"
        defaultValue="Email ID"
        onClick={(event) => (event.target.value = "")}
      />
      <input
        className="clg"
        defaultValue="College"
        onClick={(event) => (event.target.value = "")}
      />

      <input
        className="dept"
        defaultValue="Department"
        onClick={(event) => (event.target.value = "")}
      />

      <input
        className="sem"
        defaultValue="Semester"
        onClick={(event) => (event.target.value = "")}
      />

      <input
        className="adno"
        defaultValue="Admission Number"
        onClick={(event) => (event.target.value = "")}
      />

      <input
        className="rno"
        defaultValue="Roll Number"
        onClick={(event) => (event.target.value = "")}
      />

      <input
        className="regno"
        defaultValue="Register Number"
        onClick={(event) => (event.target.value = "")}
      />

      <input
        className="pwd"
        // type="password"
        // name="Password"
        defaultValue="Password"
        onClick={(event) => (event.target.value = "")}
      />

      <p className="quest">Which is your favorite Place ?</p>

      <input
        className="ans"
        name="Answer"
        defaultValue="Submit your answer"
        onClick={(event) => (event.target.value = "")}
      />

      <Link to="/src/pages/loginpage.jsx">
        <button className="signup">Submit</button>
      </Link>

      <div className="bgrect"></div>
    </div>
  );
}
