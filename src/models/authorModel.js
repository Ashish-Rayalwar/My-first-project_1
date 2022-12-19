const { default: mongoose } = require("mongoose");


const authorSchema = new mongoose.Schema({
    author_name : {
        type : String,
        require : true,
        trim : true
    },
    author_id :{
        type : Number,
        require:true
    },
    age : Number,
    address:String
},{timestamps:true})


module.exports = mongoose.model("Author",authorSchema)