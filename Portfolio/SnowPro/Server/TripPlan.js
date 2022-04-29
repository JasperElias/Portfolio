const mongoose = require('mongoose');

const TripPlanSchema = new mongoose.Schema({
    username:String,
    dateTime:String,
    location:String,
    snowType:String,
    aspect:String,
    snowpackDiscussion:String,
    weatherForcast:String,
    travelPlan:String,
    emergencyContact:String
})

mongoose.model("TripPlan", TripPlanSchema);