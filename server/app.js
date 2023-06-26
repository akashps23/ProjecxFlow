const express = require('express')
const colors= require('colors')
const morgan = require('morgan')
const dotenv= require('dotenv');
const connectdb = require('./config/db');
const cors = require('cors');
const userroute = require('./routes/userroute');


//rest obj
const app = express()
// Enable CORS
app.use(cors());
//dotenv cofiguration
dotenv.config();
//mongodb connection

connectdb();




//middleware

app.use(express.json())
app.use(morgan('dev'))


//routes

// /*app.get("/",(req,res) => {
//     res.status(200).send({
//         message:"server running",  
//     });

// });*/



//listen
const port= 9014
app.listen(port,() =>{
   console.log(`SERver running in port ${port} `.bgCyan.white );
})

app.get('/',(req,res)=>{
    res.status(200).json({message:"Hello world"})
})
app.use('/api/v1/user', userroute);






