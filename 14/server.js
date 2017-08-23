var express = require('express');
var cookieParser = require('cookie-parser');
var cookieSisson = require('cookie-session');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var jade = require('jade');
var multer = require('multer');

var app = express();
app.listen(8080);


var arr = [];
for(var i=0; i<10000; i++){
    arr.push('keys_'+Math.random());
}
app.use(cookieParser('nodejs'));
app.use(cookieSisson({name:'aaa',keys:arr,maxAge: 1*60*1000}));
app.use(bodyParser.parse({exteded: false}));
app.use(multer.dest('./www/upload/').any())
app.use(express.static('www'));

app.use('/',function(req,res){
    res.cookie()
    console.log(req.query,req.body,req.cookies,req.session)
});