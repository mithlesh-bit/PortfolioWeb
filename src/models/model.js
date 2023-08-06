const mongoose=require('mongoose')

const Details=mongoose.Schema({

    tital:String,
    myurl:String,
    links:[
        {
        lable:String,
        url:String
    },
],

});

module.exports=mongoose.model('details',Details);