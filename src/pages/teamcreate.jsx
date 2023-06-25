import React, { useState } from 'react';
import axios from 'axios';

import "../styles/teamcreate.css";

const TeamCreate = () => {
    // alert(yearRef.current.value);
  const [title, settitle] = useState('');
    const [type, settype] = useState('');
    const [coordinator, setcoordinator] = useState('');
    const [guide, setguide] = useState('');
    const [member1, setmember1] = useState('');
    const [member2, setmember2] = useState('');
    const [member3, setmember3] = useState('');
    const [member4, setmember4] = useState('');
    const [year,setYear] = useState('');

  
    const handleteamadd = async (event) => {
      event.preventDefault();
      console.log("button clicked")
  // console.log("hey");

  try {
    // Send the form data to the backend API
    const response = await axios.post('http://localhost:9014/api/v1/user/teamcreate', {
      title,
      type,
      coordinator,
      guide,
      member1,
      member2,
      member3,
      member4,
      year
    });

    console.log(response.data)

  if (response.data.success) {
    localStorage.setItem("token", response.data.token);
    message.success("Team creation Successful");
   navigate("/teamhomepage");

    // Reset the form
    settitle("");
    settype("");
    setYear("");
    setcoordinator("");
    setguide("");
    setmember1("");
    setmember2("");
    setmember3("");
    setmember4("");

  }
} catch (error) {
  console.error(error);
}
};
  return (
    <div className="team">
      <form onSubmit={handleteamadd}>
        <div className="dash">Creating a Dashboard</div>
        <input className="proname" placeholder="Project Title" type="text"
            value={title}
            onChange={(event) => settitle(event.target.value)} />
        <select className="protype" placeholder="select" value={type} onChange={(event) => settype(event.target.value)} >
          <option>Mini Project</option>
          <option>Main Project</option>
        </select>
        {/* <input className="protype" placeholder="Project Type" /> */}
        {/* <select className="year" ref={yearRef}>
          <option>a</option>
          <option>b</option>
          <option>c</option>
          <option>d</option>
          <option>e</option>
        </select> */}
        <input
          className="year"
          placeholder="Year"
          type='number'
          value={year}
          onChange={(event) => setYear(event.target.value)}
        />
        <div className="teamadd">Add Your Team Members</div>
        <input className="teammate_one" placeholder="Teammate's Email ID" type="email" value={member1} onChange={(event) => setmember1(event.target.value)} />
        <input className="teammate_two" placeholder="Teammate's Email ID" type="email" value={member2} onChange={(event) => setmember2(event.target.value)} />
        <input className="teammate_three" placeholder="Teammate's Email ID" type="email" value={member3} onChange={(event) => setmember3(event.target.value)} />
        <input className="teammate_four" placeholder="Teammate's Email ID" type="email" value={member4} onChange={(event) => setmember4(event.target.value)} />
        <div className="facultyadd">Add Faculties To Dashboard</div>
        <input className="coordinator01" placeholder="Coordinator's Email ID" type="email" value={coordinator} onChange={(event) => setcoordinator(event.target.value)}/>
        <input className="guide" placeholder="Guide's Email ID" type="email" value={guide} onChange={(event) => setguide(event.target.value)}/>
        <div className="bgrect"></div>
        <button
          className="submit"
          type="submit">
            submit</button>
      </form>
    </div>
  );
}

export default TeamCreate;




/*import React, { useState } from 'react';
import axios from 'axios';

const TeamaddPage = () => {
    const [title, settitle] = useState('');
    const [type, settype] = useState('');
    const [coordinator, setcoordinator] = useState('');
    const [guide, setguide] = useState('');
    const [member1, setmember1] = useState('');
    const [member2, setmember2] = useState('');
    const [member3, setmember3] = useState('');
    const [member4, setmember4] = useState('');

  
    const handleteamadd = async (event) => {
      event.preventDefault();
    

      try {
        // Send the form data to the backend API
        const response = await axios.post('http://localhost:9013/api/v1/user/addteammembers', {
          title,
          type,
          coordinator,
          guide,
          member1,
          member2,
          member3,
          member4
        });

        console.log(response.data)
      settitle('');
      settype('');
      setcoordinator('');
      setguide('');
      setmember1('');
      setmember2('');
      setmember3('');
      setmember4('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Add members</h1>
      <form onSubmit={handleteamadd}>
      <div>
          <label>title:</label>
          <input
            type="text"
            value={title}
            onChange={(event) => settitle(event.target.value)}
          />
        </div>
        <div>
          <label>type:</label>
          <input
            type="text"
            value={type}
            onChange={(event) => settype(event.target.value)}
          />
        </div>
        <div>
          <label>coordinator:</label>
          <input
            type="text"
            value={coordinator}
            onChange={(event) => setcoordinator(event.target.value)}
          />
        </div>
        <div>
          <label>guide:</label>
          <input
            type="text"
            value={guide}
            onChange={(event) => setguide(event.target.value)}
          />
        </div>
        <div>
          <label>member1:</label>
          <input
            type="text"
            value={member1}
            onChange={(event) => setmember1(event.target.value)}
          />
        </div>
        <div>
          <label>member2:</label>
          <input
            type="text"
            value={member2}
            onChange={(event) => setmember2(event.target.value)}
          />
        </div>
        <div>
          <label>member3:</label>
          <input
            type="text"
            value={member3}
            onChange={(event) => setmember3(event.target.value)}
          />
        </div>
        <div>
          <label>member4:</label>
          <input
            type="text"
            value={member4}
            onChange={(event) => setmember4(event.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
      </div>
  );
};

export default TeamaddPage;
 */