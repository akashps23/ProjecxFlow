import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/coordinatorlist.css";
import GuideCard from "../components/cards/GuideCard";

const Coordinatorlist = () => {
  const [coordinators, setCoordinantors] = useState([]);

  useEffect(() => {
    fetchCoordinators();
  }, []);

  const fetchCoordinators = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/user/coordinatorlist`
      );
      console.log(response);
      setCoordinantors(response.data.coordinators);
    } catch (error) {
      console.error("Error fetching coordinators list:", error);
    }
  };

  return (
    <div className="coordinator">
      <img className="logo" />
      <div className="line"></div>
      <p className="usertype">Coordinators List</p>
      <div className="bgrect"></div>
      {/* {coordinators.map((coordinator) => (
        <div key={coordinator}>
          <h3>{coordinator.name}</h3>
          <p>Email:{coordinator.email}</p>
          <p>Phone Number:{coordinator.phoneno}</p>
          <p>Faculty ID:{coordinator.fid}</p>
          <p>Department:{coordinator.dept}</p>
          <p>College:{coordinator.college}</p>
        </div>
      ))} */}
      <div
        className="searchResults_s"
        style={{ marginTop: "8rem", display: "flex", justifyContent: "center" }}
      >
        {coordinators.map((coordinator, index) => (
          <GuideCard
            key={index}
            name={coordinator.name}
            email={coordinator.email}
            phoneno={coordinator.phoneno}
            fid={coordinator.fid}
            dept={coordinator.dept}
            college={coordinator.college}
          />
        ))}
      </div>
      <Link to="/deletecoordinator">
        <div className="deletecoordinator">Remove coordinator</div>
      </Link>
    </div>
  );
};

export default Coordinatorlist;
