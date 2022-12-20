const express = require("express");
// const bodyParser = require("body-parser");
const router = express.Router();


const bookController = require("../controllers/bookController.js");
const authorController = require("../controllers/authorController.js");
const costomerController = require("../controllers/costomerController.js");
const cardController = require("../controllers/cardController.js");




router.get("/test-me", function (req, res) {
  res.send("My first ever api!");
});

// router.post("/createUser", UserController.createUser);

// router.get("/getUsersData", UserController.getUsersData);

// router.post("/createBook", bookController.createBookData);

// router.get("/getBookData", bookController.getBookData); // Get all data of book list

// router.get("/getBookList", bookController.getBookNameAndAuthor); // Get result  BookName and Author

// router.get("/getBookData/Year/:year", bookController.getBookDataByYear); // Get books by year

// router.get(
//   "/getParticularBookData/name/:name",
//   bookController.getParticularData
// ); // get by Name

// router.get("/getByINR", bookController.getByINR);
// router.post("/update", bookController.updateData);
// router.post("/delete", bookController.createBookData);

// router.post("/createBook", bookController.createBookData)
// router.post("/createAuthor", authorController.createAuthor)
// router.get("/getBook", authorController.getBookByAuthor)
// router.post("/getUpdate", bookController.getUpdate)
// router.get("/findBooks", bookController.findBooks)

router.post("/addCostomer", costomerController.addCostomerData)

router.get("/getCostomer/:status", costomerController.getCostomerByStatus)

router.get("/delete/:statusName",costomerController.deleteCostomer)



router.post("/createCard", cardController.createCards)

router.get("/getCardlist", cardController.getCardList)
module.exports = router;
