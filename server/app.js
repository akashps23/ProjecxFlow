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
    console.log(`SERver running in port ${process.env.PORT} `.bgCyan.white );

});



























































/*const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(cors())
app.use(bodyParser.json()); // Parse JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

const path = require("path");
const dotenv = require("dotenv");
const root_dir = __dirname.split("src")[0];
dotenv.config({ path: path.join(root_dir, `.env`) });

function connect(){

    mongoose.set("strictQuery", true);
    mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("MongoDB Connected...");
      })
      .catch((err) => {
        console.log(err);
      });
}

app.post('/login', (req, res) => {
//   const User = mongoose.model("User", {username: String, password: String});
//   const user = new User({username : "milan", password: "password"})
//   user.save().then(() => console.log("added successfully"))
//   res.send("hello world")
console.log(req.body)
const username = req.body.userName
const password = req.body.password



if(username == "milan" && password == "milan"){
    res.status(200).json({"message" : "success"})
}
else{
    res.status(400).json({"message" : "failed"})
}
})


app.get("/user/:userid", (req, res) => {

})

app.get('/signup', (req, res) => {
  
    const User = mongoose.model("User", {username: String, password: String});
    const user = new User({username : "milan", password: "password"})
    user.save().then(() => console.log("added successfully"))
    res.send("hello world")
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  connect()
})


*/