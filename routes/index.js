var express = require('express');
var router = express.Router();

let models = require("../models");
let jwt = require("jsonwebtoken");
let secretObj = require("../config/jwt");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get("/login", function(req,res,next){
  // default : HMAC SHA256
  let token = jwt.sign({
        email: "foo@example.com"   // 토큰의 내용(payload)
      },
      secretObj.secret ,    // 비밀 키
      {
        expiresIn: '5m'    // 유효 시간은 5분
      })


  models.user.findOne({
    where: {
      email: "foo@example.com"
    }
  })
  .then( user => {
    if(user.pwd === "1234"){
      res.cookie("user", token);
      res.json({
        token: token
      })
    }
  })
})

//api 호출
router.get("/someAPI", function(req, res, next){
  let token = req.cookies.user;

  let decoded = jwt.verify(token, secretObj.secret);
  if(decoded){
    res.send("권한이 있어서 API 수행 가능")
  }
  else{
    res.send("권한이 없습니다.")
  }
})

module.exports = router;