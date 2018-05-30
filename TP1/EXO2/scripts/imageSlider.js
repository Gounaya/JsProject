
/*
 * define here type ImageSlider
 */
function ImageSlider(canvas){
  this.canvas = canvas;

  this.initImages = function(img1,img2){
    this.img1 = new Image();
    this.img2 = new Image();
    this.img2.addEventListener("load", this.doIt.bind(this) );
    this.img1.src = img1;
    this.img2.src = img2;
  }
  this.draw = function(){
    this.canvas.getContext("2d").clearRect(0,0,this.canvas.width,this.canvas.height);
    /* IMG 1 */
    this.canvas.getContext("2d").drawImage(this.img1,0,0);
    /* IMG 2 */
    this.canvas.getContext("2d").drawImage(this.img2,this.position,0,this.img2.width,this.img2.height,this.position,0,this.img2.width,this.img2.height);
    /* RED  */
    this.canvas.getContext("2d").fillStyle = "rgb(255,0,0)";
    this.canvas.getContext("2d").fillRect(this.position-4,0,4,this.img1.height,0);
  }
  this.init = function(){
    this.position = this.img1.width/2;
    this.canvas.addEventListener("keydown",this.keyActionHandler.bind(this));
  }

  this.doIt = function(){
    this.init();
    this.canvas.width = this.img1.width;
    this.canvas.height = this.img1.height;
    this.draw();
  }

  this.keyActionHandler = function(ev){
    ev.preventDefault();
    switch (ev.key) {
      case "ArrowLeft":
      case "Left":
        if(this.position>=10){
          this.position -= 10;
        }
        break;
      case "ArrowRight":
      case "Right":
        this.position += 10;
        break;
      case "X":
      case "x":
        this.position = this.img1.width/2;;
        break;
      default:
    }
    this.draw();
  }
}
