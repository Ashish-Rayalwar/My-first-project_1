const ProductDocument = require("../models/ProductDocument")
const UserDocument = require("../models/UserDocument")




const checkHeaderInUser = function(req,res,next){
    let header = req.headers.isfreeappuser

    if(!header){
        return res.send("header is mandatory")
    }
    next()

}


const checkValidationForUser =  async function(req,res,next){
    
    let userId = req.body.userId
    let userIdDocument = await UserDocument.findOne({_id:userId})
    console.log(userIdDocument);

    if(!userIdDocument){
        return res.send("productId is Invalid")
    }
    next()
    

}
const checkValidationForProduct = async function(req,res,next){
    
    let productId = req.body.productId
    let productIdDocument = await ProductDocument.findOne({_id:productId})
    console.log(productIdDocument);
    if(!productIdDocument){
        return res.send("productId is Invalid")
    }
    next()
    

}


// const Update1 = async function(req,res,next){
//     let header = req.headers.isfreeappuser
//     if(header === true){

//         let updateProduct =  OrderDocument.find().select({_id:0,amount:1}).updateMany({amount:{$gt:0}},{$set:{amount:0}})
//         let updateStatus =  OrderDocument.find().select({_id:0,isFreeAppUser:1}).updateMany({isFreeAppUser:{$ne:false}},{$set:{isFreeAppUser:true}})
//         return res.send({price:updateProduct,isFreeAppUserStatus:updateStatus})
// }
// next()
// }

// const Update2 = async function(req,res,next){
//     let header = req.headers.isfreeappuser
//     if(header===false){
//     let productPrice = await (await ProductDocument.find().select({_id:0,price:1})).map((x)=>x.price)
//         let userBalance = await (await UserDocument.find().select({_id:0,balance:1})).map((y)=>y.balance)
//         let orderAmountUpdate = await OrderDocument.find().select({_id:0,amount:1}).updateMany({amount:{$gt:0}},{$set:{amount:productPrice}})
//         let updateStatus = await OrderDocument.find().select({_id:0,isFreeAppUser:1}).updateMany({isFreeAppUser:{$ne:false}},{$set:{isFreeAppUser:false}})
        
//         let resultBalance = userBalance-productPrice
        
//         return res.send({resultBal:resultBalance,updateAmount:orderAmountUpdate,status:updateStatus})
// }
// next()
// }



module.exports.checkHeaderInUser=checkHeaderInUser
module.exports.checkHeaderInOrder=checkHeaderInUser
// module.exports.Update1=Update1
// module.exports.Update2=Update2
module.exports.checkValidationForUser=checkValidationForUser
module.exports.checkValidationForProduct=checkValidationForProduct