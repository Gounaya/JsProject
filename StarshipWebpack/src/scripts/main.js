/*
  MAIN FUNCTION
*/
import Game from './class/Game.js';

function setupListener(){
  let theGame = new Game(1200,600,document.getElementById("stars"));
  theGame.draw();
  theGame.start();
  initEvents(theGame);
}

function initEvents(theGame){
  window.addEventListener('keydown', theGame.keyDownActionHandler.bind(theGame));
  window.addEventListener('keyup', theGame.keyUpActionHandler.bind(theGame));
  document.getElementById("flotteSoucoupes").addEventListener("click",theGame.addSaucerInfinite.bind(theGame));
  document.getElementById("nouvelleSoucoupe").addEventListener("click",theGame.addSaucer.bind(theGame));
}

window.addEventListener("load",setupListener);
