# 1 => http模块

# 2 => fs模块

# 3 => 数据请求
* GET
* querystring
* url

# 4 => 数据请求
* POST
```
req.on('data',function(data){

});
req.on('end',function(){

});
```

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
```
    jade.render('html');
    jade.renderFile('./views/1.jade',{pretty: true});
    script(src="a.js")
    div(style="width:200px;height:200px;") aaa
    div(style={width:"200px",height:"200px"}) aaa
    div(class="aaa bbb") aaa
    div(class=["aaa","bbb"]) aaa
```
* ejs

# 12 => 模板引擎
* jade
```
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
```

* ejs

# 13 => 模板引擎
* ejs

# 14 => 文件上传
* body.parse 解析post数据 application/x-www-form-urlencoded
* multer 解析post文件 multipart/form-data
```
    var obj = multer({dest:'./upload'});
    app.use(obj.any());
```
* fs.rename 文件重命名
```
    var newfilename = req.files[0].path+pathLib.parse(req.files[0].originalname).ext;
    fs.rename(req.files[0].path,newfilename,function(err){
        if(err){
            res.send('上传失败');
        }else{
            res.send('上传成功');
        }
    });
```

# 15 => express+consolidate
* 设置模板渲染
```
    app.set('view engine','html');
    app.set('views','./views');
    app.engine('html',consolidate.ejs);
    res.render('1.ejs',{name:'aaa'});
```
* 路由
```
    var router = express.Router();
    app.use('/user',router);
    router.get('/1.html');
```

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
```
    app.get('/',function(req,res){
        db.query('SELECT * FROM banner_table',function(err,data){
            if(err){
                res.status(500).send('database error').end();
            }else{
                res.render('index.ejs',{banners: data});
            }
        });
    });
```

# 20 =>
```
    app.get('/',function(req,res,next){
        db.query('SELECT * FROM banner_table',function(err,data){
            if(err){
                res.status(500).send('database error').end();
            }else{
                res.banners = data;
                next();
            }
        });
    });
    app.get('/',function(req,res,next){
        db.query('SELECT ID,title,summary FROM article_table',function(err,data){
            if(err){
                res.status(500).send('database error').end();
            }else{
                res.articles = data;
                next();
            }
        });
    });
    app.get('/',function(req,res){
        res.render('index.ejs',{banners: res.banners, articles: res.articles});
    });
```

# 21 =>
```
    app.get('/article',function(req,res){
        if(req.query.id){
            db.query(`SELECT * FROM article_table WHERE ID=${req.query.id}`,function(err,data){
                if(err){
                    res.status(500).send('数据有问题').end();
                }else{
                    if(data.length == 0){
                        res.status(404).send('文章找不到').end();
                    }else{
                        var article = data[0];
                        article.date = common.time2date(article.post_time);
                        article.content = article.content.replace(/^/gm,'<p>').replace(/$/gm,'</p>');
                        res.render('conText.ejs',{articleData: article});
                    }
                }
            });
        }else{
            res.status(404).send('文章找不到').end();
        }
    });
```

# 22 =>
```
    app.get('/article',function(req,res){
        if(req.query.id){
            if(req.query.act == 'like'){
                db.query(`UPDATE article_table SET n_like=n_like+1 WHERE ID=${req.query.id}`,function(err,data){
                    if(err){
                        res.status(500).send('数据有问题').end();
                    }else{
                        db.query(`SELECT * FROM article_table WHERE ID=${req.query.id}`,function(err,data){
                            if(err){
                                res.status(500).send('数据有问题').end();
                            }else{
                                if(data.length == 0){
                                    res.status(404).send('文章找不到').end();
                                }else{
                                    var article = data[0];
                                    article.date = common.time2date(article.post_time);
                                    article.content = article.content.replace(/^/gm,'<p>').replace(/$/gm,'</p>');
                                    res.render('conText.ejs',{articleData: article});
                                }
                            }
                        });
                    }
                });
            }else{
                db.query(`SELECT * FROM article_table WHERE ID=${req.query.id}`,function(err,data){
                    if(err){
                        res.status(500).send('数据有问题').end();
                    }else{
                        if(data.length == 0){
                            res.status(404).send('文章找不到').end();
                        }else{
                            var article = data[0];
                            article.date = common.time2date(article.post_time);
                            article.content = article.content.replace(/^/gm,'<p>').replace(/$/gm,'</p>');
                            res.render('conText.ejs',{articleData: article});
                        }
                    }
                });
            }
        }else{
            res.status(404).send('文章找不到').end();
        }
    });
```

# 23 => 数据库
* 删 DELETE
> DELETE FROM 表 WHERE 条件

* 增  INSERT
> INSERT INTO 表 (字段列表) VALUES (值列表)

* 改 UPDATE
> UPDATE 表 SET 字段=值,字段=值... WHERE 条件

* 查 SELECT
> SELECT * FROM 表 WHERE 条件

-----------------------------------------
子句：
WHERE 条件
WHERE age<18
WHERE age>=18
WHERE age>=18 AND score<=60
WHERE cach>100 OR score>=60

ORDER 排序
ORDER BY age ASC/DESC
    ASC-升序
    DESC-降序
ORDER BY price ASC
ORDER BY price ASC, sales DESC

GROUP 聚类
SELECT * FROM 表 GROUP BY 字段
SELECT class,COUNT(class) FROM student_table GROUP BY class

# 24 =>