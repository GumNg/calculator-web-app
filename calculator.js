// express setup
const express = require("express");
const app = express()

// body parser setup
const bodyParser = require("body-parser");

// create root route to get method and send response
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
})

// handles post request that comes to home route
app.post("/", function(req, res) {
    res.send("Thanks for posting!");
})

//create server on port 3000
app.listen(3000, function() {
    console.log("Server started on port 3000");
})