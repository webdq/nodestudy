var http = require('http');
var fs = require('fs');
var querystring = require('querystring');
var urlLib = require('url');

http.createServer(function(req,res){
    //GET
    var obj = urlLib.parse(req.url,true);
    var url = obj.pathname;
    var GET = obj.query;

    //POST
    var str = '';
    req.on('data',function(data){
        str += data;
    });
    req.on('end',function(){
        var POST = querystring.parse(str);

        console.log(url,GET,POST);
    });

    var file_name = './www'+url;
    fs.readFile(file_name,function(err,data){
        if(err){
            res.write('404');
        }else{
            res.write(data);
        }
        res.end();
    });
}).listen(8080);