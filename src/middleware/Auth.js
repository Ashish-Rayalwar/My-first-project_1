const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");


const validationUser = async function(req,res,next){
    let userName = req.body.emailId;
    let password = req.body.password;
  
    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
      return res.send({
        status: false,
        msg: "username or the password is not corerct",
      });

      next();
}


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


const tokenVerify = function(req,res,next){
    let token = req.headers["x-auth-token"];
  

  
  if (!token) return res.send({ status: false, msg: "token must be present" });

  console.log(token);

   let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });
    next()
}


const checkUserId = async function(req,res,next){
    let userId = req.params.userId;
    let user =  await userModel.findById(userId);
  // //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.send("No such user exists");
  }
  next()
}


module.exports.validationUser=validationUser
module.exports.tokenVerify=tokenVerify
module.exports.checkUserId=checkUserId