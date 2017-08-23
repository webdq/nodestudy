var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var fs = require('fs');
var pathLib = require('path');

var multerObj = multer({dest:'./www/upload'});
var app = express();
app.listen(8080);

//app.use(bodyParser.urlencoded({extended:false}));
app.use(multerObj.any());
app.post('/',function(req,res){
    console.log(req.files)
    var newfilename = req.files[0].path+pathLib.parse(req.files[0].originalname).ext;
    fs.rename(req.files[0].path,newfilename,function(err){
        if(err){
            res.send('上传失败');
        }else{
            res.send('上传成功');
        }
    });
});