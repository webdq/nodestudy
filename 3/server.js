var http = require('http');
var querystring = require('querystring');
var urlLib = require('url');

http.createServer(function(req,res){
    var GET = {};
    if(req.url.indexOf('?') != -1){
        var arr = req.url.split('?');
        var url = arr[0];
        var arr2 = arr[1].split('&');
        for(var i=0; i<arr2.length; i++){
            var arr3 = arr2[i].split('=');
            GET[arr3[0]] = arr3[1];
        }
    }else{
        var url = req.url;
    }

    console.log(url,GET);
    res.write('aaa');
    res.end();
}).listen(8080);