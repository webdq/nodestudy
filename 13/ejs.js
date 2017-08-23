var ejs = require('ejs');

var str = ejs.renderFile('./views/5.ejs',{
    json:{
        arr: [{
            user: 'aaa',
            pass: '111'
        },{
            user: 'bbb',
            pass: '222'
        }]
    },
    type: 'admin'
},function(err,data){
    console.log(data);
});