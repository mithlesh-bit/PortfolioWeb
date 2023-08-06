const mongoose= require('mongoose')

const addid= mongoose.Schema({
    userid:String,
    iurl:String
})

module.exports=mongoose.model('instas',addid)