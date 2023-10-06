const mongoose=require ('mongoose')
const studentSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String
});

module.exports=mongoose.model("Student",studentSchema);

