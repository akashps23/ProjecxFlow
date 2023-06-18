import React from "react";
import "../styles/forgotpassword.css";

function ForgotPassword() {
  return (
    <div>
      <div className="forgot">
        <p className="title">Let's Recover Your Account</p>
        <div className="bgrect"></div>
        <input className="email"></input>
        <p className="qn">What is your favorite Place ?</p>
        <div className="ans"></div>
      </div>
    </div>
  );
}

export default ForgotPassword;
