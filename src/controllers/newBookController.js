const newBook = require("../models/newBook");
const newAuthor = require("../models/newAuthor.js");
const newPublisher = require("../models/newPublisher.js");

//Write a POST api that creates a publisher from the details in the request body

const createBook = async function (req, res) {
  let bookBody = req.body;

  let { author, publisher } = req.body;
  console.log(author);
  console.log(publisher);

  if (author === null) {
    return res.send({ status: false, result: "Author id is required" });
  }
  let authorData = await newAuthor.findOne({ _id: author });

  if (!authorData) {
    return res.send({ status: false, result: "Invalid Author ID" });
  }

  if (!publisher) {
    return res.send({ status: false, result: "Publisher id is required" });
  }

  let publisherData = await newPublisher.findOne({ _id: publisher });

  if (!publisherData) {
    return res.send({ status: false, result: "Invalid Publisher ID" });
  }

  let newBookData = await newBook.create(bookBody);
  res.send({ result: newBookData });
};

const allData = async function (req, res) {
  let allDataDetails = await newBook
    .find()
    .populate("author")
    .populate("publisher");
  res.send(allDataDetails);
};


const isHardCover = async function(req,res){
        
      const publisher = await newPublisher.find({name:{$in:["Penguin","HarperCollins"]}}).select({_id:1})
      const publisherId = publisher.map(x=>x._id)
      const updateData = await newBook.updateMany({publisher:{$in:publisherId}},{$set:{isHardCover:true}})
      
      res.send(updateData)
      
       
}

const updateByValue = async function(req,res){
    const authors = await newBook.updateMany({rating:{$gt:3.5},$inc:{price:10}})
    console.log(authors);
    res.send(authors)

}

module.exports.createBook = createBook;
module.exports.allData = allData;
module.exports.isHardCover=isHardCover;
module.exports.updateByValue=updateByValue