var express = require("express");
var bodyparser= require("body-parser");
var cors = require("cors");
const axios = require('axios');
var app = express();
var MongoClient= require("mongodb").MongoClient;
var mongoose =require("mongoose");
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send({"connection":true,"status":"active"})
})
app.get("/all",(req,res)=>{
   var array =[
       {"commid":001,"commname":"Rice","commrate":10,"commquandity":1},
       {"commid":002,"commname":"Wheat","commrate":43.02,"commquandity":1},
       {"commid":003,"commname":"Oil","commrate":96.00,"commquandity":1},
       {"commid":004,"commname":"HONEY","commrate":12.0,"commquandity":1},
       {"commid":005,"commname":"Salt","commrate":14.01,"commquandity":1},
       {"commid":006,"commname":"SAGO","commrate":33.6,"commquandity":1}
    ];
    res.json(array);
    res.end();
})
// mongoose.connect(db.url,{useNewUrlParser:true},function(err,con){
//     if(err)
//     console.log(err)
//     if(con){
//         console.log("connected")
//     }
// })

var port = process.env.PORT || 3000;
app.listen(port);
console.log("port is An Active:",port);