const express = require('express');
const app = express();
const projectModel = require('../models/projectmodel');
const studentModel = require('../models/studentmodel');
const guideModel = require('../models/guidemodel')
const coordinatorModel = require('../models/cordinatormodel')
const teamModel = require('../models/teammodel')

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





// Assuming teamModel is an array of team objects with coordinator and project properties

const getProjectsByCoordinatorId = async (req, res) => {
  try {
    const { coordinatorId } = req.query;

    // Find teams that have the specified coordinator ID
    const teams = await teamModel.find({ coordinator: coordinatorId });

    // Extract the title, year, and type properties from the teams
    const projects = teams.map((team) => ({
      title: team.title,
      year: team.year,
      type: team.type,
    }));
    console.log(projects)

    res.status(200).json({ projects, message: 'Listing successful', success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};




const getProjectsByGuideId = async (req, res) => {
  try {
    const { guideId } = req.query;

    // Find teams that have the specified coordinator ID
    const teams = await teamModel.find({ guide: guideId });

    // Extract the title, year, and type properties from the teams
    const projects = teams.map((team) => ({
      title: team.title,
      year: team.year,
      type: team.type,
    }));
    console.log(projects)

    res.status(200).json({ projects, message: 'Listing successful', success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};




















// Controller function to fetch specific details of all students
const liststudentController = async (req, res) => {
  try {
    const students = await studentModel.find({}, 'name email phoneno  regno admno sem dept rollno college');
    res.status(200).json({ students, message: 'Listing successful', success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};


const listguideController = async (req, res) => {
  try {
    const guides = await guideModel.find({}, 'name email phoneno fid dept college');
    res.status(200).json({ guides, message: 'Listing successful', success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};


const listcoordinatorController = async (req, res) => {
  try {
    const coordinators = await coordinatorModel.find({}, 'name email phoneno fid dept college');
    res.status(200).json({ coordinators, message: 'Listing successful', success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};


const listprojectController = async (req, res) => {
  try {
    const projects = await projectModel.find({}, 'title type year');
    console.log(projects)
    res.status(200).json({ projects, message: 'Listing successful', success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};







module.exports = { listminiController,listmainController,liststudentController,listguideController,listcoordinatorController,listprojectController,getProjectsByCoordinatorId,getProjectsByGuideId };


