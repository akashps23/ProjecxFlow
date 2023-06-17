import React from "react";
import "../styles/loginpage.css";
//import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login_page">
      <div className="rectangle"></div>
      <p className="projecx_flow">ProjecX flow</p>
      <div className="rectangle2"></div>
      <p className="login_key">Login</p>
      <div className="grup_pic"></div>
      <img className="logo" />
      <div className="rectangle3"></div>
      <input
        className="user_name"
        defaultValue="Username"
        onClick={(event) => (event.target.value = "")}
      />
      <div className="rectangle4"></div>
      <input
        className="pass_word"
        name="Password"
        defaultValue="Password"q
        onClick={(event) => (event.target.value = "")}
      />
      <p className="forgot_pass">Forgot Password</p>

      <p className="create_acc">Create an Account</p>
      <p className="welcome">Welcome Back</p>
      <div className="line"></div>
      <p className="tagline">A Complete Solution for Managing Projects </p>
    </div>
  );
}
