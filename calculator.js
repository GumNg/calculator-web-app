// express setup
const express = require("express");
const app = express();

// body parser setup
const bodyParser = require("body-parser");

// express works with bodyParser
// grabs html code posted to server
// extended: true allows posting of nested objects
app.use(bodyParser.urlencoded({ extended: true }));

// create root route to get method and send response
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
// route to get method to bmicalculator and send response
app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

// handles post request that comes to home route
app.post("/", function (req, res) {
  // sets values of numbers in html form
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  //  sets value of calculation of values
  let result = num1 + num2;
  // responds to inputs with result of calculations
  res.send("The result of the calculation " + result);
});

app.post("/bmicalculator", function(req, res) {
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);
    // calculates bmi
    let bmi = weight / Math.pow(height, 2);
    // responds to inputs with bmi calculation
    res.send("Your BMI is " + bmi);
});

//create server on port 3000
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
