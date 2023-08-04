import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Members = () =>{
    const [teamdata,SetTeamdata] = useState();



    const getTeamData = async () => {
        try {
          const teamId = localStorage.getItem("teamId")
          console.log(teamId)
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/user/getTeamData?teamId=${teamId}`
          );
          if (response.data.success) {
            
            localStorage.setItem("projectId",response.data.data.projectId);
            SetTeamdata(response.data.data);
          }
        } catch (error) {
          console.log(error);
        }
      };
    
    
      useEffect(() => {
        getTeamData();
      }, []);

      if(teamdata)
      return(
        <div>
            <h1>Faculties</h1>
            <p>Coordinator: {teamdata.coordinator}</p>
            <p>Guide: {teamdata.guide}</p>
            <h1>Teammates</h1>
            <p>{teamdata.member1}</p>
            <p>{teamdata.member2}</p>
            <p>{teamdata.member3}</p>
            <p>{teamdata.member4}</p>  
            <button>
            <Link to="/calendar">
              Calendar
              </Link>
            </button>
            <button>
            <Link to="/fileupload">
              attachments
              </Link>
            </button>
              
        </div>
        
      )

}
export default Members;