let lix;
let liy;
let rix;
let riy;
let usertext;
let utext;
let music;
let bell;
let tl = 300;
let tl2;
let eyecolor = 200;

function preload(){
  music = loadSound('Creepy Music Box.mp3');
  bell = loadSound('Bell.mp3');
}

function keyPressed(){
if(key == 'k')
{
  eyecolor = 0;
  music.play();
  fill(255);
  textSize(100);
  tl2 = 150;
  
}
else
{
  tl2 = 5000;
}
}

function setup() {
  createCanvas(800, 600);
   usertext = createInput('');
usertext.position(10, 560);
  usertext.size(100,20);

}

function draw() {
  background(0);
   textFont('Helvetica');
//left eye
fill(eyecolor);
ellipse(250,250,160,80); //250, 250
//left iris
fill(0);
ellipse(lix,liy,45,45);
//right eye
fill(eyecolor);
ellipse(550,250,160,80);
//right iris
fill(0);
ellipse(rix,riy,45,45); //550, 250
fill(200);
//variables
lix = random(243, 250);
liy = random(247, 250);
rix = random(545, 550);
riy = random(247, 250);
utext = usertext.value();
//text
fill(255);
textSize(100);
text('WHO I AM', tl2, 250);
//usertext
textSize(15);
fill(90);
text('Press k',750,600);

text(utext, 300,500);
if(utext == 'Who are you?')
{
  fill(184,0,3);
   textSize(13);
      text('I will change depending on your perception. I can be strong and healthy or weak and broken.',150,380);
  text('I will only appear when glass is what you stare at. What am I?',250, 400);
}
else if(utext == 'A reflection')
{
  textSize(30);
  fill(183,0,3);
  tl = 5000;
  text('Do you know of the monster you have become, Maria?', 80, 400);
  bell.play();
}
else
{
fill(255);
textSize(100);
text('ASK', tl, 150);
}
}

