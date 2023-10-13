const express = require('express');
const app = express();
const ejs = require('ejs')
const routes = require("./routes/routes");
const mongoose = require('mongoose');
const count = require('./models/slideMode')
const slideSchema = require('./models/slideMode')
const certiSchema = require('./models/certiModel')
const saccountSchema = require('./models/accountModel')
const addid = require('./models/imodel')
const linkSchema = require('./models/linkmodel')

const http = require('http');
const server = http.createServer(app);
const socketIO = require('socket.io');
const io = socketIO(server);




// const { Socket } = require('socket.io/dist/socket');



app.use('', routes)
app.use('/static', express.static("public"))

app.set("view engine", 'ejs')
app.set('views', 'views')



// database connectivity 
const main = async () => {
    await mongoose.connect("mongodb+srv://mithlesh:1234@cluster0.tnbojkw.mongodb.net/node");

    // linkedine data
    // await linkSchema.create({
    //     "name": "mithlesh rawte",
    //     "l_id": "mithlesh-rawte-3297461b7",
    //     "l_url": `https://www.linkedin.com/in/mithlesh-rawte-3297461b7`
    // });



    // imodel ka hai
    // await addid.create({
    //     userid:"mithlesh72_",
    //     pass:2612,
    //     iurl:"https://www.instagram.com/mithlesh72_/"

    // })

    // social account schema
    //    await saccountSchema.create(
    //    {
    //         name:"LINKEDIN",
    //         idname:"Mithlesh Rawte",
    //         url:"https://www.linkedin.com/in/mithlesh-rawte-3297461b7",
    //         image:"/static/images/linkedin.png"
    //     },{
    //         name:"INSTAGRAM",
    //         idname:"@mithlesh72_",
    //         url:"https://www.instagram.com/mithlesh72_/",
    //         image:"/static/images/insta.png"
    //     },
    // {
    //     name:"GIT-HUB",
    //     idname:"mithlesh-bit",
    //     url:"https://github.com/mithlesh-bit",
    //     image:"/static/images/git.png"
    // }

    // )

    // certificate schema...................
    // await certiSchema.create({
    //     title:"GOOGLE BARD",
    //     describe:" ",
    //     url:"/static/images/bard.png"
    // }
    // {
    //     title:"IIT BHU",
    //     describe:" hmm thanos just wanted to save earth, and we are nothing but an truble who realive the past",
    //     url:"/static/images/slider1.jpg"
    // },{
    //     title:"TEACHNOOK ",
    //     describe:" hmm thanos just wanted to save earth, and we are nothing but an truble who realive the past",
    //     url:"/static/images/slider1.jpg"
    // },
    // )

    // slider schema....................................
    //     await certiSchema.create({
    //         head:"MODERN SPIDY",
    //         subhead:" hmm thanos just wanted to save earth, and we are nothing but an truble who realive the past",
    //         imageurl:"/static/images/slider1.jpg"
    //     },
    //     {
    //         head:"THE PEACE OF SHIT",
    //         subhead:" nezuka channnnn.... thander breathing first form",
    //         imageurl:"/static/images/slider3.jpg"
    //     },{
    //         head:"ZENITSU",
    //         subhead:" hmm thanos just wanted to save earth, and we are nothing but an truble who realive the past",
    //         imageurl:"/static/images/slider1.jpg"
    //     }
    // )

    // navebar Schema.............
    // Details.create({
    //     tital:"here i am",
    //     myurl:"www.linkedin.com/in/mithlesh-rawte-3297461b7",
    //     links:[{
    //         lable:"HOME",
    //         url:"/"
    //     },
    //     {
    //         lable:"service",
    //         url:"/setvices"
    //     },
    //     {
    //         lable:"contact",
    //         url:"/contacts"
    //     },
    //     {
    //         lable:"socialAccounts",
    //         url:"/saccount"
    //     },
    // ]

    // })
}

main();




io.on('connection', (socketIO) => {
    console.log("connected...");

    socketIO.on('message', (msg) => {
        socketIO.broadcast.emit('message', msg);
    });

    socketIO.on('new-user-join', (name) => {
        const msg = {
            user: '',
            message: `${name} joined the chat`,
        };
        socketIO.broadcast.emit('message', msg);
    });
});


server.listen(process.env.PORT | 5000, () => {
    console.log("server started");
})






