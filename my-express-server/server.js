//jshint esversion:6

const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(req, res){
  res.send('<h1>Hello, world!</h1>');
});

app.get('/contact', function(req, res){
  res.send('Contact Me at: email');
});

app.get('/about', function(req,res){
  res.send('<h1>Mike Ritchey</h1><h3>I am a new web developer, excited to move to Colorado Springs!</h3>');
});

app.get('/hobbies', function(req,res){
  res.send('these are my hobbies');
});




app.listen(port, function() {
  console.log('Server started on port 3000');
});
