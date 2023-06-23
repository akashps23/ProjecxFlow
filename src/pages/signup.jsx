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
        placeholder="Name"
        onClick={(event) => (event.target.value = "")}
      />
      <input
        className="phno"
        placeholder="Phone Number"
        onClick={(event) => (event.target.value = "")}
      />
      <input
        className="email"
        placeholder="Email ID"
        onClick={(event) => (event.target.value = "")}
      />
      <input
        className="clg"
        placeholder="College"
        onClick={(event) => (event.target.value = "")}
      />

      <input
        className="dept"
        placeholder="Department"
        onClick={(event) => (event.target.value = "")}
      />

      <input
        className="sem"
        placeholder="Semester"
        onClick={(event) => (event.target.value = "")}
      />

      <input
        className="adno"
        placeholder="Admission Number"
        onClick={(event) => (event.target.value = "")}
      />

      <input
        className="rno"
        placeholder="Roll Number"
        onClick={(event) => (event.target.value = "")}
      />

      <input
        className="regno"
        placeholder="Register Number"
        onClick={(event) => (event.target.value = "")}
      />

      <input
        className="pwd"
        type="password"
        // name="Password"
        placeholder="Password"
        onClick={(event) => (event.target.value = "")}
      />

      <p className="quest">Which is your favorite Place ?</p>

      <input
        className="ans"
        name="Answer"
        placeholder="Submit your answer"
        onClick={(event) => (event.target.value = "")}
      />

      <Link to="/src/pages/loginpage.jsx">
        <button className="signup">Submit</button>
      </Link>

      <div className="bgrect"></div>
    </div>
  );
}
