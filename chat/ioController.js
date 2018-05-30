class ioController {
  constructor(io) {
    this.clients = new Array();
    this.io = io;
  }

  connect(){
    console.log('User connected');
    this.register();
  }

  register(){
    this.clients.push(1);
  }

  handleMessage(message){
    if(this.isFull()){
      this.io.emit('chat message', ">>> "+message);
    }else{
      this.io.emit('chat message', "Wait for a secund client");
    }
  }

  handleDisconnect(){
    console.log("User disconnected");
    this.io.emit('chat message', "Other client disconnected");
    this.clients.splice(1,1);
  }

  isFull(){
    return this.clients.length >= 2;
  }
}

module.exports = ioController;
