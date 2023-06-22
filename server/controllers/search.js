const express = require('express');
const app=express()
//const abstractModel = require('../models/abstractmodel')

const studentModel = require('../models/studentmodel')

const searchcontroller = async (req,res)=> {
  try {
    const user = await studentModel.findOne({email:req.body.searchQuery})
    if(!user)
        {
            return res.status(200).send({message:"user not found",success:false})

        }
        res.status(200).send({message:'Search successful', success: true})
  }
  catch (error) {
    console.log(error)
    res.status(500).send({success:false, message:`signup error ${error.message}`})

}
}

module.exports= {searchcontroller}