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
    this.balls = new Array();
    this.balls[0] = new Ball(Math.random()*this.canvas.width, Math.random()*this.canvas.height,(Math.random()*this.canvas.width)/200, (Math.random()*this.canvas.height)/200);
  }

  addBall(){
    this.balls[this.balls.length] = new Ball(Math.random()*(this.canvas.width-50), Math.random()*(this.canvas.height-50),(Math.random()*this.canvas.width)/200, (Math.random()*this.canvas.height)/200);
  }

  start(){
    this.request = window.requestAnimationFrame(this.moveAndDrawBall.bind(this));
  }

  stop(){
    window.cancelAnimationFrame(this.request);
  }

  moveAndDrawBall(){
    this.canvas.getContext('2d').clearRect(0,0,this.canvas.width,this.canvas.height);
    this.balls.forEach( e => e.moveA(this.canvas));
    this.balls.forEach(e => e.draw(this.canvas.getContext("2d")));
    this.request = window.requestAnimationFrame(this.moveAndDrawBall.bind(this));
  }
}
