var express = require('express');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');

var app = express();

app.use(cookieParser());
app.use(cookieSession({
    name: 'sess',
    keys: ['aaa','bbb','ccc'],
    maxAge: 5*1000
}));

app.use('/',function(req,res){
    if(req.session['count'] == null){
        req.session['count'] = 1;
    }else{
        req.session['count']++;
    }
    console.log(req.session);
    res.send('ok');
});

app.listen(8080);