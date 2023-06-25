import React, { useState } from "react";
import "../styles/forgotpassword.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { message } from "antd";

export default function ForgotPasswordGuide() {
  const navigate = useNavigate();
  const [email, setUsername] = useState("");
  const [answer, setAnswer] = useState("");

  const handleguidePassword = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
      "http://localhost:9014/api/v1/user/forgotpasswordguide",
        {
          email,
          answer,
        });
      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
       navigate("/guidehomepage");
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
      <form onSubmit={handleguidePassword}>
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
