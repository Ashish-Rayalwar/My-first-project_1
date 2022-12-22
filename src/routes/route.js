const express = require("express");

const router = express.Router();

const newAuthorController = require("../controllers/newAuthorController.js");
const newBookController = require("../controllers/newBookController.js");

const newPublisherController = require("../controllers/newPublisherController.js")





router.post("/createAuthor", newAuthorController.CreateAuthor)

router.post("/createNewPublisher", newPublisherController.createPublisher)

router.post("/createNewBook1", newBookController.createBook)

router.post("/getData", newBookController.allData)

router.put("/updateTrue", newBookController.isHardCover)

router.put("/updateValue", newBookController.updateByValue)
module.exports = router;
