const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/UserController.js")
const ProductController = require("../controllers/ProductController.js")
const OrderController = require("../controllers/OrderController.js")
// const commonMW = require ("../middlewares/commonMiddlewares")

const middlewares = require("../middlewares/middlewares.js")


// router.post("/createBook", commonMW.abc, BookController.createBook  )
// router.post("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.abc, UserController.basicCode, commonMW.mid4)

router.post("/createProduct", ProductController.createNewProduct)

router.post("/createUser", middlewares.checkHeaderInUser, UserController.createNewUser)

router.post("/createOrder", middlewares.checkHeaderInUser, middlewares.checkValidationForUser,middlewares.checkValidationForProduct, OrderController.createNewOrder)

router.post("/updateValue", OrderController.updateController)

module.exports = router;