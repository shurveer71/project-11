var ship,ship_moving
var sea,sea_moving1
function preload(){
  ship_moving1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

  sea_moving=loadAnimation("sea.png"); 
}

function setup(){
  createCanvas(400,400);
 
  sea=createSprite(200,200,400,400);
  sea.addAnimation("moving",sea_moving);
  sea.scale=0.5

  ship=createSprite(100,200,30,30);
  ship.addAnimation("moving1",ship_moving1);
  ship.scale=0.2

}

function draw() {
  background("pink");
  sea.velocityX=-3

if(sea.x < 0){
sea.x = sea.width/8;
}
drawSprites();
}