const express = require("express");

const router = express.Router();

const newAuthorController = require("../controllers/newAuthorController.js")






router.post("./createAuthor", newAuthorController.CreateAuthor)



module.exports = router;
