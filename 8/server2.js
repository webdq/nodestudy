var express = require('express');
var expressStatic = require('express-static');
var server = express();

var users = {
    "aaa": "123",
    "bbb": "123"
};
server.get('/login',function(req,res){
    var user = req.query['user'];
    var pass = req.query['pass'];

    if(users[user] == null){
        res.send('{"ok":false,"msg":"用户不存在"}');
    }else{
        if(users[user] != pass){
            res.send('{"ok":false,"msg":"用户或密码错误"}');
        }else{
            res.send('{"ok":true,"msg":"登录成功"}');
        }
    }

});


server.use(express.static('www'));
//server.use(expressStatic(__dirname+'/www'));

server.listen(8080);