const express = require('express');
const app = express();
const projectModel = require('../models/projectmodel');
const studentModel = require('../models/studentmodel');
const guideModel = require('../models/guidemodel')
const coordinatorModel = require('../models/cordinatormodel')
const teamModel = require('../models/teammodel')

const deletestudentController = async (req,res)=> {
    try {
        const user = await studentModel.findOneAndDelete({email:req.body.useremail})
        if(!user)
        {
            return res.status(204).send({message:"user not found",success:false})

        }
        
        res.status(200).send({message:'Student Deleted successfully', success: true})

        
    } catch (error) {
        console.log(error)
        res.status(500).send({success:false, message:`deletion error ${error.message}`})
    
    }
    
  
}

const deleteguideController = async (req,res)=> {
    try {
        const user = await guideModel.findOneAndDelete({email:req.body.useremail})
        if(!user)
        {
            return res.status(204).send({message:"user not found",success:false})

        }
        
        res.status(200).send({message:'Guide Deleted successfully', success: true})

        
    } catch (error) {
        console.log(error)
        res.status(500).send({success:false, message:`deletion error ${error.message}`})
    
    }
    
  
}

const deletecoordinatorController = async (req,res)=> {
    try {
        const user = await coordinatorModel.findOneAndDelete({email:req.body.useremail})
        if(!user)
        {
            return res.status(204).send({message:"user not found",success:false})

        }
        
        res.status(200).send({message:'Coordinator Deleted successfully', success: true})

        
    } catch (error) {
        console.log(error)
        res.status(500).send({success:false, message:`deletion error ${error.message}`})
    
    }
    
  
}

module.exports={deletestudentController,deleteguideController,deletecoordinatorController}