const { default: mongoose } = require("mongoose");
const ObjectId = mongoose.Types.ObjectId
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
    },
    isHardCover:{
        type:Boolean,
        default:false
    }
})


module.exports = mongoose.model("newBook1", bookSchema)