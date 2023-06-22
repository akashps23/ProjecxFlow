const mongoose=require ('mongoose')

const projectSchema=new mongoose.Schema({
    abstract:{
        type:String,
        required:[false]
    },
    diary:{
        type:String,
        required:[false]
    },
    srs:{
        type:String,
        required:[false]
    },
    sdd:{
        type:String,
        required:[false]
    },
    report:{
        type:String,
        required:[false]
    },
    ppt:{
        type:String,
        required:[false]
    },
    implementation:{
        type:String,
        required:[false]
    },
    year:{
        type:Number,
        required:[true]
    }

},{timestamps:true});

const Project = mongoose.model("project", projectSchema);

module.exports = Project;