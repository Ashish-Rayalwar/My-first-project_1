const { default: mongoose } = require("mongoose");

const bookSchema = new mongoose.Schema({
    name:String,
    author:{
        type:ObjectId,
        ref : "newAuthor"
    },
    price:Number,
    ratings:Number,
    publisher:{
        type:ObjectId,
        ref : "newPublisher"
    }
})


module.exports = mongoose.model("newBook", bookSchema)