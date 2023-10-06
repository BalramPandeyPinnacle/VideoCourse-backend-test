const mongoose=require ('mongoose')
const courseSchema=mongoose.Schema({
    courseTitle:String,
    courseDetails:String,
    teacherName:String,
    rating:String,
    price:String,
    mrp:String

});

module.exports=mongoose.model("Course",courseSchema);