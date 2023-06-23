const express = require('express')
const { loginstudentController, loginguideController, logincordinatorController, signupstudentController, signupguideController , signupcordinatorController , authstudentController , authguideController , authcordinatorController , loginadminController,signupadminController } = require('../controllers/usercontrol')
const {teamaddcontroller}  = require('../controllers/teamcontrol')
const {searchcontroller} =require('../controllers/search')
const authmiddleware = require('../middleware/authmiddleware')


const router = express.Router()


//routes
//loginpost
router.get('/',(req,res)=>{
    res.send("hello world");
});
router.post('/studentlogin',loginstudentController)
router.post('/guidelogin',loginguideController)
router.post('/cordinatorlogin',logincordinatorController)




//signup post
router.post('/studentsignup',signupstudentController)
router.post('/guidesignup',signupguideController)
router.post('/cordinatorsignup',signupcordinatorController)


router.post('/getStudentData',authmiddleware, authstudentController)
router.post('/getGuideData',authmiddleware, authguideController)
router.post('/getCordinatorData',authmiddleware, authcordinatorController)


router.post('/addteammembers',teamaddcontroller)
router.post('/adminlogin',loginadminController)
router.post('/adminsignup',signupadminController)
router.post('/search',searchcontroller)


module.exports=router