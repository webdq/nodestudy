var express = require('express');
var cookieParser = require('cookie-parser');
var cookieSisson = require('cookie-session');
var bodyParser = require('body-parser');
var multer = require('multer');
var consolidate = require('consolidate');

var app = express();
app.listen(8080);


var arr = [];
for(var i=0; i<10000; i++){
    arr.push('keys_'+Math.random());
}
app.use(cookieParser('nodejs'));
app.use(cookieSisson({name:'aaa',keys:arr,maxAge: 1*60*1000}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(multer({dest:'./www/upload/'}).any());
app.set('view engine','html');
app.set('views','./views');
app.engine('html',consolidate.ejs);
app.use(express.static('www'));

app.get('/',function(req,res){
    res.render('1.ejs',{name:'aaa'});
    /*if(req.session.userId){
        res.render('1.ejs',{name:'aaa'});
    }else{
        res.render('login.ejs',{name:'aaa'});
    }*/
});