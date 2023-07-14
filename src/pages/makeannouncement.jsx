import React, { useState } from "React";
import { message } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";

const Announce = () => {
  const [announcement, setAnnouncement] = useState("");
  const [date, setDate] = useState("");

  const handleAnnounce = async (event) => {
    event.preventDefault();
    try {
        console.log(announcement);
        console.log(date);
      const response = await axios.post(
        "http://localhost:9014/api/v1/user/announce",
        {
          announcement,
          date,
        }
      );
      if (response.data.success) {
        message.success("Announce made successfully");
        console.log(response);
        setAnnouncement("");
        setDate("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="Announce_make">
      <form onSubmit={handleAnnounce}>
        <input
          type="text"
          placeholder="Enter the announcement"
          value={announcement}
          onChange={(event) => setAnnouncement(event.target.value)}
        />
        <input
          type="text"
          placeholder="Enter the date in order dd/mm/yy"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
        <button type="submit">Post</button>
      </form>
      <Link to= "/announcements">
        <p>Back to announcements</p>
      </Link>

    </div>
  );
};

export default Announce;
