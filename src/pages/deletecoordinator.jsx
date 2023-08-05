import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";
import "../styles/deleteguide.css";

const DeleteCoordinator = () => {
  const navigate = useNavigate();
  const [useremail, setuseremail] = useState([]);
  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/user/deletecoordinator`,
        {
          useremail,
        }
      );
      if (response.data.success) {
        message.success("Deleted Successfully");
        navigate("/coordinatorlist");

        // Reset the form
        setuseremail("");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="delete_guide_cls">
      <img className="logo" />
      <div className="line"></div>
      <p className="usertype">Removing Coordinator</p>
      <div className="bgrect"></div>
      <form onSubmit={handleDelete}>
        <input
          className="email_id"
          type="text"
          placeholder="Enter The Coordinator's Email ID"
          value={useremail}
          onChange={(event) => setuseremail(event.target.value)}
        ></input>
        <button className="delete_guide" type="submit">
          Remove Coordinator
        </button>
      </form>
    </div>
  );
};

export default DeleteCoordinator;
