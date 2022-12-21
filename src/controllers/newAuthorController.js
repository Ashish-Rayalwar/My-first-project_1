const newAuthor = require("../models/newAuthor");

// Write a POST api that creates an author from the details in request body

const CreateAuthor = async function(req,res){
    let authorData = req.body
    let authorCreate = await newAuthor.create(authorData)
    res.send(authorCreate)
}


module.exports.CreateAuthor=CreateAuthor