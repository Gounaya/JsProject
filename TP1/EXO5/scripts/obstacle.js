class Obstacle {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
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
}
