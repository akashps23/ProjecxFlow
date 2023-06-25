const express = require('express')
const { loginstudentController, loginguideController, logincordinatorController, signupstudentController, signupguideController , signupcordinatorController , authstudentController , authguideController , authcordinatorController , loginadminController } = require('../controllers/usercontrol')
const {teamaddcontroller}  = require('../controllers/teamcontrol')
const {searchController} = require('../controllers/search')
const {forgotpasswordstudentController,forgotpasswordguideController,forgotpasswordcoordinatorController} = require('../controllers/passwordcontrol')
const authmiddleware = require('../middleware/authmiddleware')



const router = express.Router()

//routes
//loginpost

router.post('/studentlogin',loginstudentController)
router.post('/guidelogin',loginguideController)
router.post('/coordinatorlogin',logincordinatorController)




//signup post
router.post('/studentsignup',signupstudentController)
router.post('/guidesignup',signupguideController)
router.post('/coordinatorsignup',signupcordinatorController)


router.post('/getStudentData',authmiddleware, authstudentController)
router.post('/getGuideData',authmiddleware, authguideController)
router.post('/getCoordinatorData',authmiddleware, authcordinatorController)


router.post('/teamcreate',teamaddcontroller)
router.post('/adminlogin',loginadminController)
router.post('/search',searchController)


router.post('/forgotpasswordstudent',forgotpasswordstudentController)
router.post('/forgotpasswordguide',forgotpasswordguideController)
router.post('/forgotpasswordcoordinator',forgotpasswordcoordinatorController)

module.exports=router