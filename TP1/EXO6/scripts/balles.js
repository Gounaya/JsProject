function setupListener(){
  var canvas = document.getElementById("terrain");
  document.getElementById("stopStartBall").addEventListener("click",start);
  document.getElementById("addBall").addEventListener("click",addBall);
  createObstacle(canvas.getContext('2d'), 325,175,50,50);
  anim = new AnimationWithObstacle(canvas,obstacle);
  window.addEventListener('keydown', anim.keyDownActionHandler.bind(anim));
  window.addEventListener('keyup', anim.keyUpActionHandler.bind(anim));
}

function start(){
  if(this.dataset.click == "stop"){
    anim.start();
    this.dataset.click = "start";
  }else{
    anim.stop();
    this.dataset.click = "stop";
  }
}

function addBall(){
  anim.addBall();
}

function createObstacle(context, x, y, width, height){
  obstacle = new Obstacle(x, y, width, height);
  obstacle.draw(context);
}

window.addEventListener("load",setupListener);
