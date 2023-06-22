const express = require('express')
const { loginstudentController, loginguideController, logincordinatorController, signupstudentController, signupguideController , signupcordinatorController , authstudentController , authguideController , authcordinatorController } = require('../controllers/usercontrol')
const {teamaddcontroller}  = require('../controllers/teamcontrol')
const authMiddleware = require("../middleware/authmiddleware")


const router = express.Router()


//routes
//loginpost
router.post('/studentlogin',loginstudentController)
router.post('/guidelogin',loginguideController)
router.post('/cordinatorlogin',logincordinatorController)




//signup post
router.post('/studentsignup',signupstudentController)
router.post('/guidesignup',signupguideController)
router.post('/cordinatorsignup',signupcordinatorController)


router.post('/getStudentData',authMiddleware, authstudentController)
router.post('/getGuideData',authMiddleware, authguideController)
router.post('/getCordinatorData',authMiddleware, authcordinatorController)


router.post('/addteammembers',teamaddcontroller)


module.exports=router