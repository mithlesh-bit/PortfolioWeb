const mongoose=require('mongoose')

const slideSchema= mongoose.Schema({
    head:String,
    subhead:String,
    imageurl:String
});

module.exports= mongoose.model('sliderdb',slideSchema)