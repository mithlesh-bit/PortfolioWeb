const express = require('express');
const { route } = require('express/lib/application')
const routes = express.Router()
const Details = require('../models/model')
const slideMode = require('../models/slideMode');
const certiModel = require('../models/certiModel');
const socialModel = require('../models/accountModel');
const upload = require('../multer');
const { render } = require('ejs');
const addid= require('../models/imodel')
const linkSchema=require('../models/linkmodel')
const msgschema=require('../models/msg')
const gtagsmodel=require('../models/gtagmodel')



routes.use(express.json());
routes.use(express.urlencoded({ extended: true }));


routes.get('/', async (req, resp) => {
    const values = await Details.find()
    // console.log(values);
    const slideData = await slideMode.find()
    resp.render("home", { values, slideData })
})



routes.post('/', upload,async(req,resp)=>{

    if (req.file && req.file.filename  &&  req.body.titleName) {
        const img_oc =  req.file.filename;
    const data=   req.body.titleName;
  const a= await Details.updateOne({_id:"64afee3477f0a3e277726647"}, { $set: {tital:data}})
  const b= await Details.updateOne({_id:"64afee3477f0a3e277726647"}, { $set: {myurl:`/static/mult_img/${img_oc}`}})
  console.log(a, b);
  resp.redirect('/');
    }
  
    if (req.body.sendername  &&  req.body.senderemail) {
        const cc=await msgschema.create({
            "name": req.body.sendername,
            "email": req.body.senderemail,
            "subject": req.body.sendersubject,
            "message": req.body.sendermsg
    })
    console.log(cc);
    resp.redirect('?success=true');
        
    }

})

routes.post('/gallery', async (req, resp) => {
    
    try {
   
        if (req.body.name && req.body.color) {
            const currentTime = new Date(); // Get the current date and time
            const ab = await gtagsmodel.create({
                "name": req.body.name,
                "color": req.body.color,
                "tag": req.body.message,
                "url":`https://www.instagram.com/${req.body.instaid}/`,
                "createdAt": currentTime
            });
            console.log(ab);
        }
        resp.redirect('/gallery');
    } catch (error) {
        console.error("Error creating data:", error);
        resp.status(500).send("Error creating data. Please try again later.");
    }
});


routes.get('/gallery', async (req, resp) => {
    const i = await gtagsmodel.find();
    resp.render("gallery",{i});
})

routes.get('/certificates', async (req, resp) => {
    const certidata = await certiModel.find()
    const values = await Details.find()
    resp.render("certificates", { values, certidata })
})

routes.get('/saccount', async (req, resp) => {
    const socialdata = await socialModel.find()
    const values = await Details.find()
    resp.render("saccount", { values, socialdata })
})

routes.get('/chat',(req, resp)=>{
    resp.render('chat')
})




module.exports = routes