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
    let deleteCostomer = await costomerModel.updateMany(
        {status : statusName},
        {$set:{isDeleted : true}},
        {new : true}
    )
    res.send({msg:"delete",result:deleteCostomer})
}

const findCostomer = async function(req,res){

    let isDeleted = await costomerModel.find({isDeleted : false})
    res.send(isDeleted)

}

module.exports.addCostomerData=addCostomerData
module.exports.getCostomerByStatus=getCostomerByStatus
module.exports.deleteCostomer=deleteCostomer
module.exports.findCostomer=findCostomer
