const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    dateOfBirth:String,
    password:String
})

mongoose.model("user", UserSchema);