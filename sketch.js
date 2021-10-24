var ground, groundImg;
var slowpoke, run;
var invisiwall1
var invisiwall2
function preload(){
  groundImg = loadImage("path.png");
  run = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  ground = createSprite(200,200)
  ground.addImage(groundImg);
  ground.velocityY = 4;
  ground.scale = 1.2;
  slowpoke = createSprite(200, 350,20,20)
  slowpoke.addAnimation("running", run)
  slowpoke.scale = 0.07;
  invisiwall1 = createSprite(15,200,30,10000000000000000000000);
  invisiwall1.visible = false
  invisiwall2 = createSprite(385,200,30,10000000000000000000000);
  invisiwall2.visible = false


}

function draw() {
  background(120);
  console.log(World.mouseX)
  slowpoke.x = mouseX
  slowpoke.collide(invisiwall1)
  slowpoke.collide(invisiwall2)

  if(ground.y > 400){
    ground.y = height/2
  }
  drawSprites();
}
