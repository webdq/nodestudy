var express = require('express');
var bodyParser = require('body-parser');
var querystring = require('querystring');
var app = express();

app.listen(8080);

app.use(function(req,res,next){
    var str = '';
    req.on('data',function(data){
       str += data;
    });
    req.on('end',function(){
        req.body = querystring.parse(str);
        next();
    });
});

app.use('/',function(req,res,next){
    console.log(req.body);
});