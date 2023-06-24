const express = require('express');
const projectModel = require('../models/projectmodel');

const searchController = async (req, res) => {
  try {
    const searchQuery = req.body.searchQuery;

    // Perform the search using the searchQuery
    const projects = await projectModel.find({ title: { $regex: searchQuery, $options: 'i' } });
    // Generate the cards based on the search results
    const cards = projects.map((project) => ({
      id: project._id,
      title: project.title ? project.title : 'Title not found', // Handle the case where the title property is missing or undefined
      // Add other relevant properties from the project model
    }));
    console.log(cards)
    res.status(200).send({ success: true, results: cards });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: `Search error: ${error.message}` });
  }
};

module.exports = { searchController };
