import React, { useEffect, useState } from "react";
import axios from "axios";

const Members = () =>{
    const [teamdata,SetTeamdata] = useState(null);



    const getTeamData = async () => {
        try {
          const response = await axios.post(
            "http://localhost:9014/api/v1/user/getTeamData",
            {},
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          );
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


      return(
        <div>
            <h1>Faculties</h1>
            <p>Coordinator: {teamdata.coordinator}</p>
            <p>Guide: {teamdata.guide}</p>
            <h1>Teammates</h1>
            <p>{userdata.member1}</p>
            <p>{userdata.member2}</p>
            <p>{userdata.member3}</p>
            <p>{userdata.member4}</p>

        
        </div>
        
      )

}
export default Members;