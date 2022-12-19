const { default: mongoose } = require("mongoose");


const bookSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true,
        trim : true
    },
    author_id :{
        type : Number,
        require:true
    },
    price : Number,
    ratings:String
},{timestamps:true})


module.exports = mongoose.model("NewBook",bookSchema)