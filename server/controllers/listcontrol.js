const express = require('express');
const app = express();
const projectModel = require('../models/projectmodel');

const listmainController = (req, res) => {
  projectModel.find({ type: 'Main Project', title: { $exists: true }, year: { $exists: true } })
  .select('_id title year')
  .then((projects) => {
    console.log(projects);
    res.status(200).json({ projects, message: 'Listing successful', success: true });
  })
  .catch((error) => {
    res.status(500).json({ error: 'Error fetching projects' });
  });

    res.setHeader('Cache-Control', 'no-store');

};




const listminiController = (req, res) => {
  projectModel.find({ type: 'Mini Project', title: { $exists: true }, year: { $exists: true } })
  .select('_id title year')
  .then((projects) => {
    console.log(projects);
    res.status(200).json({ projects, message: 'Listing successful', success: true });
  })
  .catch((error) => {
    res.status(500).json({ error: 'Error fetching projects' });
  });

    res.setHeader('Cache-Control', 'no-store');

};

module.exports = { listminiController,listmainController };
