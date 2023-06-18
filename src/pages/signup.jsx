import React from 'react'
import "../styles/signup.css";
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className='sign_up'>

    <div className="login_rect"></div>

    <Link to="/src/pages/loginpage.jsx">
        <div className="login">Login</div>
      </Link>

    <div className="name_rect"></div>
      <input
         className="Name" 
         defaultValue="Name"
         onClick={(event) => (event.target.value = "")}
         />
      <div className='phno_rect'></div>
        <input
          className='phno'
          defaultValue="Phone Number"
          onClick={(event) => (event.target.value = "")}
          />

      <div className='email_rect'></div>
      <input
         className="email" 
         defaultValue="EMail"
         onClick={(event) => (event.target.value = "")}
         />

      <div className='clg_rect'></div>
      <input
         className="clg" 
         defaultValue="College"
         onClick={(event) => (event.target.value = "")}
         /> 

      <div className='dept_rect'></div>
      <input
         className="dept" 
         defaultValue="Department"
         onClick={(event) => (event.target.value = "")}
         />   

      <div className='sem_rect'></div>
      <input
         className="sem" 
         defaultValue="Semester"
         onClick={(event) => (event.target.value = "")}
         /> 

      <div className='adno_rect'></div>
      <input
         className="adno" 
         defaultValue="Admmission Number"
         onClick={(event) => (event.target.value = "")}
         /> 

      <div className='rno_rect'></div>
      <input
         className="rno" 
         defaultValue="Roll Number"
         onClick={(event) => (event.target.value = "")}
         />  

      <div className='regno_rect'></div>
      <input
         className="regno" 
         defaultValue="Register Number"
         onClick={(event) => (event.target.value = "")}
         />      

      <div className='pwd_rect'></div>
      <input
        className="pwd"
        name="Password"
        defaultValue="Password"
        onClick={(event) => (event.target.value = "")}   
      />

      {/* <div className='repwd_rect'></div>
      <input
        className="repwd"
        name="Password"
        defaultValue="Reenter Password"
        onClick={(event) => (event.target.value = "")}   
      /> */}

      <div className='quest_rect'></div>
      <input
        className="quest"
        name="question"
        defaultValue="Enter a question"
        onClick={(event) => (event.target.value = "")}   
      />

      <div className='ans_rect'></div>
      <input
        className="ans"
        name="Answer"
        defaultValue="Submit your answer"
        onClick={(event) => (event.target.value = "")}   
      />

      <Link to="/src/pages/loginpage.jsx">
        <p className="submit">Submit</p>
      </Link>
    

      <div className="loginrect"></div>
      <div className="progline"></div>
      <div className="rectline"></div>
    </div>
  )
}

// export default signup
