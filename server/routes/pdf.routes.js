const express = require('express')
const upload = require('../utils/multer');
const {uploadPdf}=require('../controllers/pdf');


const router = express.Router()


//routes
//loginpost
router.post('/', upload.single('pdf'),uploadPdf)
module.exports=router