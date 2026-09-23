/*Angel G
"An investigative night."
This sketch was moreso a focus on figuring out how to handle the new code I've learned as well as how to use sound as a tool. For the horror theme I'm targeting, I was able to hide a message that appears in a sort of "supernatural" way.
*/
let lightswitch = 0;
let light = 200;
let dark = 360;
let fl = 50;
let texton = 70;
let textoff = 5000;
let opacity = 255;
let see = 1200;
let eye = 1200;
let bl = 360;
let blacklight = 0;
let ambience = 0;

function preload() {
  lightswitch = loadSound('lightswitch.mp3');
  blacklight = loadSound('Click.mp3');
  ambience = loadSound('RoomTone.mp3');
}

function setup() {
  createCanvas(1000, 700);
    ambience.play();
}

function draw() {
  background(fl);

//blacklight
noStroke();
fill(127, 0, 255,50);
bl = bl - 1;
circle(mouseX, mouseY, bl);
//Wall Drawings
fill(fl);
stroke(fl);
strokeWeight(15);
textFont('Verdana', 150, 150);
text('I SEE YOU',see,450);
//box
stroke(0);
strokeWeight(2.5);
fill(87, 59, 42, opacity);
rect(60,470,210,140)
//eye
stroke(fl);
fill(0,0,0,0);
strokeWeight(5);
ellipse(eye, 250, 150, 65);//x,y,w,h
circle(eye, 250, 50);
//window
  stroke(0);
  strokeWeight(3);
  fill(1, 77, 115); //blue box
  rect(300, 600, 700, 98);
  fill(56, 38, 59); //green box
  rect(0, 600, 300, 98);
//shading
noStroke();
fill(245, 196, 83,opacity - 185);
ellipse(500,150,150,150);
fill(245, 196, 83,opacity - 205);
ellipse(500,150,250,250);
fill(245, 196, 83,opacity - 225);
ellipse(500,150,300,300);


//ceiling light
stroke(0);
strokeWeight(2);
line(500,0,500,100); //x1,y1,x2,y2
fill(245, 196, 83,opacity);
strokeWeight(1);
circle(500,145,90);





//text

strokeWeight(4);
  fill(255,255,255);
textFont('Courier New',26);
text('Press "L" to toggle the lights.',360,640);
text('Press "B" to refresh blacklight.', 360, 680);
strokeWeight(4);
fill(2, 212, 61);
text('LIGHT ON',texton,660);
fill(207, 0, 28);
text('LIGHT OFF',textoff, 660);


}

function keyPressed() {
  if (key === 'l' && fl >= 49) {
lightswitch.play();
fl -= 40;
light = 0;
dark = 0;
textoff = 70;
texton = 5000;
opacity = 0;
opacitydraw = 0;

  }
  else if (key === 'l' && fl <= 51) {
    lightswitch.play();
    fl += 40;
    light = 120;
    dark = 360;
    textoff = 5000;
    texton = 70;
    opacity = 255;
    see = 120;
    eye = 750;
  }
if (key === 'b')
{
  bl = 360;
  blacklight.play();
}
}
