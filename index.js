const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
const https = require("https");
app.set('view engine', 'ejs');
app.use(express.static('public'));

var mssg;
var id;
app.get("/",function(req,res){
  https.get("https://api.adviceslip.com/advice",function(response){
    response.on("data",function(data){
      const advicedata = JSON.parse(data);
      mssg = advicedata.slip.advice;
      id = advicedata.slip.id;
    })
  })
  res.render("advice",{AdviceNumber: id , Advicemssg: mssg});
})

app.listen(80,function(req,res){
  console.log("Server started");
})
