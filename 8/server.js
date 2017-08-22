var express = require('express');
var server = express();

/*server.use('/',function(req,res){
    res.send('index');
    res.end();
});
server.use('/a.html',function(req,res){
    res.send('aaa');
    res.end();
});
server.use('/b.html',function(req,res){
    res.send('bbb');
    res.end();
});*/
server.get('/',function(req,res){
    console.log('get')
});
server.post('/',function(req,res){
    console.log('post')
});


server.listen(8080);