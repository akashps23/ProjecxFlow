const mongoose=require ('mongoose')

const adminSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,'Username should be present']
    },
    password:{
        type:String,
        required:[true,'Password should be present'],
    }


},{timestamps:true});

const Admin = mongoose.model("admin", adminSchema);

module.exports = Admin;