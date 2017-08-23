var jade = require('jade');

var str = jade.renderFile('./views/1.jade',{pretty: true,
    name: 'aaa',
    json: {width: '200px', height: '200px', background: 'red'},
    arr: ['aaa', 'bbb'],
    c: 12,
    d: 5,
    content: '<h2>标题</h2><p>内容</p>'
});

console.log(str);