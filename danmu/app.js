var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(80);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  socket.emit('welcome',"欢迎加入弹幕系统");
  socket.on('chat', function (data) {
    	//  console.log(data);
    	io.emit('toall',data);
  });
});