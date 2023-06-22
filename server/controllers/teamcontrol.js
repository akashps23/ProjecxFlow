const teamModel = require('../models/teammodel')
const guideModel = require('../models/guidemodel')
const studentModel = require('../models/studentmodel')


const teamaddcontroller = async (req,res)=> {
    try{
        const guide = await guideModel.findOne({email:req.body.guide})
        const member1 = await studentModel.findOne({email:req.body.member1})
        const member2 = await studentModel.findOne({email:req.body.member2})
        const member3 = await studentModel.findOne({email:req.body.member3})
        const member4 = await studentModel.findOne({email:req.body.member4})
        if(!guide)
        {
            return res.status(200).send({message:"user not found",success:false})

        }
        if(!member1)
        {
            return res.status(200).send({message:"user not found",success:false})

        }
        if(!member2)
        {
            return res.status(200).send({message:"user not found",success:false})

        }
        if(!member3)
        {
            return res.status(200).send({message:"user not found",success:false})

        }
        if(!member4)
        {
            return res.status(200).send({message:"user not found",success:false})

        }
        const newUser= new teamModel(req.body)
        await newUser.save()
        res.status(201).send({message:'Members added successfully',success:true});
    }
    catch(error)
    {
        console.log(error)
        res.status(500).send({success:false, message:`can't add ${error.message}`})
    }
}

module.exports ={teamaddcontroller};