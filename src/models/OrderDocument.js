const  mongoose  = require("mongoose");
const ObjectId = mongoose.Types.ObjectId
const orderSchema = new mongoose.Schema({
    userId :{
        type:ObjectId,
        ref : "User"
    },
productId :{
    type:ObjectId,
    ref : "Product"
},
amount : Number,
isFreeAppUser :{
    type:Boolean,
    default:false
},
date : String
})

module.exports = mongoose.model("Order", orderSchema)