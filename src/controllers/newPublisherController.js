const newPublisher = require("../models/newPublisher.js");


//Write a POST api that creates a publisher from the details in the request body

const createPublisher = async (req,res)=>{
    let publisherBody = req.body

    let newPublisherData = await newPublisher.create(publisherBody)
    res.send(newPublisherData)
}

module.exports.createPublisher=createPublisher