function setupListener(){
  var canvas = document.getElementById("terrain");
  anim = new Animation(canvas);
  document.getElementById("stopStartBall").addEventListener("click",start);
  document.getElementById("addBall").addEventListener("click",addBall);
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

window.addEventListener("load",setupListener);
