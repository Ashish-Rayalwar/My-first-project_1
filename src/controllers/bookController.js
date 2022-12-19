const authorModel = require("../models/authorModel.js");
const bookModel = require("../models/bookModel.js");

const createBookData = async function (req, res) {
  let bookData = req.body;
  let hasId = false;
  let savedData;
  if (bookData.author_id) hasId = true;

  if (hasId === false) {
    res.send({ msg: "plz add id" });
  } else {
    savedData = await bookModel.create(bookData);
    res.send({ msg: savedData });
  }
};
const getUpdate = async function (req, res) {
  let data = req.body;
  console.log(data);
  let updateData = await bookModel.findOneAndUpdate(
    { name: "Two states" },
    { $set: data },
    { new: true }
  );

  // let bookData = await bookModel.find({name : "Two States"})
  let authorId = updateData.author_id;
  let author = await authorModel
    .find({ author_id: authorId })
    .select({ author_name: 1, _id: 0 });

  res.send({ updateData, author });
};


const findBooks = async function (req,res){

    let authorsName = []
    let books = await (await bookModel.find({price : { $gte: 50, $lte: 100}}).select({author_name:1,_id:0}))
     
    for(i in books){
        authorsName.push(await authorModel.find(books[i]).select({author_name:1,_id:0}))
        res.send(authorsName)
    }



   
    


}











const getBookData = async function (req, res) {
  let savedData = await bookModel.find();
  res.send({ msg: savedData });
};

const getBookNameAndAuthor = async (req, res) => {
  let data = await bookModel.find().select({ bookName: 1, author: 1, _id: 0 });

  res.send(data);
};
const getBookDataByYear = async function (req, res) {
  let publishYear = req.params.year;
  let data = await bookModel.find({ year: publishYear });
  let count = await bookModel.find({ year: publishYear }).count();

  res.send({ count: count, msg: data });
};
const getParticularData = async function (req, res) {
  let name = req.params.name;

  let data = await bookModel.find();
  let result = await data.filter((ele) => {
    return ele.bookName.startsWith(name);
  });

  res.send(result);
};

const getByINR = async function (req, res) {
  let inrPrice = req.body.price;

  let data = await bookModel.find({ "prices.indianPrice": "500" });

  res.send(data);
};

const updateData = async function (req, res) {
  console.log(req.body);
  let body = req.body;
  let data = await bookModel.findOneAndUpdate(
    { bookName: "Jungle Book" },
    { $set: body },
    { new: true, upsert: true }
  );
  res.send(data);
};
const deleteBook = async function (req, res) {
  // console.log(req.body);
  // let body = req.body;
  let data = await bookModel.updateMany(
    { bookName: "Jungle Book" },
    { $set: { isDeleted: true } },
    { new: true }
  );
  res.send(data);
};

module.exports.createBookData = createBookData;
module.exports.getBookData = getBookData;
module.exports.getBookNameAndAuthor = getBookNameAndAuthor;
module.exports.getBookDataByYear = getBookDataByYear;
module.exports.getParticularData = getParticularData;
module.exports.getByINR = getByINR;
module.exports.updateData = updateData;
module.exports.deleteBook = deleteBook;
module.exports.getUpdate = getUpdate;
module.exports.findBooks=findBooks;
