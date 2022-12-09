const express = require('express');
const router = express.Router();
const _ = require("lodash");



const logger = require("../logger/logger.js")
const helper= require("../util/helper")
const formator = require("../validator/formator.js")
const data = require("../data/data.js")



///////data

let arr1 = [1,22,3,44,44]
let arr2 = [2,1,3,45,66,77,8]
let arr3 = [2,44,66,56,22]
let arr4 = [1,2,4,5,89]
let arr5 = [9,34,67,12,89]

router.get('/test-me', function (req, res) {
    // console.log(logger.welcome("Ashish"));
    // console.log(helper.printDate());
    // console.log(helper.getBatchDetails('californium','W3D4','today','node module system'));
    // console.log(formator.trim("  Ashish"));
    // console.log(formator.lowerCase("CaLIforNium"));
    // console.log(formator.upperCase("functionUp"));
    // console.log(_.chunk((yearOfMonth.months),4));
    logger.welcome("Ashish")
    helper.printDate()
    helper.getBatchDetails('californium','W3D4','today','node module system')
    formator.trim("  Ashish")
    formator.lowerCase("CaLIforNium")
    formator.upperCase("functionUp")
    console.log(_.chunk((data.months),3));
    console.log(_.tail(data.oddNum));
    console.log(_.union(arr1,arr2,arr3,arr4,arr5));
    console.log(_.fromPairs(data.moviesDetails));

    res.send('My first ever api!')
});

module.exports = router;