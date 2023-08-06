const  mongoose=require('mongoose')

const certiSchema=mongoose.Schema({
    title:String,
    describe:String,
    url:String
},);

module.exports=mongoose.model('certidb',certiSchema)