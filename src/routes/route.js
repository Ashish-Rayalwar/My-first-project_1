const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController.js")
const bookController = require("../controllers/bookController.js")
const bookModel = require("../models/bookModel.js")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", bookController.createBookData )

router.get("/getBookData", bookController.getBookData)  // Get all data of book list

router.get("/getBookList",  bookController.getBookNameAndAuthor) // Get result  BookName and Author

router.get("/getBookData/Year/:year", bookController.getBookDataByYear) // Get books by year

router.get("/getParticularBookData/name/:name", bookController.getParticularData ) // get by Name

router.get("/getByINR", bookController.getByINR )
router.post("/update", bookController.updateData )
router.post("/delete",bookController.deleteBook)

module.exports = router;