import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/calendar.css';

const Calendar = () => {
  const [nav, setNav] = useState(0);
  const [clicked, setClicked] = useState(null);
  const [events, setEvents] = useState([]);
  const [showNewEventModal, setShowNewEventModal] = useState(false);
  const [showDeleteEventModal, setShowDeleteEventModal] = useState(false);
  const [eventTitleInput, setEventTitleInput] = useState('');
  const [calendar, setCalendar] = useState([]);

  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const openModal = (date) => {
    console.log('Open modal clicked:', date);
    setClicked(date);

    const eventForDay = events.find((e) => e.date === date);

    if (eventForDay) {
      setShowDeleteEventModal(true);
    } else {
      setShowNewEventModal(true);
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
    if (eventTitleInput) {
      const newEvent = {
        date: clicked,
        title: eventTitleInput,
      };

      try {
        const response = await axios.post('http://localhost:9014/api/v1/user/events', newEvent);
        setEvents([...events, response.data]);
        closeModal();
      } catch (error) {
        console.error(error);
      }
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
    setShowNewEventModal(false);
    setShowDeleteEventModal(false);
    setEventTitleInput('');
    setClicked(null);
    loadEvents();
  };

  const handleNextClick = () => {
    setNav((prevNav) => prevNav + 1);
  };

  const handleBackClick = () => {
    setNav((prevNav) => prevNav - 1);
  };

  useEffect(() => {
    loadEvents();
  }, []);

  useEffect(() => {
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

    const newCalendar = [];

    for (let i = 1; i <= paddingDays + daysInMonth; i++) {
      const daySquare = {
        day: i - paddingDays,
        date: `${month + 1}/${i - paddingDays}/${year}`,
      };

      if (i > paddingDays) {
        const eventForDay = events.find((e) => e.date === daySquare.date);

        if (i - paddingDays === day && nav === 0) {
          daySquare.currentDay = true;
        }

        if (eventForDay) {
          daySquare.event = eventForDay.title;
        }

        newCalendar.push(daySquare);
      } else {
        newCalendar.push(null);
      }
    }

    setCalendar(newCalendar);
  }, [events, nav]);

  return (
    <div id="container">
      <div id="header">
        <div id="monthDisplay"></div>
        <div>
          <button id="backButton" onClick={handleBackClick}>
            Back
          </button>
          <button id="nextButton" onClick={handleNextClick}>
            Next
          </button>
        </div>
      </div>

      <div id="weekdays">
        <div>Sunday</div>
        <div>Monday</div>
        <div>Tuesday</div>
        <div>Wednesday</div>
        <div>Thursday</div>
        <div>Friday</div>
        <div>Saturday</div>
      </div>

      <div id="calendar">
        {calendar.map((daySquare, index) => (
          <div
            key={index}
            className={`day ${daySquare ? '' : 'padding'} ${daySquare?.currentDay ? 'current-day' : ''}`}
            onClick={() => daySquare && openModal(daySquare.date)}
          >
            {daySquare && (
              <>
                <div>{daySquare.day}</div>
                {daySquare.event && <div className="event">{daySquare.event}</div>}
              </>
            )}
          </div>
        ))}
      </div>

      {showNewEventModal && (
        <div id="newEventModal">
          <h2>New Event</h2>

          <input
            id="eventTitleInput"
            placeholder="Event Title"
            value={eventTitleInput}
            onChange={(e) => setEventTitleInput(e.target.value)}
          />

          <button id="saveButton" onClick={saveEvent}>
            Save
          </button>
          <button id="cancelButton" onClick={closeModal}>
            Cancel
          </button>
        </div>
      )}

      {showDeleteEventModal && (
        <div id="deleteEventModal">
          <h2>Event</h2>

          <p id="eventText"></p>

          <button id="deleteButton" onClick={deleteEvent}>
            Delete
          </button>
          <button id="closeButton" onClick={closeModal}>
            Close
          </button>
        </div>
      )}

      <div id="modalBackDrop"></div>
    </div>
  );
};

export default Calendar;
