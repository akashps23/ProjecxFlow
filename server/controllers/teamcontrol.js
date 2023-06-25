const teamModel = require('../models/teammodel')
const guideModel = require('../models/guidemodel')
const studentModel = require('../models/studentmodel')
const cordinatorModel = require('../models/cordinatormodel')


const teamaddcontroller = async (req, res) => {
    try {
      const coordinator = await cordinatorModel.findOne({ email: req.body.coordinator });
      const guide = await guideModel.findOne({ email: req.body.guide });
      const members = await studentModel.find({ email: { $in: [req.body.member1, req.body.member2, req.body.member3, req.body.member4] } });
  
      if (!coordinator) {
        return res.status(204).send({ message: "Coordinator not found", success: false });
      }
      if (!guide) {
        return res.status(204).send({ message: "Guide not found", success: false });
      }
      if (members.length !== 4) {
        return res.status(204).send({ message: "One or more members not found", success: false });
      }
  
      const newUser = new teamModel(req.body);
      await newUser.save();
      const token = jwt.sign({id:newUser._id},process.env.JWT_SECRET,{expiresIn: "1d"});
      res.status(200).send({message:'Team creation successful', success: true, token:token})
    } catch (error) {
      console.log(error);
      res.status(500).send({ success: false, message: `Failed to add members: ${error.message}` });
    }
  };





  



















  
  module.exports = { teamaddcontroller };
  
























