const mongoose=require('mongoose')

const linkSchema= mongoose.Schema({
    l_id:String,
    l_url:String
});

module.exports=mongoose.model('linkedins',linkSchema)