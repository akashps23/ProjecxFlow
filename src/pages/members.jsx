import React, { useEffect, useState } from "react";
import axios from "axios";

const Members = () =>{
    const [teamdata,SetTeamdata] = useState();



    const getTeamData = async () => {
        try {
          const teamId = localStorage.getItem("projectId")
          console.log(teamId)
          const response = await axios.get(
            `http://localhost:9014/api/v1/user/getTeamData?teamId=${teamId}`
          );
          console.log(response)
          if (response.data.success) {
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
        </div>
        
      )

}
export default Members;