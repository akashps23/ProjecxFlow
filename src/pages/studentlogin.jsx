import React, { useState } from "react";
import "../styles/loginpage.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { message } from "antd";

export default function LoginStudent() {
  const navigate = useNavigate();
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handlestudentLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
<<<<<<< HEAD:src/pages/Login.jsx
        "http://localhost:9013/api/v1/user/studentlogin",
=======
      "http://localhost:9014/api/v1/user/studentlogin",
>>>>>>> 7fa7ad6c283dc372a69dbcf3fe0f0a4d19bf90ad:src/pages/studentlogin.jsx
        {
          email,
          password,
        }
      );
      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("studentId", response.data.studentId)
        message.success("Login Successful");
<<<<<<< HEAD:src/pages/Login.jsx
        // navigate("/studenthomepage");
        console.log(response);
=======
       navigate("/studenthomepage");
       console.log(response)
>>>>>>> 7fa7ad6c283dc372a69dbcf3fe0f0a4d19bf90ad:src/pages/studentlogin.jsx

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
      <form onSubmit={handlestudentLogin}>
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
<<<<<<< HEAD:src/pages/Login.jsx
      </form>
      <Link to="/forgotpassword">
        <p className="forgot_pass">Forgot Password</p>
      </Link>
      <Link to="/usertype">
        <p className="create_acc">Create an Account</p>
      </Link>
      <p className="welcome">Welcome Back</p>
      <div className="line"></div>
      <p className="tagline">A Complete Solution for Managing Projects </p>
=======
        </form>
        <Link to="/forgotpasswordstudent">
          <p className="forgot_pass">Forgot Password</p>
        </Link>
        <Link to="/studentsignup">
          <p className="create_acc">Create an Account</p>
        </Link>
        <p className="welcome">Welcome Back</p>
        <div className="line"></div>
        <p className="tagline">A Complete Solution for Managing Projects </p>
>>>>>>> 7fa7ad6c283dc372a69dbcf3fe0f0a4d19bf90ad:src/pages/studentlogin.jsx
    </div>
  );
}
