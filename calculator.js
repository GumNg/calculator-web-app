// express setup
const express = required("express");
const app = express()

// create root route to get method and send response
app.get("/", function(req, res) {
    res.send("Hello World");
})