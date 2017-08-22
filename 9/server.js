var express = require('express');
var bodyParser = require('body-parser')
var app = express();

//app.use(express.static('www'));
app.listen(8080);

app.use(bodyParser.urlencoded({extended: false}));

app.use('/',function(req,res){
    //console.log(req.query)
    console.log(req.body)
});