import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";

const DeleteGuide = () =>{
    const navigate=useNavigate();
    const [useremail,setuseremail] = useState([]);
    const handleDelete = async (event) => {
       

        event.preventDefault();
        try{
            const response = await axios.post(
                "http://localhost:9014/api/v1/user/deleteguide",
                  {
                    useremail,
                  });
                  if (response.data.success) {
                    message.success("Deleted Successfully");
                   navigate("/guidelistadmin");
            
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

export default DeleteGuide;