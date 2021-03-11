
var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200, 800);


  movingRect = createSprite(800, 400, 80, 30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";

  trex = createSprite(50, 300, 50, 80);
  trex.shapeColor = "grey";

  obstacle = createSprite(200, 300, 40, 60);
  obstacle.shapeColor = "grey";



}
function draw() {
  background(0, 0, 0);
  obstacle.x = mouseX;
  obstacle.y = mouseY;

  if (isTouching(movingRect, fixedRect)) {
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }

  else {
    movingRect.shapeColor = "green";

    fixedRect.shapeColor = "green"
  }

  if (isTouching(trex ,obstacle) ){
    obstacle.shapeColor = "red";
    trex.shapeColor ="red";
  }else{
    obstacle.shapeColor = "grey";
    trex.shapeColor = "grey";
  }


  //bounceOff(movingRect,fixedRect)
  drawSprites();
}

//how to do a task
// parameter - food and water to do the task
function isTouching(object1, object2) {
  if (object1.x - object2.x < object2.width / 2 + object1.width / 2
    && object2.x - object1.x < object2.width / 2 + object1.width / 2
    && object1.y - object2.y < object2.height / 2 + object1.height / 2
    && object2.y - object2.y < object2.height / 2 + object1.height / 2) {

    return true;
  }
  else {
    return false;
  }
}


