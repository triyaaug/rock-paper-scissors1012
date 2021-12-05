var express = require('express');
var app = express();
var idCounter = 0;

app.post('/post', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log("New express client");
    console.log("Received: ");
    console.log(JSON.parse(req.query['data']));
    var z = JSON.parse(req.query['data']);


    
}).listen(3000);
console.log("Server is running!");

