var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    var filename = './www'+req.url;
    fs.readFile(filename,function(err,data){
        if(err){
            res.write('404');
        }else{
            res.write(data);
        }
        res.end();
    });

}).listen(8080);