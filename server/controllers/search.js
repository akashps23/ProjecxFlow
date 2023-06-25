const express = require('express');
const projectModel = require('../models/projectmodel');

const searchController = async (req, res) => {
  try {
    const searchQuery = req.body.searchQuery;

    // Perform the search using the searchQuery
    const projects = await projectModel.find({ title: { $regex: searchQuery, $options: 'i' } });
    
    // Generate the cards based on the search results
    const cards = projects.map((project) => {
      if (!project || !project.title) {
        return {
          id: 'N/A',
          title: 'Title not found',
          // Add other relevant properties from the project model
        };
      }

      return {
        id: project._id,
        title: project.title,
        // Add other relevant properties from the project model
      };
    });

    console.log(cards);
    res.status(200).send({ success: true, results: cards });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: `Search error: ${error.message}` });
  }
};

module.exports = { searchController };
