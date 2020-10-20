
var score;
var bananaImage;
var obstacleImage;
var obstacleGroup;
var score;
var playerRunning;
var foodGroup;
var invisbleGround;
function preload(){
  backgroundImage=loadImage("jungle.jpg");
   playerRunning=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
bananaImage= loadImage("banana.png");
  
obstacleImage= loadImage("stone.png");
}

function setup() {
  
  createCanvas(600, 200);
  
  score=0;
  
  foodGroup = new Group();
  
  obstacleGroup = new Group();
  
  background1 = createSprite(200,-40,400,20);
  background1.addImage("background1",backgroundImage);
  background1.velocityX = -2;
  background1.x=background1.width/2;
  
  invisibleGround = createSprite(200,200,400,10);
  invisibleGround.visible = false;
  
 monkey = createSprite(50,180,20,50);
  monkey.addAnimation("running", playerRunning);
  monkey.scale = 0.1;
  
}

function draw() {
  background("white");
  

  
  monkey.collide(invisibleGround);

  if(monkey.isTouching(foodGroup)){
      foodGroup.destroyEach();
    score = score + 2; }
  
  if(monkey.isTouching(obstacleGroup)){
    monkey.scale=0.1;  
    score=score-2;
    obstacleGroup.destroyEach();
  }
  if (background1.x < 0){
    background1.x = background1.width/2;
  }
  
   if(keyDown("space")) {
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  switch(score){
    case 10: monkey.scale=0.02;
      break;
    case 20: monkey.scale=0.04;
      break;
    case 30: monkey.scale=0.06;
      break;
    case 40: monkey.scale=0.08;
      break;
  }
  spawnBananas();
  spawnObstacles();
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white")
  text("Score: "+ score, 510,30)
  
}
function spawnBananas() {
  if(frameCount % 60 === 0) {
    var banana = createSprite(600,75,10,40);
    banana.velocityX = -4;
    banana.addImage(bananaImage);
    banana.scale=0.05;
    foodGroup.add(banana);
      
  }}
function spawnObstacles() {
  if(frameCount % 80 === 0) {
    var obstacle = createSprite(600,170,10,40);
    obstacle.velocityX = -4;
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.05;
    obstacleGroup.add(obstacle);
  }}