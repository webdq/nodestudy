# 1 => http模块

# 2 => fs模块

# 3 => 数据请求
* GET
* querystring
* url

# 4 => 数据请求
* POST
*
    req.on('data',function(data){

    });
    req.on('end',function(){

    });

# 5 => 登录注册

# 6 => 模块化
> 系统模块
* crypto
* events
* net
* os
* path
* stream
* timers
* zlib

# 7 => 自定义模块
* require引入模块
* exports
* module
* npm
* publish

# 8 => express
* express
* express-static

# 9 => express
* express
* 中间件
* body-parser
* 链式操作
* 自定义中间件

# 10 => express
* cookie
> cookie-parser
> cookie-encrypter
* session
> cookie-session

# 11 => 模板引擎
* jade
> jade.render('html');
> jade.renderFile('./views/1.jade',{pretty: true});
> script(src="a.js")
> div(style="width:200px;height:200px;") aaa
> div(style={width:"200px",height:"200px"}) aaa
> div(class="aaa bbb") aaa
> div(class=["aaa","bbb"]) aaa
* ejs

# 12 => 模板引擎
* jade
    script
        |window.onload=function(){
        |   var oBtn=document.getElementById('btn');
        |}
    script.
        window.onload=function(){
           var oBtn=document.getElementById('btn');
        }
    script
        include a.js
    body
        |aaa
    div 我的名字：#{name}

* ejs

# 13 => 模板引擎
*ejs

# 14 => 文件上传
* body.parse 解析post数据 application/x-www-form-urlencoded
* multer 解析post文件 multipart/form-data
> var obj = multer({dest:'./upload'});
> app.use(obj.any());
* fs.rename 文件重命名
    var newfilename = req.files[0].path+pathLib.parse(req.files[0].originalname).ext;
    fs.rename(req.files[0].path,newfilename,function(err){
        if(err){
            res.send('上传失败');
        }else{
            res.send('上传成功');
        }
    });

# 15 => express+consolidate
* 设置模板渲染
> app.set('view engine','html');
> app.set('views','./views');
> app.engine('html',consolidate.ejs);
> res.render('1.ejs',{name:'aaa'});
* 路由
> var router = express.Router();
> app.use('/user',router);
> router.get('/1.html');

# 16 => 数据库
* mysql
> 库
> 表
* oracle

# 17 => 数据库
* mysql
> mysql.createConnection();
> db.query();
* SQL
> INSERT
    INSERT INTO 表 (字段列表) VALUES(值列表)
    INSERT INTO `user_table` (`ID`,`username`,`password`) VALUES(0,'aaa','123')
> DELETE
> UPDATE
> SELECT
    SELECT 什么 FROM 表
    SELECT * FROM `user_table`

# 18 => 数据字典
    1.banner
        ID
        title       标题      varchar(32)
        sub_title   副标题     varchar(16)
        src         图片地址   varchar(64)
    2.文章
        ID
        author      作者      varchar(16)
        author_src  作者头像    varchar(64)
        title       标题      varchar(32)
        post_time   发布时间    int
        content     内容      text
        n_like      赞        int
    3.用户
        ID
        username    用户名     varchar(32)
        password    密码      varchar(32)
        src         头像      varchar(64)

# 19 =>

# 20 =>

# 21 =>

# 22 =>

# 23 =>

# 24 =>