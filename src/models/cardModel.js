const { default: mongoose } = require("mongoose");


const cardSchema = new mongoose.Schema({
    cardNumber:String,
    cardType:String,
    costomerName:String,
    status : String,
    vision:String,
    costomerId:String
})


module.exports = mongoose.model("Card", cardSchema)