/*
_________________________________
Angel Gonzalez
"Familiar Faces"
Click the mouse.
*/
//Sound Variables
let press;
let staticS;
//Image Variables
let message = ["...", "Do you recognize them?", "Your mind is broken.", "Your memories betray you.", "I am sorry.", "You have to remember.", "I won't hurt you."];
let messageValue = 0;
let faces = [];
let faceValue = 0;
let static;
//Misc Variables
let section = "diagnosis";
let font;
let textPhase = 250;
let phaseCheck = 0;
async function setup() {
  let display = createCanvas(750, 500);
  display.position((windowWidth - width)/2, (windowHeight - height)/2);
  faces[0] = loadImage("assets/Face1.png");
  faces[1] = loadImage("assets/Face2.png");
  faces[2] = loadImage("assets/Face3.png");
  static = loadImage("assets/static2.gif");
  press = loadSound("assets/button.mp3");
  font = loadFont("assets/VCR.ttf");
}

function draw() {
  if(section == "diagnosis")
  {
    diagnosis();
  }
  else if(section == "success")
  {
    success();
  }
  else if(section == "failure")
  {
    failure();
  }
}


function diagnosis()
{
  textFont(font);
background(static);
fill(250,250,250, textPhase);
//text(`x: ${int(mouseX)} y: ${int(mouseY)}`, 50, 50);
image(faces[faceValue], width/3.8, height/4, faces[faceValue].width/2, faces[faceValue].height/2);
textSize(30);
text("Click to see their faces", 165, 70);
fill(250);
text(message[messageValue], 165, 420);
if(phaseCheck >= 1)
{
  textPhase = 0;
}

}

function mousePressed()
{
  if(section == "diagnosis")
  {
    press.play();
  faceValue = int(random(0, faces.length));
  messageValue = int(random(0, message.length));
  phaseCheck++;
  }
}

