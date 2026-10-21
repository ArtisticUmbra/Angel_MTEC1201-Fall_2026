//Declare Global Variables
let circleSize = 600;
let circleColor = 255;
let circlePosY = 600;
let bgColor = 64;

function setup()
{
  createCanvas(1000, 600);

  noStroke();
}

function draw()
{
  background(bgColor);

  ellipse(width / 2, circlePosY, circleSize, circleSize);

  circleSize --;
  circleColor -= 0.5;
  circlePosY --;
  fill(circleColor);
}