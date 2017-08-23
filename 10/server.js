var express = require('express');

var app = express();

app.use('/',function(req,res){
    res.cookie('a','123');
    res.send('ok');
});

app.listen(8080);