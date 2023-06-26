const express = require('express');
const Event = require('../models/eventmodel');

const calendargetAllEvents = async (req, res) => {
    try {
      const events = await Event.find();
      res.json(events);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  }




  const calendarcreateEvent = async (req, res) => {
    try {
      const { date, title } = req.body;
      const newEvent = new Event({ date, title });
      const savedEvent = await newEvent.save();
      res.status(201).json(savedEvent);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  }

  const calendardeleteEvent = async (req, res) => {
    try {
      const eventId = req.params.id;
      await Event.findByIdAndDelete(eventId);
      res.sendStatus(204);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  }


// Routes

module.exports = {calendarcreateEvent,calendardeleteEvent,calendargetAllEvents}