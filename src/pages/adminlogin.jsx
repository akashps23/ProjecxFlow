import React, { useState } from "react";
import "../styles/loginpage.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { message } from "antd";

export default function LoginAdmin() {
  const navigate = useNavigate();
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleadminLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
      "https://server-bfex.onrender.com/api/v1/user/adminlogin",
        {
          email,
          password,
        });
      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("studentId", response.data.studentId)
        message.success("Login Successful");
       navigate("/adminhomepage");
       console.log(response)

        // Reset the form
        setUsername("");
        setPassword("");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="login_page">
      <form onSubmit={handleadminLogin}>
        <div className="rectangle"></div>
        <p className="projecx_flow">ProjecX flow</p>
        <button className="login_key" type="submit">
          Login
        </button>
        <div className="grup_pic"></div>
        <img className="logo" />
        <div className="rectuser"></div>
        <input
          className="user_name"
          type="text"
          value={email}
          placeholder="Username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <div className="rectpass"></div>
        <input
          className="pass_word"
          type="Password"
          value={password}
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        </form>
        <Link to="/forgotpasswordstudent">
          <p className="forgot_pass">Forgot Password</p>3
        </Link>
        <Link to="/studentsignup">
          <p className="create_acc">Create an Account</p>
        </Link>
        <p className="welcome">Welcome Back</p>
        <div className="line"></div>
        <p className="tagline">A Complete Solution for Managing Projects </p>
    </div>
  );
}
