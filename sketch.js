/* Angel G
"You have downloaded a virus!"
Throughout this semester, I want to attempt to explore any themes that could correlate to horror related topics or appear creepy to any viewers of the program, whether it's an original idea or a idea already in the genre that I can recreate or explore using coding. While this project isn't directly horror, the virus that's showcased is a bizarre idea that could be twisted into horror.
*/
function setup() {
  createCanvas(850, 500);
  background(0, 120, 215);
  //background area
  strokeWeight(0);
  //dirt
  fill(64,41,5);
  ellipse(580,590,1000,490);
  //hills
  fill(56, 128, 4);
  ellipse(100,400, 600,260); //left
  ellipse(500,500, 1000,300); //right
  //clouds
  fill(225,225,225);
  strokeWeight(2);
  ellipse(850,0,210,230);
  //windows
  fill(255);
  stroke(0);
  strokeWeight(4);
  rect(120,70, 600, 350);
  //Text
  fill(0);
  noStroke();
  textFont('Sans Serif');
  textSize(65);
  text('you are an idiot', 220,180);
  
}

function draw() {
  //Smiley Face
  stroke(0);
  fill(255);
  strokeWeight(4);
  circle(425,300,130);
  fill(0);
  circle(400,280,20);
  circle(445,280,20);
  //smile
  fill(255); //smile color
  strokeWeight(8)
  arc(425, 315, 90, 60, 0, PI); //smile
  //Smiley Face 2
  fill(255);
  strokeWeight(4);
  circle(230,300,130);
  fill(0);
  circle(205,280,20);
  circle(250,280,20);
  //smile
  fill(255); //smile color
  strokeWeight(8)
  arc(230, 315, 90, 60, 0, PI); //smile
  //Smiley Face
  fill(255);
  strokeWeight(4);
  circle(620,300,130);
  fill(0);
  circle(595,280,20);
  circle(640,280,20);
  //smile
  fill(255); //smile color
  strokeWeight(8)
  arc(620, 315, 90, 60, 0, PI); //smile
  

}


