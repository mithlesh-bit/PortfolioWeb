const mongoose=require('mongoose')

const saccountSchema=mongoose.Schema({
    
        name:String,
        idname:String,
        url:String,
        image:String
   
})

module.exports=mongoose.model('socialdbs',saccountSchema)