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
    if((this.x + this.deltaX) >= canvas.width-44 || (this.x + this.deltaX) <= 0){
      // not possible move on X
      this.deltaX = -this.deltaX;
    }
    if((this.y + this.deltaY) >= canvas.height-44 || (this.y + this.deltaY) <= 0){
      // not possible move on Y
      this.deltaY = -this.deltaY;
    }
    this.x += this.deltaX;
    this.y += this.deltaY;
  }

  collisionWith(obstacle){
      return obstacle.isInside(this.x, this.y);
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

class AnimationWithObstacle extends Animation{
  constructor(canvas, obstacle) {
    super(canvas);
    this.obstacle = obstacle;
  }

  moveAndDrawBall(){
    var obstacle = this.obstacle;
    this.balls
            .filter(ball => ball.collisionWith(obstacle))
            .forEach(ball => this.balls.splice(this.balls.indexOf(ball),1));
    this.canvas.getContext('2d').clearRect(0,0,this.canvas.width,this.canvas.height);
    this.obstacle.draw(this.canvas.getContext('2d'));
    this.balls.forEach( e => e.moveA(this.canvas));
    this.balls.forEach(e => e.draw(this.canvas.getContext("2d")));
    this.request = window.requestAnimationFrame(this.moveAndDrawBall.bind(this));
    this.obstacle.move(this.canvas);
  }

  keyDownActionHandler(event){
    switch (event.key) {
          case "ArrowLeft":
              this.obstacle.moveLeft();
              break;
          case "ArrowRight":
            this.obstacle.moveRight();
            break;
          case "ArrowUp":
            this.obstacle.moveUp();
            break;
          case "ArrowDown":
            this.obstacle.moveDown();
            break;
          default:
            return;
      }
      event.preventDefault();
  }

  keyUpActionHandler(event){
    switch (event.key) {
          case "ArrowLeft":
          case "ArrowRight":
          case "ArrowUp":
          case "ArrowDown":
              this.obstacle.stopMove();
              break;
          default:
           return;
      }
      event.preventDefault();
  }
}
