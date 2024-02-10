const express = require("express");
var app = express();

const port = 5000;

app.listen(port, () => {
    console.log("app runing");
});

app.get("/", (req, res) => {
    res.send("Hello World");
});