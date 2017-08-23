var mysql = require('mysql');

var db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: '20170823'
});

//console.log(db)
db.query('SELECT * FROM `user_table`',function(err,data){
    if(err){
        console.log('出错了',err);
    }else{
        console.log('成功了',data);
    }
});