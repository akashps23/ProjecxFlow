const express = require('express')
const colors= require('colors')
const morgan = require('morgan')
const dotenv= require('dotenv');
const connectdb = require('./config/db');
const cors = require('cors');

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

/*app.get("/",(req,res) => {
    res.status(200).send({
        message:"server running",  
    });

});*/

app.use('/api/v1/user',require('./routes/userroute'))

//listen
const port= process.env.PORT
app.listen(port,() =>{
    console.log(`SERver running in port ${port} `.bgCyan.white );

});







// const mongoose = require('mongoose');
// const path = require("path");
// /*const dotenv = require("dotenv");
// const root_dir = __dirname.split("server")[0];
// dotenv.config({ path: path.join(root_dir, `.env`) });
// const connectionString = process.env.MONGO_URI;
// require('dotenv').config()*/

// const connectionString = 'mongodb+srv://user:test@cluster0.qzousud.mongodb.net/?retryWrites=true&w=majority'


// function connectdb()
// {
// mongoose.connect(connectionString, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
//   .then(() => {
//     console.log('Connected to MongoDB successfully');
//     // Continue with your application logic
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
//     // Handle the error appropriately
//   })
// }


// module.exports=connectdb;