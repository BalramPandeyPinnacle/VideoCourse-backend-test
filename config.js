const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://balrampandey:NxO18MOBKBZrgb2z@cluster0.sfcoegq.mongodb.net/Video-Course-Data-test02?retryWrites=true&w=majority')
.then(()=>{})
.catch(
    (err)=>{
        console.log(err)
    }
)