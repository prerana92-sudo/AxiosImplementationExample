
var express = require('express');
const app = express();
var router = express.Router();
var request = require('request');

const data = require('./routes/fact');
app.use("/myapi",data);


app.get("/", (req, res) => {
    res.send("Hello, World!");
    });

module.exports = app;



// to hit a external url 


// app.get('/', function(req, res, next) {
//   request({
//     uri: 'https://www.wikipedia.org/',
    
//   }).pipe(res);
// });


