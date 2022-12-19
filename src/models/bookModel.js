const  mongoose  = require("mongoose")

const bookSchema = new mongoose.Schema({
        bookName : {
            type : String,
            require : true
            
        },
        ISBN : {
            type : String,
            require:true,
            unique : true

        },
        author : String,
        tags : [String],
        year : Number,
        isPublished : {
            type : Boolean,
            default :false
        },
        prices:{
            indianPrice : String,
            europeanPrice : String,
            japanPrice : String
        },
        pages: Number,
        sales:{
            type:Number,
            default : 0
        },
        completionDate : Date,
        summary:mongoose.Schema.Types.Mixed,
        isDeleted : Boolean
    },{timestamps:true})


module.exports = mongoose.model("book", bookSchema)