import React, { useState, useEffect } from 'react';
import "../styles/AnnouncementTicker.css"

const AnnouncementTicker = ({ announcements }) => {
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnnouncement((prevAnnouncement) => (prevAnnouncement + 1) % announcements.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [announcements.length]);

  return (
    <div className="announcement-ticker ticker-container">
      <p>{announcements[currentAnnouncement]}</p>
    </div>
  );
};


export default AnnouncementTicker;
