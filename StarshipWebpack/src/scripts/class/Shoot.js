/*
  CLASS SHOOT < MOBILE
*/
import Mobile from './Mobile.js';
import shootSrc from "../../images/shoot.png";


export default class Shoot extends Mobile {
  constructor(x, y) {
      super(x, y, shootSrc, 8, 0);
  }

  move(canvas){
    this.moveRight();
    super.move(canvas);
    if(this.x >= canvas.width-50){
      this.todelete = true;
    }
  }

  isInCollisionWith(saucer){
    if(!saucer.stop && this.x + 32 >= saucer.x && this.x + 32 <= saucer.x + 48 && this.y >= saucer.y && this.y <= saucer.y + 36){
      return true;
    }
    return false;
  }

  isInCollision(saucers){
    let rsaucers =  saucers.filter(s => this.isInCollisionWith(s));
    rsaucers.forEach(s => s.dead());
    if(rsaucers.length > 0){
      this.toearn = true;
      this.todelete = true;
    }
    return rsaucers;
  }
}
