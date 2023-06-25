const express = require('express');
const app = express();
const studentModel = require('../models/studentmodel')
const guideModel = require('../models/guidemodel')
const cordinatorModel = require('../models/cordinatormodel')
const adminModel = require('../models/adminmodel')
require('dotenv').config();
const bcrypt = require('bcryptjs')
const jwt =require('jsonwebtoken');
const Student = require('../models/studentmodel');


const forgotpasswordstudentController = async (req,res)=> {
    try {
        const user = await studentModel.findOne({email:req.body.email})
        if(!user)
        {
            return res.status(404).send({message:"user not found",success:false})

        }
        if(req.body.answer!=user.answer)
        {
            return res.status(204).send({message:"Wrong answer",success:false})
        }
        else
        {
            const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn: "1d"});
            res.status(200).send({message:'Recovery Initiated', success: true, token:token})
        }
    }
    catch (error) {
        console.log(error)
        res.status(500).send({success:false, message:`recovery error ${error.message}`})
    
    }
}


const forgotpasswordguideController = async (req,res)=> {
    try {
        const user = await guideModel.findOne({email:req.body.email})
        if(!user)
        {
            return res.status(404).send({message:"user not found",success:false})

        }
        if(req.body.answer!=user.answer)
        {
            return res.status(204).send({message:"Wrong answer",success:false})
        }
        else
        {
            const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn: "1d"});
            res.status(200).send({message:'Recovery Initiated', success: true, token:token})
        }
    }
    catch (error) {
        console.log(error)
        res.status(500).send({success:false, message:`recovery error ${error.message}`})
    
    }
}


const forgotpasswordcoordinatorController = async (req,res)=> {
    try {
        const user = await cordinatorModel.findOne({email:req.body.email})
        if(!user)
        {
            return res.status(404).send({message:"user not found",success:false})

        }
        if(req.body.answer!=user.answer)
        {
            return res.status(204).send({message:"Wrong answer",success:false})
        }
        else
        {
            const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn: "1d"});
            res.status(200).send({message:'Recovery Initiated', success: true, token:token})
        }
    }
    catch (error) {
        console.log(error)
        res.status(500).send({success:false, message:`recovery error ${error.message}`})
    
    }
}


module.exports = {forgotpasswordstudentController,forgotpasswordguideController,forgotpasswordcoordinatorController}

