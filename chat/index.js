var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var ioControllerC = require('./ioController');
var ioController = new ioControllerC(io);

app.get('/chat', function(req, res){
  if(ioController.isFull()){
    res.sendFile(__dirname + "/full.html");
  }else{
    res.sendFile(__dirname + "/index.html");
  }
});

app.get('*', function(req, res){
  res.sendFile(__dirname + "/error.html");
})

io.on('connection', function (socket){

    ioController.connect();

  socket.on('disconnect', function(){
    ioController.handleDisconnect();
  });

  socket.on('chat message', function(msg){
    ioController.handleMessage(msg);
  });

});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
