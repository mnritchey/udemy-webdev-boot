//jshint esversion:6

///// Server Setup

require('dotenv').config()
const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const passport = require("passport")



const app = express();


app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));


///// Mongoose Setup

mongoose.connect("mongodb://localhost:27017/userDB", {useNewUrlParser:true, useUnifiedTopology: true});

const userSchema = new mongoose.Schema ({
  email: String,
  password: String
});



const User = new mongoose.model("User", userSchema);


/////Gets

app.get("/", function(req, res){
  res.render("home");
});

app.get("/login", function(req, res){
  res.render("login");
});

app.get("/register", function(req, res){
  res.render("register");
});


///// Posts

app.post("/register", function(req, res){

});

app.post("/login", function(req, res){
  
});





///// Port Listen

app.listen(3000, function(){
  console.log("Server started on port 3000");
})
