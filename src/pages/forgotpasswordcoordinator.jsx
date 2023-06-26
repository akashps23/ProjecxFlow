import React, { useState } from "react";
import "../styles/forgotpassword.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { message } from "antd";

export default function ForgotPasswordCoordinator() {
  const navigate = useNavigate();
  const [email, setUsername] = useState("");
  const [answer, setAnswer] = useState("");

  const handlecoordinatorPassword = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
      "https://server-bfex.onrender.com/api/v1/user/forgotpasswordcoordinator",
        {
          email,
          answer,
        });
      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
       navigate("/coordinatorhomepage");
       message.success("recovered successfully")
       console.log(response)

        // Reset the form
        setUsername("");
        setAnswer("");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="forgot">
      <p className="title">Let's Recover Your Account</p>
      <div className="bgrect"></div>
      <form onSubmit={handlecoordinatorPassword}>
      <input
        className="email"
        placeholder={"Email ID"}
        type="text"
        value={email}
        onChange={(event) => setUsername(event.target.value)}
      ></input>
      <p className="question">Which is your favorite Place ?</p>
      <input
        className="answer"
        placeholder={"Answer"}
        type="text"
        value={answer}
        onChange={(event) => setAnswer(event.target.value)}
      ></input>
        <button className="submit" type="submit">Submit</button>
      </form>
      
    </div>
  );
}





/*<p className="title">Let's Recover Your Account</p> */