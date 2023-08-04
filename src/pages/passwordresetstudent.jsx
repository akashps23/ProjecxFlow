import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { message } from "antd";


const Resetpassword = () => {
    const navigate = useNavigate();
    const[password , Setpassword] = useState("");
    const[repassword , Setrepassword] = useState("");
    const email = localStorage.getItem("email");

    const handlepasswordreset = async(event) =>{
        event.preventDefault();
        try
        {
            if(password!=repassword)
            {
                message.error("Password doesn't match");
            }
            else
            {
                const response = await axios.post(`${import.meta.env.VITE_API_URL}/user/recoverstudent/${email}`,{password,});
                console.log(response);
                if(response.data.success)
                {
                    mesage
                }
            }
        }
        catch(error)
        {
            message.error("something went wrong");
        }
    }
}