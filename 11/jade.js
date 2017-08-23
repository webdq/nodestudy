var jade = require('jade');
var fs = require('fs');

var str = jade.renderFile('./views/1.jade',{pretty: true});

//console.log(str)
fs.writeFile('./build/2.html',str,function(err){
    if(err){
        console.log('写入失败');
    }else{
        console.log('写入成功');
    }
});