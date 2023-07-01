const express = require('express')
const { loginstudentController, loginguideController, logincordinatorController, signupstudentController, signupguideController , signupcordinatorController , authstudentController , authguideController , authcordinatorController , loginadminController } = require('../controllers/usercontrol')
const {teamaddcontroller}  = require('../controllers/teamcontrol')
const {searchController} = require('../controllers/search')
const {calendargetAllEvents,calendardeleteEvent,calendarcreateEvent} =require('../controllers/calendar')
const {forgotpasswordstudentController,forgotpasswordguideController,forgotpasswordcoordinatorController} = require('../controllers/passwordcontrol')
const authmiddleware = require('../middleware/authmiddleware')
const { listmainController, listminiController, liststudentController,listguideController,listcoordinatorController,listprojectController,getProjectsByCoordinatorId,getProjectsByGuideId } = require('../controllers/listcontrol')



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

router.post('/events', calendargetAllEvents);
router.post('/events', calendarcreateEvent);
router.post('/events/:id', calendardeleteEvent);

router.get('/projectmain', listmainController)
router.get('/projectmini', listminiController)
router.get('/studentlist',liststudentController)
router.get('/guidelist',listguideController)
router.get('/coordinatorlist',listcoordinatorController)
router.get('/projectlist',listprojectController)


router.get('/events', calendargetAllEvents)
router.post('/events', calendarcreateEvent);
router.delete('/events/:date', calendardeleteEvent);

router.get('/projects', getProjectsByCoordinatorId)
router.get('/guideprojects', getProjectsByGuideId)

module.exports=router