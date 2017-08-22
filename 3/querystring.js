var http = require('http');
var querystring = require('querystring');

http.createServer(function(req,res){
    var GET = {};
    if(req.url.indexOf('?') != -1){
        GET = querystring.parse(arr[1]);
    }else{
        var url = req.url;
    }

    console.log(url,GET);
    res.write('aaa');
    res.end();
}).listen(8080);