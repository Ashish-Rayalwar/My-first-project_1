const bookModel = require("../models/bookModel.js")


const createBookData= async function (req, res) {
    let bookData= req.body
    let savedData= await bookModel.create(bookData)
    res.send({msg: savedData})
}
const getBookData= async function (req, res) {
    let allBookData= req.body
    let savedData= await bookModel.find(allBookData)
    res.send({msg: savedData})
}

module.exports.createBookData= createBookData
module.exports.getBookData= getBookData