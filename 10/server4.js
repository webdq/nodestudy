var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();

app.use(cookieParser());

app.use('/',function(req,res){
    res.clearCookie('a');

    res.send('ok');
});

app.listen(8080);