class Ball {
  constructor(x,y,deltaX,deltaY) {
    this.x = x;
    this.y = y;
    this.deltaX = deltaX;
    this.deltaY = deltaY;
    this.img = new Image();
    this.img.src = "images/balle.png";
    this.img.width = "48px";
    this.img.height = "48px";
  }

  draw(context){
    context.clearRect(this.x-50,this.y-50,100,100);
    context.drawImage(this.img,this.x,this.y);
  }

  moveA(canvas){
    if((this.x >= canvas.width-44) || (this.x <= 0)){
      // not possible move on X
      this.deltaX = -this.deltaX;
    }
    if((this.y >= canvas.height-44)  || (this.y <= 0)){
      // not possible move on Y
      this.deltaY = -this.deltaY;
    }
    this.x += this.deltaX;
    this.y += this.deltaY;
  }
}

class Animation {
  constructor(canvas) {
    this.canvas = canvas;
    this.ball = new Ball(canvas.width/2, canvas.height/2,canvas.width/200, canvas.height/200);
  }

  start(){
    this.request = window.requestAnimationFrame(this.moveAndDrawBall.bind(this));
  }

  stop(){
    window.cancelAnimationFrame(this.request);
  }

  moveAndDrawBall(){
    this.ball.moveA(this.canvas);
    this.ball.draw(this.canvas.getContext("2d"));
    this.request = window.requestAnimationFrame(this.moveAndDrawBall.bind(this));
  }
}
