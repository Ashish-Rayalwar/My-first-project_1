const moment = require("moment/moment");
const { default: mongoose } = require("mongoose");
const { v4: uuidv4 } = require('uuid');
// const date = moment();
// const birtDate = date.format("DD-MM-YYYY")
const costomerSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    mobileNumber:{
        type : String,
        
        unique:true,
        validate: {
        validator: function(v) {
          return /^([0-9]{10}$)/.test(v);
        }},
        required: true
        
    },
    DOB:{
        type : String,
        required: true,
        trim: true,
    },
    email : String,
    address : String,
    costomerID : {
        type : String,
        unique:true,
       
    },
    status : String
})
module.exports = mongoose.model("Costomer", costomerSchema)