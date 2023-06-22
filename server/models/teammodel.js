const mongoose=require ('mongoose')

const teamSchema=new mongoose.Schema({
    guide:{
        type:String,
        required:[true]
    },
    member1:{
        type:String,
        required:[true],
        unique:true
    },
    member2:{
        type:String,
        required:[true],
        unique:true
    },
    member3:{
        type:String,
        required:[true],
        unique:true
    },
    member4:{
        type:String,
        required:[true],
        unique:true
    }


},{timestamps:true});

const Team = mongoose.model("team", teamSchema);

module.exports = Team;