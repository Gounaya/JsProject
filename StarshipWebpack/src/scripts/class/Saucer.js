/*
  CLASS SAUCER < MOBILE
*/
import Mobile from './Mobile.js';
import saucerSrc from "../../images/flyingSaucer-petit.png";


export default class Saucer extends Mobile {
  constructor(x, y) {
    super(x, y, saucerSrc, 3, 0);
    this.moveLeft();
  }

  move(canvas){
    super.move(canvas);
    if(this.x <= 0){
      this.todelete = true;
    }
    if(this.y >= canvas.height-50){
      this.todeletewithoutpoint = true;
    }
  }

  dead(){
    this.moveDown();
    this.speedX = 0;
    this.speedY = 3;
    this.stop = true;
  }
}
