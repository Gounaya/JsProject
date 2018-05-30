function setupListener(){
  var canvas = document.getElementById("terrain");
  anim = new Animation(canvas);
  document.getElementById("stopStartBall").addEventListener("click",start);
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

window.addEventListener("load",setupListener);
