var express = require('express');
var bodyParser = require('./libs/my-body-parser');
var querystring = require('querystring');
var app = express();

app.listen(8080);

app.use(bodyParser);

app.use('/',function(req,res,next){
    console.log(req.body);
});