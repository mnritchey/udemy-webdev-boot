// Setup

const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');

const app = express();

let items = ["Buy Food","Cook Food", "Eat Food"];
let workItems =[];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// Get function

app.get("/", function(req, res) {

  let day = date.getDate();

  res.render("list", {listTitle: day, newListItem: items});
});

// Post Request

app.post("/", function(req,res) {
  let item = req.body.newItem;

  if(req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }

});

// Get Route Work

app.get ("/work", function(req, res) {
  res.render("list", {listTitle: "Work List", newListItem: workItems});
});

// Get route about
app.get("/about", function(req, res) {
  res.render("about")
});


// Port listen

app.listen(3000, function() {
  console.log("Server started on port 3000");
})
