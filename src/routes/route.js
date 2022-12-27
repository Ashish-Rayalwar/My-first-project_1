const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middle = require("../middleware/Auth.js")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", middle.validationUser,  userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",  middle.tokenVerify, middle.checkUserId, userController.getUserData)

router.put("/users/:userId", middle.tokenVerify, middle.checkUserId, userController.updateUser)

router.put("/users/delete/:userId", middle.tokenVerify, middle.checkUserId, userController.deleteUser)

module.exports = router;