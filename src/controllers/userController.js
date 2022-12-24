const UserDocument = require("../models/UserDocument")


const createNewUser = async function(req,res){
    let userData = req.body
    let header = req.headers.isfreeappuser

    if(!header){
        res.send("header is mandatory")
    }
    let createUser = await UserDocument.create(userData)
    res.send({result:createUser,msg:"success"})
}

module.exports.createNewUser=createNewUser