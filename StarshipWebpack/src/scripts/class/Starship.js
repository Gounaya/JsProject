/*
  CLASS STARSHIP < MOBILE
*/
import Mobile from './Mobile.js';
import starSrc from "../../images/vaisseau-ballon-petit.png";


export default class Starship extends Mobile  {
  constructor(x, y) {
    super(x, y, starSrc, 0, 8);
    this._moving = this.MoveState.NONE;
  }



  get up(){
     return this._moving == this.MoveState.UP;
  }

  get down(){
    return this._moving == this.MoveState.DOWN;
  }

  move(canvas){
    if(this.x >= 0 && this.x <= canvas.width && this.y >= 0 && this.y <= canvas.height){
      super.move(canvas);
    }
  }
}
