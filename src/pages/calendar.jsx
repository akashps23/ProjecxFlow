import { message } from "antd";
import Popover from "../components/calendar/Popover";
import Day from "../components/calendar/day";
import Events from "../components/calendar/Events";
import "../styles/calendar.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const currentDate = new Date();
const currentMonth = months[currentDate.getMonth()];
const currentYear = currentDate.getFullYear();

const Calendar = () => {
  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);
  const [week1, setWeek1] = useState([]);
  const [week2, setWeek2] = useState([]);
  const [week3, setWeek3] = useState([]);
  const [week4, setWeek4] = useState([]);
  const [week5, setWeek5] = useState([]);
  const [week6, setWeek6] = useState([]);
  const [events, setEvents] = useState(null);
  const [eventsOfThisMonth, setEventsOfThisMonth] = useState(null);
  const [showPopover, setShowPopover] = useState(false);
  const [clickedDate, setClickedDate] = useState("");
  const findEventsOfThisMonth = (events, month) => {
    if(!events || !month) return
    const filteredEvents = events.filter(event => {
      const m = event.date.split('/')[1];
      let temp = months.indexOf(month) + 1;
      let monthFiltered = temp < 10 ? "0" + temp : temp
      return m === monthFiltered;
    });
    if(filteredEvents) setEventsOfThisMonth(filteredEvents);
  };
  const getEvents = async () => {
    try {
      const response = await axios.get(
        `http://localhost:9014/api/v1/user/events/${localStorage.getItem("projectId")}`,);
      if (response.data.length!==0) {
        setEvents(response.data);
        findEventsOfThisMonth(response.data, month)
        message.success("retrieved successfully");
      }else setEvents([]);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  
  const updateCalendar = (month, year) => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    let days = [];
    for (let i = 0; i < firstDay; i++) days.push(0);

    for (let i = 1; i <= daysInMonth; i++) days.push(i);

    setWeek1(days.slice(0, 7));
    setWeek2(days.slice(7, 14));
    setWeek3(days.slice(14, 21));
    setWeek4(days.slice(21, 28));
    setWeek5(days.slice(28, 35));
    setWeek6(days.slice(35));
  };
  // update calendar on load
  useEffect(() => {
    updateCalendar(currentDate.getMonth(), currentDate.getFullYear());
    getEvents();
  }, []);

  const handlePreviousMonth = () => {
    let newMonthIndex = months.indexOf(month) - 1;
    let newYear = year;
    if (month === "January") {
      newMonthIndex = months.indexOf("December");
      newYear = year - 1;
    }
    setMonth(months[newMonthIndex]);
    setYear(newYear);
    findEventsOfThisMonth(events, months[newMonthIndex])
    updateCalendar(newMonthIndex, newYear);
  };

  const handleNextMonth = () => {
    let newMonthIndex = months.indexOf(month) + 1;
    let newYear = year;
    if (month === "December") {
      newMonthIndex = months.indexOf("January");
      newYear = year + 1;
    }
    setMonth(months[newMonthIndex]);
    setYear(newYear);
    findEventsOfThisMonth(events, months[newMonthIndex])
    updateCalendar(newMonthIndex, newYear);
  };
  const handleClick = (day) => {
    const date = day.target.innerHTML;
    let m = months.indexOf(month) + 1;
    if (!date || date === "") return;
    const clickedDate =
      (date < 10 ? "0" + date : date) +
      "/" +
      (m < 10 ? "0" + m : m) +
      "/" +
      year;

    setClickedDate(clickedDate);
    setShowPopover(true);
  };

  return (
    <div className="calendar_section">
      <div id="container">
        <div id="header">
          <div id="monthDisplay">
            {month} {year}
          </div>
          <div id="buttonContainer">
            <button id="backButton" onClick={handlePreviousMonth}>
              Back
            </button>
            <button id="nextButton" onClick={handleNextMonth}>
              Next
            </button>
          </div>
        </div>
        <div id="weekdays">
          <div className="weekday">Sun</div>
          <div className="weekday">Mon</div>
          <div className="weekday">Tue</div>
          <div className="weekday">Wed</div>
          <div className="weekday">Thu</div>
          <div className="weekday">Fri</div>
          <div className="weekday">Sat</div>
        </div>
        <div className="week1">
          {week1.map((day, index) => (
            <Day day={day} key={index} handleClick={handleClick} />
          ))}
        </div>
        <div className="week2">
          {week2.map((day, index) => (
            <Day day={day} key={index} handleClick={handleClick} />
          ))}
        </div>
        <div className="week3">
          {week3.map((day, index) => (
            <Day day={day} key={index} handleClick={handleClick} />
          ))}
        </div>
        <div className="week4">
          {week4.map((day, index) => (
            <Day day={day} key={index} handleClick={handleClick} />
          ))}
        </div>
        <div className="week5">
          {week5.map((day, index) => (
            <Day day={day} key={index} handleClick={handleClick} />
          ))}
        </div>
        <div className="week6">
          {week6.map((day, index) => (
            <Day day={day} key={index} handleClick={handleClick} />
          ))}
        </div>
      </div>
      <div className="events" style={{display:'flex', flexDirection:'column', gap:'2rem'}}>
        <h2>Events of the month</h2>
        <div id="buttonContainer">
            <button id="backButton" onClick={getEvents}>
              Refresh events
            </button>
            <button id="nextButton">
              <Link to="/teammembers">
              Go Back
              </Link>
            </button>
        </div>
        <div className="events_component">
            {
  eventsOfThisMonth
    ? eventsOfThisMonth.length !== 0
      ? eventsOfThisMonth?.map((event, index) => (
          <Events key={index} date={event.date} title={event.title} id={event._id} />
        ))
      : "No events to show"
    : "Loading..."
}

            </div>
      </div>
      <Popover
        showPopover={showPopover}
        clickedDate={clickedDate}
        setShowPopover={setShowPopover}
      />
    </div>
  );
};

export default Calendar;