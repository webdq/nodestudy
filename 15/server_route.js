var express = require('express');

var app = express();
var router = express.Router();

router.get('/1.html',function(req,res){
    res.send('user');
});
router.get('/2.html',function(req,res){
    res.send('user222');
});

app.use('/user',router);

app.listen(8080);