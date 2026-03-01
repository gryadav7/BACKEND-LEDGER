const tokenBlackListModel = require("../models/blackList.model");
const userModel = require("../models/user.model");

const jwt = require("jsonwebtoken");

async function authMiddleware(req, res, next) {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized access , token is missing",
    });
  }

  const isBlacklisted = await tokenBlackListModel.findOne({token});

  if(isBlacklisted){
    return res.status(401).json({
      message : "Unauthorized access , token is invalid"
    })
  }
  

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel.findById(decoded.userId);
    req.user = user;

    if (!user) {
      return res.status(401).json({
        message: "Unauthorized access, user not found",
      });
    }
    

    return next();


  } catch (err) {
    return res.status(401).json({
      message: "Unauthorized access , token is Invalid",
    });
  }
}

async function authSystemUserMiddleware(req,res,next){
  const token =  req.cookies.token || req.headers.authorization?.split(" ")[1];

  if(!token){
    return res.status(401).json({
      message : "Unauthorized access , token is missing"
    })
  }

  try{
    const decoded = jwt.verify(token , process.env.JWT_SECRET);

    const user = await userModel.findById(decoded.userId).select("+systemUser");
    req.user = user;
    console.log(user.systemUser)
    if(!user.systemUser){
      return res.status(403).json({
        message: "Fobidden access , not a system user"
      })
    }
    // req.user = user;
    return next();

  }catch(err){
    return res.status(401).json({
      message: "Unauthorized acccess , token is invalid"
    })

  }
}




module.exports = {
  authMiddleware,
  authSystemUserMiddleware
};
