const { default: mongoose } = require("mongoose");

const authorSchema = new mongoose.Schema({
    authorName:Sting,
	age:Number,
	address:String,
    rating: Number

})

module.exports = mongoose.model("newAuthor",authorSchema)