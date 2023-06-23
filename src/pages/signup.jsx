import React,{useState} from "react";
import "../styles/signup.css";
import { Link,useNavigate } from "react-router-dom";
import { Button, message } from "antd";
import axios from "axios";

const SignupstudentPage = () => {
  const navigate=useNavigate()
  const [name, setname] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [email, setEmail] = useState('');
  const [college, setCollege] = useState('');
  const [dept, setDept] = useState('');
  const [sem, setSem] = useState('');
  const [admno, setAdmno] = useState('');
  const [rollno, setRollno] = useState('');
  const [regno, setRegno] = useState('');
  const [password, setPassword] = useState('');
  const [answer, setAnswer] = useState('');

  const handlestudentSignup = async (event) => {
    event.preventDefault();

    try {
      // Send the form data to the backend API
      const response = await axios.post('http://localhost:9013/api/v1/user/studentsignup', {
        name,
        phoneno,
        email,
        college,
        dept,
        sem,
        admno,
        rollno,
        password,
        regno,
        answer
      });
      if (response.data.success) {
        message.success("Registered Successfully", () => {
          navigate("/studentlogin");
        });
      } else {
        message.error("Registration Failed");
      }
      console.log(response.data); // Handle the response from the server

      // Reset the form
      
      
      setname('');
      setPhoneno('');
      setEmail('');
      setCollege('');
      setDept('');
      setSem('');
      setAdmno('');
      setRollno('');
      setRegno('');
      setPassword('');
      setAnswer('');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="sign_up">
      <div className="title">Creating an Account</div>
      <form onSubmit={handlestudentSignup}>
        <input
        className="name"
        placeholder="Name"
        type="text"
        value={name}
        onChange={(event) =>setname(event.target.value)}
      />
      <input
        className="phno"
        placeholder="Phone Number"
        type="number"
        value={phoneno}
        onChange={(event) =>setPhoneno(event.target.value)}
      />
      <input
        className="email"
        placeholder="Email ID"
        type="text"
        value={email}
        onChange={(event) =>setEmail(event.target.value)}
      />
      <input
        className="clg"
        placeholder="College"
        type="text"
        value={college}
        onChange={(event) =>setCollege(event.target.value)}
      />

      <input
        className="dept"
        placeholder="Department"
        type="text"
        value={dept}
        onChange={(event) =>setDept(event.target.value)}
      />

      <input
        className="sem"
        placeholder="Semester"
        type="number"
        value={sem}
        onChange={(event) =>setSem(event.target.value)}
      />

      <input
        className="adno"
        placeholder="Admission Number"
        type="text"
        value={admno}
        onChange={(event) =>setAdmno(event.target.value)}
      />

      <input
        className="rno"
        placeholder="Roll Number"
        type="number"
        value={rollno}
        onChange={(event) =>setRollno(event.target.value)}
      />

      <input
        className="regno"
        placeholder="Register Number"
        type="text"
        value={regno}
        onChange={(event) =>setRegno(event.target.value)}
      />

      <input
        className="pwd"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) =>setPassword(event.target.value)}
      />

      <p className="quest">Which is your favorite Place ?</p>

      <input
        className="ans"
        name="Answer"
        placeholder="Submit your answer"
        type="text"
        value={answer}
        onChange={(event) =>setAnswer(event.target.value)}
      />

        <button className="signup" type="submit">Submit</button>

      <div className="bgrect"></div>  
      </form>
    </div>
      
  );
}


export default SignupstudentPage;


/*return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handlestudentSignup}>
        <div>
          <label>name:</label>
          <input
            type="text"
            value={name}
            onChange={(event) => setname(event.target.value)}
          />
        </div>
        <div>
          <label>Phoneno:</label>
          <input
            type="number"
            value={phoneno}
            onChange={(event) => setPhoneno(event.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label>College:</label>
          <input
            type="text"
            value={college}
            onChange={(event) => setCollege(event.target.value)}
          />
        </div>
        <div>
          <label>Dept:</label>
          <input
            type="text"
            value={dept}
            onChange={(event) => setDept(event.target.value)}
          />
        </div>
        <div>
          <label>Sem:</label>
          <input
            type="number"
            value={sem}
            onChange={(event) => setSem(event.target.value)}
          />
        </div>
        <div>
          <label>Admno:</label>
          <input
            type="text"
            value={admno}
            onChange={(event) => setAdmno(event.target.value)}
          />
        </div>
        <div>
          <label>Rollno:</label>
          <input
            type="text"
            value={rollno}
            onChange={(event) => setRollno(event.target.value)}
          />
        </div>
        <div>
          <label>Regno:</label>
          <input
            type="text"
            value={regno}
            onChange={(event) => setRegno(event.target.value)}
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
        <div>
          <label>Question:</label>
          <input
            type="text"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
          />
        </div>
        <div>
          <label>Answer:</label>
          <input
            type="text"
            value={answer}
            onChange={(event) => setAnswer(event.target.value)}
          />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignupstudentPage;
   */