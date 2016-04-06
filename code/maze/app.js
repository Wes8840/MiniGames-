var maze;
var mazeImg;

function setup() {
  createCanvas(200,200);

  maze = createSprite(100, 100);
  mazeImg = loadImage("http://i.filmot.org/7xDfW51.png");
  maze.addImage(mazeImg);
}

function draw() {
  background(255, 255, 255);
  drawSprites();
  keycheck();
  mazeActivate();
} 
function mazeActivate() {
  if(maze.overlapPixel(mouseX, mouseY)){
    maze.remove();
    alert("Game Over. Please press refresh to play again.");
  }
}
function keycheck() {
    if (keyDown(80)){
        !mazeActivate();
    }
}