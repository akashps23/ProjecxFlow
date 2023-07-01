const eventModel = require('../models/eventmodel');

const calendargetAllEvents = async (req, res) => {
    try {
      const events = await eventModel.find();
      res.json(events);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  }




  const calendarcreateEvent = async (req, res) => {
    try {
      const { date, title } = req.body;
      console.log(req.body)
      const newEvent = new eventModel({ date, title });
      const savedEvent = await newEvent.save();
      console.log(savedEvent)
      res.status(201).json(savedEvent);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  }

  const calendardeleteEvent = async (req, res) => {
    try {
      const eventId = req.params.id;
      await eventModel.findByIdAndDelete(eventId);
      res.sendStatus(204);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  }
  


  

// Routes

module.exports = {calendarcreateEvent,calendardeleteEvent,calendargetAllEvents}