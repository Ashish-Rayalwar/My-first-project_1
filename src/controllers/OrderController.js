const OrderDocument = require("../models/OrderDocument.js");
const ProductDocument = require("../models/ProductDocument");
const UserDocument = require("../models/UserDocument");

const createNewOrder = async function (req, res) {
  let orderData = req.body;

  

  let createOrder = await OrderDocument.create(orderData);

  return res.send({ result: createOrder, msg: "success" });
};

const updateController = async function (req, res) {
  let header = req.headers.isfreeappuser;

  if (header === true) {
    let updateProduct = await OrderDocument.find().select({ _id: 0, amount: 1 }).updateMany({ amount: { $gt: 0 } }, { $set: { amount: 0 } });
    let updateStatus = await OrderDocument.find().select({ _id: 0, isFreeAppUser: 1 }).updateMany(
        { isFreeAppUser: { $ne: true } },
        { $set: { isFreeAppUser: true } }
      );
    return res.send({
      price: updateProduct,
      isFreeAppUserStatus: updateStatus,
    });
  } else {
    let productPrice = await (
      await ProductDocument.find().select({ _id: 0, price: 1 })).map((x) => x.price);
    console.log(productPrice);
    let userBalance = await (await UserDocument.find().select({ _id: 0, balance: 1 })).map((y) => y.balance);
    console.log(userBalance);
    let orderAmountUpdate = await OrderDocument.find().select({ _id: 0, amount: 1 }).updateMany(
        { amount: { $gte: 0 } },
        { $set: { amount: productPrice[0] } }
      );
    console.log(orderAmountUpdate);
    let updateStatus = await OrderDocument.find().select({ _id: 0, isFreeAppUser: 1 }).updateMany(
        { isFreeAppUser: { $ne: false } },
        { $set: { isFreeAppUser: false } }
      );
    console.log(updateStatus);
    let resultBalance = userBalance - productPrice;
    console.log(resultBalance);
    return res.send({
      resultBal: resultBalance,
      OrderAmount: orderAmountUpdate,
      status: updateStatus,
    });
  }
};

module.exports.createNewOrder = createNewOrder;
module.exports.updateController = updateController;
