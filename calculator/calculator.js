//jshint esversion:6

// Setup Express

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({
  extended: true
}));

// Caculate Page (index.html)

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req, res) {

  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  let result = num1 + num2;

  res.send('The result of the Calculation is: ' + result);
});



// BMI Calculator Page (bmiCalculator.html)

app.get('/bmiCalculator', function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post('/bmiCalculator', function(req, res) {
  let weight = parseFloat(req.body.weight);
  let height = parseFloat(req.body.height);
  let bmi = (weight / (height * height)) * 703;
  let bmiRounded = bmi.toFixed(1);

  res.send("Your BMI is " + bmiRounded + ".")
});



// Port Listening

app.listen(port, function() {
  console.log('Calculator server is running on port 3000');
});
