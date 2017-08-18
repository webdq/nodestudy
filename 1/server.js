var http = require('http');

http.createServer(function(req,res){
    //console.log('进入访问')
    switch(req.url){
        case '/1.html':
            res.write('111');
            break;
        case '/2.html':
            res.write('222');
            break;
        default:
            res.write('404');
            break;
    }

    res.end();
}).listen(8080);