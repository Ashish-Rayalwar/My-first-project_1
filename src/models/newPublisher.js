const { default: mongoose } = require("mongoose");
const ObjectId = mongoose.Types.ObjectId
const publisherSchema = new mongoose.Schema({
    
    name: String,
    headQuarter: Number,
    
})


module.exports = mongoose.model("newPublisher", publisherSchema)