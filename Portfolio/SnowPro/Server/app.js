const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//encryption used for password store and transfer
/*not installed*///const bcrypt = require('bcrypt');

//requiring each schema
require('./User');
//require('./Observation');
require('./TripPlan');

app.use(bodyParser.json())

const User = mongoose.model("user");
//const Observation = mongoose.model("fieldObservation");
const TripPlan = mongoose.model("TripPlan");

//mongoDB
const mongoURI = "mongodb+srv://snow-pro-admin:mgR1TvO5TYGhScvC@snowpro.rl3yk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//connecting to database
mongoose.connect(mongoURI, {
    useNewUrlParser:true,
    useUnifiedTopology:true

})

mongoose.connection.on("connected", () => {
    console.log("connected to mongo")
})

mongoose.connection.on("error", (err) => {
    console.log("error", err)
})

app.get('/', (req,res) => {
    res.send("welcome to node js")
});

app.post('/send',(req,res) => {
    res.send("posted")
});

app.post('/observationSummary',(req,res) => {
    console.log(req.body)
    res.send("posted observation summary")
})

app.post('/tripPlan-save',(req,res) => {
    const tripPlan = new TripPlan({
        username:req.body.username,
        dateTime:req.body.dateTime,
        location:req.body.location,
        snowType:req.body.snowType,
        aspect:req.body.aspect,
        snowpackDiscussion:req.body.snowpackDiscussion,
        weatherForcast:req.body.weatherForcast,
        travelPlan:req.body.travelPlan,
        emergencyContact:req.body.emergencyContact
    })
    tripPlan.save()
        .then(data=>{
            console.log(data)
            res.send("success posted trip plan")
        }).catch(err=> {
            console.log(err)
        })
    
})

app.post('/signup',(req,res) => {
    const user = new User({
        name:req.body.name,
        email:req.body.email,
        dateOfBirth:req.body.dateOfBirth,
        password:req.body.password
    })
    user.save()
        .then(data=>{
            console.log(data)
            res.send("success posted user")
        }).catch(err=> {
            console.log(err)
        })
    
})

//user_login 
/*app.post('/user-login', (req,res) => {
    let {email, password} = req.body;
    email = email.trim();
    password = password.trim();

    if (email == "" || password == "") {
        res.json({
            status: "FAILED",
            message: "Empty credentials supplied"
        })
    } else {
        //check if user exists
        User.find({ email })
        .then((data) => {
            if (data.length) {
                //user exists
                const hashedPassword = data[0].password;
                bcrypt
                    .compare(password, hashedPassword)
                    .then(result => {
                        if (result){
                        //password correct
                            res.json({
                                status: "SUCESSS",
                                message: "Signin successful",
                                data: data
                            })
                        } else {
                            res.json({
                                status: "FAILED",
                                message: "Invalid password entered!"
                            })
                        }
                    })
                    .catch(err => {
                        res.json({
                            status: "FAILED",
                            message: "Error occured while comparing passwords"
                        })
                    })
            } else {
                res.json({
                    status: "FAILED",
                    message: "Invalid credentials"
                })
            }
        })
        .catch(err => {
            res.json({
                status: "FAILED",
                message: "An error occured while checking for existing user"
            })
        })
    }


})
*/
//run server
app.listen(3000, () => {
    console.log("server running")
});

