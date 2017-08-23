var ejs = require('ejs');

var str = ejs.renderFile('./views/1.ejs',{name: 'a'},function(err,data){
    if(err){
        console.log('编译失败');
    }else{
        console.log(data);
    }
});