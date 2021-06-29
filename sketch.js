var bgimg
var bg

function Preload(){
bgimg = loadImage("snow2.jpg")
}

function setup() {
  createCanvas(800,400);
    createSprite(400, 200, 50, 50);
    
  bg = createSprite(400,200,100,100);
   bg = loadImage(bgimg)
   
  
  
}

function draw() {
  background("red");  
  drawSprites();
  
}