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
  const [eventTitle, setEventTitle] = useState('');
  const [eventTitleError, setEventTitleError] = useState(false);

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
  };

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

    const calendarDays = [];

    for (let i = 1; i <= paddingDays + daysInMonth; i++) {
      const dayString = `${month + 1}/${i - paddingDays}/${year}`;

      if (i > paddingDays) {
        const eventForDay = events.find((event) => event.date === dayString);

        calendarDays.push(
          <div
            className={`day${eventForDay ? ' event' : ''}`}
            key={i}
            onClick={() => openModal(dayString)}
          >
            <span className="day">{i - paddingDays}</span>
            {eventForDay && <span className="event-dot"></span>}
          </div>
        );
      } else {
        calendarDays.push(
          <div className="empty-day" key={i}>
            <span className="day-placeholder"></span>
          </div>
        );
      }
    }

    return calendarDays;
  };

  return (
    <div className="calendar">
      <div id="header">
        <button onClick={() => setNav(nav - 1)}>Previous</button>
        <h1>Calendar</h1>
        <button onClick={() => setNav(nav + 1)}>Next</button>
      </div>

      <div id="container">
        <div id="weekdays">
          {weekdays.map((weekday) => (
            <div className="weekday" key={weekday}>
              {weekday}
            </div>
          ))}
        </div>
        <div id="calendar">{renderCalendar()}</div>
      </div>

      <div id="newEventModal" className={`modal${newEventModalVisible ? ' visible' : ''}`}>
        <div className="modal-content">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <h2>New Event</h2>
          <input
            type="text"
            id="eventTitleInput"
            placeholder="Event title"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
          />
          {eventTitleError && <p className="error">Please enter an event title</p>}
          <button id="saveButton" onClick={saveEvent}>
            Save
          </button>
          <button id="cancelButton" onClick={closeModal}>
            Cancel
          </button>
        </div>
      </div>

      <div id="deleteEventModal" className={`modal${deleteModalVisible ? ' visible' : ''}`}>
        <div className="modal-content">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <h2>Delete Event</h2>
          <p id="eventText">{clickedEvent}</p>
          <button id="deleteButton" onClick={deleteEvent}>
            Delete
          </button>
          <button id="cancelButton" onClick={closeModal}>
            Cancel
          </button>
        </div>
      </div>

      <div id="modalBackDrop"></div>
    </div>
  );
};

export default Calendar;
