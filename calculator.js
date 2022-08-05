// express setup
const express = require("express");
const app = express()

// create root route to get method and send response
app.get("/", function(req, res) {
    res.send("Hello World");
})

//create server on port 3000
app.listen(3000, function() {
    console.log("Server started on port 3000");
})