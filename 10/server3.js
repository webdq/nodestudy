var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();

app.use(cookieParser('wesdfw4r34tf'));

app.use('/',function(req,res){
    req.secret='wesdfw4r34tf';
    res.cookie('a','123',{signed: true});

    console.log(req.signedCookies);
    console.log(req.cookies);

    res.send('ok');
});

app.listen(8080);