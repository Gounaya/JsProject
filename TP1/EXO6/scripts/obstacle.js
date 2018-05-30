class Obstacle {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.MoveState = { LEFT : 0, RIGHT : 1, UP : 2, DOWN : 3, NONE : 4};
    this.moving = this.MoveState.NONE;
  }

  clear(context){
    context.clearRect(this.x, this.y, this.width, this.height);
  }

  draw(context){
    context.fillStyle = "black";
    context.fillRect(this.x, this.y, this.width, this.height);
  }

  isInside(x, y){
    if(x >= this.x - 48 && x <= this.x + this.width && y >= this.y - 48 && y <= this.y + this.height){
      return true;
    }
    return false;
  }

  moveLeft(){
    this.shiftX = - 10;
    this.moving = this.MoveState.LEFT;
  }

  moveRight(){
    this.shiftX = + 10;
    this.moving = this.MoveState.RIGHT;
  }

  moveUp(){
    this.shiftY = - 10;
    this.moving = this.MoveState.UP;
  }

  moveDown(){
    this.moving = this.MoveState.DOWN;
    this.shiftY = + 10;
  }

  move(canvas){
    if (this.moving === this.MoveState.LEFT) {
      this.x = Math.max(0, this.x + this.shiftX);
    }
    if (this.moving === this.MoveState.RIGHT) {
      this.x = Math.min(canvas.width - this.width, this.x + this.shiftX);
    }
    if (this.moving === this.MoveState.UP) {
      this.y = Math.max(0, this.y + this.shiftY);
    }
    if (this.moving === this.MoveState.DOWN) {
      this.y = Math.min(canvas.height - this.height, this.y + this.shiftY);
    }
  }

  stopMove(){
    this.moving = this.MoveState.NONE;
  }
}
