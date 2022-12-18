const bookModel = require("../models/bookModel.js")


const createBookData= async function (req, res) {
    let bookData= req.body
    let savedData= await bookModel.create(bookData)
    res.send({msg: savedData})
}
const getBookData= async function (req, res) {
   
    let savedData= await bookModel.find()
    res.send({msg: savedData})
}

const getBookNameAndAuthor = async (req,res)=>{
    let data = await bookModel.find().select({bookName:1,author : 1,_id:0})
   
    res.send(data)
}
const getBookDataByYear = async function (req,res){
   let publishYear = req.params.year
    let data = await bookModel.find({year:publishYear})
    let count = await bookModel.find({year:publishYear}).count()
   
    res.send({count:count,msg:data})
}
const getParticularData = async function (req,res){
   let name = req.params.name
  
    let data =  await bookModel.find()
    let result = await data.filter((ele)=>{
        return ele.bookName.startsWith(name)
    })

    res.send(result)
    
 
   
    
}


const getByINR = async function(req,res){
    let inrPrice= req.body.price
    inrPrice = inrPrice * 1
    let data = await bookModel.find()
    console.log(data);
    let result = await data.find((ele)=>{
        return ele.prices.indianPrice == inrPrice
    })
    console.log(result);      
    res.send(result)
}



module.exports.createBookData= createBookData
module.exports.getBookData= getBookData
module.exports.getBookNameAndAuthor=getBookNameAndAuthor
module.exports.getBookDataByYear=getBookDataByYear
module.exports.getParticularData=getParticularData
module.exports.getByINR=getByINR