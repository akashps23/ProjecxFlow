import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";

const DeleteStudent = () =>{
    const navigate=useNavigate();
    const [useremail,setuseremail] = useState([]);
    const handleDelete = async (event) => {
       

        event.preventDefault();
        try{
            const response = await axios.post(
                `${process.env.VITE_API_URL}/user/deletestudent`,
                  {
                    useremail,
                  });
                  if (response.data.success) {
                    message.success("Deleted Successfully");
                   navigate("/studentlistadmin");
            
                    // Reset the form
                    setuseremail("");
                  }
        }
        catch (error) {
            console.error(error);
          }
    };
    return(
        <div>
            <form onSubmit={handleDelete}>
                <input type='text' placeholder='Enter user email' value={useremail} onChange={(event) => setuseremail(event.target.value)}></input>
                <button type='submit'>
                    Delete
                </button>
            </form>
        </div>
    )
}

export default DeleteStudent;