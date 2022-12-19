const authorModel = require("../models/authorModel");
const bookModel = require("../models/bookModel");

const createAuthor = async function (req, res) {
  let authorData = req.body;
  let hasId = false;
  let savedData;
  if (authorData.author_id) hasId = true;

  if (hasId === false) {
    res.send({ msg: "plz add id" });
  } else {
    savedData = await authorModel.create(authorData);
    res.send({ msg: savedData });
  }
};

const getBookByAuthor = async function (req, res) {
  let authorName = await authorModel.findOne({ author_name: "Chetan Bhagat" });
  let authorId = authorName.author_id;
  let findBook = await bookModel.find({ author_id: authorId });
  console.log(authorId);
  // let authorId

  res.send(findBook);
};


const getAuthor = async function (req,res){
    let data = req.body
    console.log(data);
    let updateData = await bookModel.findOneAndUpdate(
        {name : "Two states"},
        {$set : data},
        {new : true}

    )
    
    // let bookData = await bookModel.find({name : "Two States"})
    // let authorId = bookData.author_id
    // let author = await authorModel.find({author_id : authorId})
    // let authorName = author.author_name
    res.send(updateData)
   

}

module.exports.createAuthor = createAuthor;
module.exports.getBookByAuthor = getBookByAuthor;
module.exports.getAuthor=getAuthor
