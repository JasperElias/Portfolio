const mongoose = require('mongoose');

const ObservationSummarySchema = new mongoose.Schema({
    username:String,
    dateTime:String,
    intendedLocation:String,
})

const fieldObservationSchema = new mongoose.Schema({
    username:String,
    dateTime:String,
    fieldLocation:String,
    elevation:Number,
    aspect:String,
    
})

mongoose.model("fieldObservation", fieldObservationSchema);
mongoose.model("ObservationSummary", ObservationSummarySchema);
