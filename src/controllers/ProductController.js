const ProductDocument = require("../models/ProductDocument")



const createNewProduct = async function(req,res){
    let productData = req.body
    let createProduct = await ProductDocument.create(productData)
    res.send({result:createProduct,msg:"success"})
}



module.exports.createNewProduct=createNewProduct