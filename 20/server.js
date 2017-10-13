var express = require('express');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var bodyParser = require('body-parser');
var multer = require('multer');
var consolidate = require('consolidate');
var mysql = require('mysql');

var db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'blog'
});
var app = express();
app.listen(8080);

app.use(cookieParser('nodejs'));

var arr = [];
for(var i=0; i<10000; i++){
    arr.push('keys_'+Math.random());
}
app.use(cookieSession({name:'sess_id',keys: arr, maxAge: 1*60*1000}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(multer({dest:'./www/upload'}).any());
app.use(express.static('www'));

app.set('view engine','html');
app.set('views','./template');
app.engine('html',consolidate.ejs);

app.get('/',function(req,res,next){
    db.query('SELECT * FROM banner_table',function(err,data){
        if(err){
            res.status(500).send('database error').end();
        }else{
            res.banners = data;
            next();
        }
    });
});
app.get('/',function(req,res,next){
    db.query('SELECT ID,title,summary FROM article_table',function(err,data){
        if(err){
            res.status(500).send('database error').end();
        }else{
            res.articles = data;
            next();
        }
    });
});
app.get('/',function(req,res){
    res.render('index.ejs',{banners: res.banners, articles: res.articles});
});

app.get('/article',function(req,res){
    res.render('conText.ejs',{banners: res.banners, articles: res.articles});
});