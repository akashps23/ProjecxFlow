import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/calendar.css';

const Calendar = () => {
  const [nav, setNav] = useState(0);
  const [clicked, setClicked] = useState(null);
  const [events, setEvents] = useState([]);
  const [newEventModalVisible, setNewEventModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [clickedEvent, setClickedEvent] = useState('');
  const [eventTitle, setEventTitle] = useState(''); // New state variable

  useEffect(() => {
    loadEvents();
  }, []);

  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const openModal = (date) => {
    setClicked(date);

    const eventForDay = events.find((e) => e.date === date);

    if (eventForDay) {
      setClickedEvent(eventForDay.title);
      setDeleteModalVisible(true);
    } else {
      setNewEventModalVisible(true);
    }
  };

  const loadEvents = async () => {
    try {
      const response = await axios.get('http://localhost:9014/api/v1/user/events');
      setEvents(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const saveEvent = async () => {
    if (eventTitle) {
      setEventTitleError(false);

      const newEvent = {
        date: clicked,
        title: eventTitle,
      };

      try {
        const response = await axios.post('http://localhost:9014/api/v1/user/events', newEvent);
        setEvents([...events, response.data]);
        closeModal();
      } catch (error) {
        console.error(error);
      }
    } else {
      setEventTitleError(true);
    }

  const deleteEvent = async () => {
    try {
      await axios.delete(`http://localhost:9014/api/v1/user/events/${clicked}`);
      setEvents(events.filter((e) => e.date !== clicked));
      closeModal();
    } catch (error) {
      console.error(error);
    }
  };

  const closeModal = () => {
    setEventTitle('');
    setNewEventModalVisible(false);
    setDeleteModalVisible(false);
    setClicked(null);
  };

  const initButtons = () => {
    // Initialize button event handlers here
  };


    const renderCalendar = () => {
      const dt = new Date();
    
      if (nav !== 0) {
        dt.setMonth(new Date().getMonth() + nav);
      }
    
      const day = dt.getDate();
      const month = dt.getMonth();
      const year = dt.getFullYear();
    
      const firstDayOfMonth = new Date(year, month, 1);
      const daysInMonth = new Date(year, month + 1, 0).getDate();
    
      const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      });
      const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);

  return (
    <div className="calendar">
      {renderCalendar()}

      <div id="newEventModal" className={`modal${newEventModalVisible ? ' visible' : ''}`}>
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <h2>New Event</h2>
          <input
            type="text"
            id="eventTitleInput"
            placeholder="Event title"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)} // Update eventTitle value
          />
          <button id="saveButton" onClick={saveEvent}>Save</button>
          <button id="cancelButton" onClick={closeModal}>Cancel</button>
        </div>
      </div>

      <div id="deleteEventModal" className={`modal${deleteModalVisible ? ' visible' : ''}`}>
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <h2>Delete Event</h2>
          <p id="eventText">{clickedEvent}</p>
          <button id="deleteButton" onClick={deleteEvent}>Delete</button>
          <button id="cancelButton" onClick={closeModal}>Cancel</button>
        </div>
      </div>

      <div id="modalBackDrop"></div>
    </div>
  );
};
}
export default Calendar;
