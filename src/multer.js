const multer=require('multer')
const express=require("express")
const app=express()


const upload=  multer({
    storage : multer.diskStorage({
    destination: function(req,file,cd){
        cd(null,"./public/mult_img");
    },
    filename : async function(req,file,cd){
      await cd(null,file.fieldname+"-"+Date.now()+".png")
    }
    

})
}).single("image");


module.exports=upload
