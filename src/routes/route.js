const express = require("express");

const router = express.Router();




const costomerController = require("../controllers/costomerController.js");
const cardController = require("../controllers/cardController.js");






router.post("/addCostomer", costomerController.addCostomerData)

router.get("/getCostomer/:status", costomerController.getCostomerByStatus)

router.post("/delete/:statusName",costomerController.deleteCostomer)

router.get("/getCostomer", costomerController.findCostomer)



router.post("/createCard", cardController.createCards)

router.get("/getCardlist", cardController.getCardList)
module.exports = router;
