const costomerModel = require("../models/costomerModel");

const addCostomerData = async function(req,res){
    let costomerData = req.body
    let data = await costomerModel.create(costomerData)
    console.log(req.body);
    res.send(data)
}


/// Get all customers List with status ACTIVE [GET]

const getCostomerByStatus = async function(req,res){
    let status = req.params.status
    let costomerData = await costomerModel.find({status : status})
    res.send(costomerData)
}

/// Delete customer. [DELETE]

const deleteCostomer = async function(req,res){
    let statusName = req.params.statusName
    let deleteCostomer = await costomerModel.find({status : statusName }).deleteOne((err,docs)=>{
        return docs.remove()
    })
    res.send(deleteCostomer)
}

module.exports.addCostomerData=addCostomerData
module.exports.getCostomerByStatus=getCostomerByStatus
module.exports.deleteCostomer=deleteCostomer
