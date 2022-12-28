const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

const validationUser = async function (req, res, next) {
  try {
    let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.status(200).send({
      status: false,
      msg: "username or the password is not corerct",
    });

  next();
  } catch (error) {
    res.status(403).send({msg:error.message})
    console.log("Auth validationUser ", error.message)
  }
};

// const createToken = function(req,res,next){
//     let token = jwt.sign(
//         {
//           userId: user._id.toString(),
//           batch: "thorium",
//           organisation: "FunctionUp",
//         },
//         "functionup-plutonium-very-very-secret-key"
//       );
// }

const tokenVerify = function (req, res, next) {
  try {
    let token = req.headers["x-auth-token"];

  if (!token) return res.send({ status: false, msg: "token must be present" });

  console.log(token);

  let decodedToken = jwt.verify(
    token,
    "functionup-plutonium-very-very-secret-key"
  );
  if (!decodedToken) return res.status(200).send({ status: false, msg: "token is invalid" });
  next();
  } catch (error) {
    res.status(403).send({msg:error.message})
    console.log("tokenVerify auth", error.message)
  }
};

const checkUserId = async function (req, res, next) {
  try {
    let userId = req.params.userId;
  let token = req.headers["x-auth-token"];
  let decodedToken = jwt.verify(
    token,
    "functionup-plutonium-very-very-secret-key"
  );
  let tokenUserId = decodedToken.userId;
  if (userId != tokenUserId)
    return res.status(404).send({ status: false, msg: "invalidUserID" });

  let user = await userModel.findById(userId);
  // //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.status(404).send("No such user exists");
  }
  next();
  } catch (error) {
    res.status(406).send({msg:error.message})
    console.log("checkUserId Auth", error.message)
  }
};

module.exports.validationUser = validationUser;
module.exports.tokenVerify = tokenVerify;
module.exports.checkUserId = checkUserId;
