import React from "react";
import "../styles/teamcreate.css";

function TeamCreate() {
  return (
    <div className="team">
      <form>
        <div className="dash">Creating a Dashboard</div>
        <input
          className="proname"
          defaultValue="Project Title"
          onClick={(event) => (event.target.value = "")}
        />
        <input
          className="protype"
          defaultValue="Project Type"
          onClick={(event) => (event.target.value = "")}
        />
        <input
          className="year"
          defaultValue="Year"
          onClick={(event) => (event.target.value = "")}
        />
        <div className="teamadd">Add Your Team Members</div>
        <input
          className="teammate_one"
          defaultValue="Teammate's Email ID"
          onClick={(event) => (event.target.value = "")}
        />
        <input
          className="teammate_two"
          defaultValue="Teammate's Email ID"
          onClick={(event) => (event.target.value = "")}
        />
        <input
          className="teammate_three"
          defaultValue="Teammate's Email ID"
          onClick={(event) => (event.target.value = "")}
        />
        <input
          className="teammate_four"
          defaultValue="Teammate's Email ID"
          onClick={(event) => (event.target.value = "")}
        />
        <div className="facultyadd">Add Faculties To Dashboard</div>
        <input
          className="coordinator01"
          defaultValue="Coordinator's Email ID"
          onClick={(event) => (event.target.value = "")}
        />
        <input
          className="coordinator02"
          defaultValue="Coordinator's Email ID"
          onClick={(event) => (event.target.value = "")}
        />
        <input
          className="guide"
          defaultValue="Guide's Email ID"
          onClick={(event) => (event.target.value = "")}
        />
        <div className="bgrect"></div>
        <button className="submit">Submit</button>
      </form>
    </div>
  );
}

export default TeamCreate;
