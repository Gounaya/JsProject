/*
  CLASS GAME
*/
import Starship from './Starship.js';
import Saucer from './Saucer.js';
import Shoot from './Shoot.js';


export default class Game {
  constructor(width, height, canvas) {
      this._width = width;
      this._height = height;
      this.canvas = canvas;
      this.starship = new Starship(40, height/2);
      this.saucers = new Array();
      this.shoots = new Array();
      this.score = 0;
  }

  /* GETTERS */

  get width(){
    return this._width;
  }

  get height(){
    return this._height;
  }

  addSaucer(){
    let saucer = new Saucer(this._width, Math.random()*this.canvas.height);
    this.saucers.push(saucer);
    document.getElementById("nouvelleSoucoupe").blur();
  }

  addSaucerI(){
    if(Math.random()<0.5){
      let saucer = new Saucer(this._width, Math.random()*this.canvas.height);
      this.saucers.push(saucer);
    }
  }

  addSaucerInfinite(){
    window.setInterval(this.addSaucerI.bind(this),750);
    document.getElementById("flotteSoucoupes").blur();
  }

  addShoot(){
    let shoot = new Shoot(this.starship.x+45,this.starship.y+10);
    this.shoots.push(shoot);
  }

  removeShoot(shoot){
    this.shoots.splice(this.shoots.indexOf(shoot),1);
  }

  removeSaucer(saucer){
    this.saucers.splice(this.saucers.indexOf(saucer),1);
  }

  addScore(score){
    this.score += score;
    document.getElementById("score").innerHTML = this.score;
  }

  draw(){
    let context = this.canvas.getContext("2d");
    this.canvas.width = this._width;
    this.canvas.height = this._height;
    this.starship.draw(context);
    this.saucers.forEach( s => s.draw(context) );
    this.shoots.forEach( s => s.draw(context) );
    this.shoots.filter( s => s.toearn == true).forEach( s => this.addScore(1200) );

    this.shoots.filter( s => s.todelete == true).forEach( s => this.removeShoot(s) );
    let saucersToDown = new Array();
    this.shoots.filter( s => saucersToDown.push(s.isInCollision(this.saucers)) );
    this.saucers.filter( s => s.todelete == true).forEach( s => this.addScore(-1000) );
    this.saucers.filter( s => s.todelete == true).forEach( s => this.removeSaucer(s) );
    this.saucers.filter( s => s.todeletewithoutpoint == true).forEach( s => this.removeSaucer(s) );
  }

  keyDownActionHandler(event){
    switch (event.key) {
          case "ArrowUp":
            this.starship.moveUp();
            break;
          case " ":
            this.addShoot();
            break;

          case "ArrowDown":
            this.starship.moveDown();
            break;
          default:
            return;
      }
      event.preventDefault();
  }

  keyUpActionHandler(event){
    switch (event.key) {
          case "ArrowUp":
          case "ArrowDown":
              this.starship.stopMove();
              break;
          default:
           return;
      }
      event.preventDefault();
  }

  moveAndDraw(){
    let canvas = this.canvas;
    this.draw();
    this.starship.move(canvas);
    this.saucers.forEach(s=>s.move(canvas));
    this.shoots.forEach(s=>s.move(canvas));
    this.request = window.requestAnimationFrame(this.moveAndDraw.bind(this));
  }

  start(){
    this.request = window.requestAnimationFrame(this.moveAndDraw.bind(this));
  }

  stop(){
    window.cancelAnimationFrame(this.request);
  }

}

 //export default theGame = new Game(800, 400, document.getElementById("stars"));
