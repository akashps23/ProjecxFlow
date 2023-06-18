import React from "react";
import "../styles/loginpage.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login_page">
      <div className="rectangle"></div>
      <p className="projecx_flow">ProjecX flow</p>
      <p className="login_key">Login</p>
      <div className="grup_pic"></div>
      <img className="logo" />
      <div className="rectuser"></div>
      <input
        className="user_name"
        defaultValue="Username"
        onClick={(event) => (event.target.value = "")}
      />
      <div className="rectpass"></div>
      <input
        className="pass_word"
        name="Password"
        defaultValue="Password"
        onClick={(event) => (event.target.value = "")}
      />
      <Link to="/src/pages/forgotpassword.jsx">
        <p className="forgot_pass">Forgot Password</p>
      </Link>
      <Link to="/src/pages/selectingtype.jsx">
        <p className="create_acc">Create an Account</p>
      </Link>
      <p className="welcome">Welcome Back</p>
      <div className="line"></div>
      <p className="tagline">A Complete Solution for Managing Projects </p>
    </div>
  );
}
