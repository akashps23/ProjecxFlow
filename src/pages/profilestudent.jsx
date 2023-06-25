import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/profilestudent.css";

const StudentHome = () => {
  const [userData, setUserData] = useState(null);

  const getUserData = async () => {
    try {
      const response = await axios.post(
        'http://localhost:9014/api/v1/user/getStudentData',
        {},
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        }
      );
      if (response.data.success) {
        setUserData(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="student">
      {userData ? (
        <>
          <p className="title">Welcome {userData.name}</p>
          <p>ID: {userData.id}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
      <div className="bgrect"></div>
    </div>
  );
}

export default StudentHome;
