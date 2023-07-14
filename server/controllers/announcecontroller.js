const express = require('express');
const app=express();
const announcementModel = require('../models/announcementmodel');

const makeannouncementController = async (req,res)=> {
    console.log(req.body.announcement)
    console.log(req.body.date)
    try
    {
        const announce = new announcementModel(req.body);
        await announce.save()
        res.status(201).send({message:'Announced Successfully',success:true });
    }
    catch(error)
    {
        console.log(error);
        res.status(500).send({success:false ,message:`Failed to announce ${error.message}`});
    }
}


const showannouncementController = async (req, res) => {
    try {
      const announcements = await announcementModel.find({}, 'announcement date');
      res.status(200).json({ announcements, message: 'Listing successful', success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  };


module.exports = {makeannouncementController , showannouncementController};