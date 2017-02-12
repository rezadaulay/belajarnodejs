var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';


app.listen(3000,function(){
  console.log("Live at Port 3000");
});
app.use("/",router);

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

