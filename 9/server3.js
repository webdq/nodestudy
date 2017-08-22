var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.listen(8080);

app.use(bodyParser.urlencoded({extended: false}));

app.use('/',function(req,res,next){
    console.log('a');
    next();
});

app.use('/',function(req,res,next){
    console.log('b');
});