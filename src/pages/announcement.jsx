import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Announcements = () => {
    const [announcements, setAnnouncements] = useState([]);
    useEffect(() => {
      fetchAnnouncements();
    }, []);

    const fetchAnnouncements = async () => {
        try {
          const response = await axios.get(`${import.meta.env.VITE_API_URL}/user/showannouncements`);
          console.log(response)
          setAnnouncements(response.data.announcements);
        } catch (error) {
          console.error('Error fetching announcements:', error);
        }
      };
    
      return (
        <div>
          <h2>Announcements</h2>
          {announcements.map((announcement) => (
            <div key={announcement}>
              <h3>{announcement.announcement} - {announcement.date}</h3>
              
              
            </div>
          ))}
          <Link to="/makeannouncement">
        <p>Make Announcements</p>
      </Link>
        </div>
      );
    };

    export default Announcements;