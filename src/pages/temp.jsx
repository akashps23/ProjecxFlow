import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';


const LoginstudentPage = () => {
  const navigate=useNavigate();
  const [name, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handlestudentLogin = async (event) => {
    event.preventDefault();
    

    try {
      // Send the form data to the backend API
      const response = await axios.post('http://localhost:9013/api/v1/user/studentlogin', {
        name,
        password,
      });

      if(response.data.success){
        localStorage.setItem("token",response.data.token)
        message.success("Login Successful")
        navigate('/studenthomepage')


      // Reset the form
      setUsername('');
      setPassword('');
    
    }
   } catch (error) {
      console.error(error);
    }

  }

  return (
  //  <BrowserRouter>
    
   // <Routes>
    //<Route path="/studenthomepage" element={<Studenthome />} />
    //</Routes>/*
  

    <div>
      <h1>Login</h1>
      <form onSubmit={handlestudentLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={name}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    //</BrowserRouter>
    
  );
};


export default LoginstudentPage;