const cardModel = require("../models/cardModel.js");


const createCards = async function (req,res){
    let cardData = req.body
    console.log(cardData);
    let createCard = await cardModel.create(cardData)
    console.log(createCard);
    res.send(createCard)
}

const getCardList = async   (req,res)=>{
    let cardList = await cardModel.find()
    res.send(cardList)
}

module.exports.createCards=createCards
module.exports.getCardList=getCardList
