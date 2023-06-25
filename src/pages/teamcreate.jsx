import React, { useRef } from "react";
import "../styles/teamcreate.css";

function TeamCreate() {
  const yearRef = useRef(null);
  const handleSubmit = () => {
    console.log("ge");
    alert("AFFs");
    // alert(yearRef.current.value);
    let year = yearRef.current.value;
  };
  // console.log("hey");
  return (
    <div className="team">
      <form
        onSubmit={() => {
          console.log("submitted");
        }}
      >
        <div className="dash">Creating a Dashboard</div>
        <input className="proname" placeholder="Project Title" />
        <select className="protype" placeholder="select">
          <option>Mini Project</option>
          <option>Main Project</option>
        </select>
        {/* <input className="protype" placeholder="Project Type" /> */}

        <input
          className="year"
          placeholder="Year"
          onClick={(event) => (event.target.value = "")}
        />
        <div className="teamadd">Add Your Team Members</div>
        <input className="teammate_one" placeholder="Teammate's Email ID" />
        <input className="teammate_two" placeholder="Teammate's Email ID" />
        <input className="teammate_three" placeholder="Teammate's Email ID" />
        <input className="teammate_four" placeholder="Teammate's Email ID" />
        <div className="facultyadd">Add Faculties To Dashboard</div>
        <input className="coordinator01" placeholder="Coordinator's Email ID" />
        <input className="coordinator02" placeholder="Coordinator's Email ID" />
        <input className="guide" placeholder="Guide's Email ID" />
        <div className="bgrect"></div>
        <Link to="profilestudent">
          <input
            className="submit"
            type="submit"
            value="Submit"
            onClick={() => {
              console.log("sdfsfd");
            }}
          />
        </Link>
      </form>
    </div>
  );
}

export default TeamCreate;
