var http = require('http');
var querystring = require('querystring');

http.createServer(function(req,res){
    var str = '';
    var i = 0;
    req.on('data',function(data){
        console.log(`第${i++}次收到数据`);
        str += data;
    });
    req.on('end',function(data){
        var POST = querystring.parse(str);
        console.log(POST);
    });
}).listen(8080);