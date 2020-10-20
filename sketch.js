var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(790,0, 50, 50);
  fixedRect = createSprite(350, 200, 50, 50);
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
    movingRect.velocityX = -3
  movingRect.velocityY = 1.5
  fixedRect.velocityX = 3
  fixedRect.velocityY = -1.5
}

function draw() {


  background(255,255,255);  
  drawSprites();
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
    && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
  movingRect.velocityX = movingRect.velocityX *(-1)
  movingRect.velocityy = movingRect.velocityY *(-1)
  fixedRect.velocityX = fixedRect.velocityX *(-1)
  fixedRect.velocityy = fixedRect.velocityY *(-1)
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
}