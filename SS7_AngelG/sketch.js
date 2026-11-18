/*
Angel Gonzalez
""
{an original class with at least two original methods
at least three objects instantiated by the class
annotations as //comments in the sketch, explaining what each part does}
*/

//Sound Variables
let theme;
let knock;
let pixel;
let hit;
let static;
//Image Variables
let die;
//Misc Variables
let transparancy = 250;
let stallX = 365;
let stallY = 250;
let countWH = 200;
let count = 0;
let countGROW = 1;
let countCHECK = false;
let bounceCHECK = false;
let randomC;
let back = [];
let r = 0;
let g = 0;
let b = 0;
let r2 = 225;
let g2 = 225;
let b2 = 225;
let halfpoint = false;
let HPSound;
back.length = 10;
async function setup() {
  let display = createCanvas(750, 500);
  display.position((windowWidth - width)/2, (windowHeight - height)/2);

  rect(350, 250, 300, 300);

  for(let i = 0; i < back.length; i++)
  {
  back[i] = new BGShapes(stallX, stallY, countWH, countWH); //100-50, 100+50
  }
  //Load Variables
  font = await loadFont('assets/ARCADE.TTF');
  die = await loadImage('assets/YOU_WONT_DIE.png');
  theme = await loadSound('assets/pixel.mp3');
  knock = await loadSound('assets/knocking.mp3');
  pixel = await loadSound('assets/pixel.mp3');
  hit = await loadSound('assets/pixE.mp3');
  HPSound = await loadSound('assets/CP.mp3');
  static = await loadSound('assets/static.mp3');
}

function draw() {
  pixelDensity(1);
  background(210);
    fill(2, 36, 11);
    ellipseMode(CENTER);
    rectMode(CENTER);
  rect(width/2, height/2, 720, 470);
  for (let i = 0; i < back.length; i++)
    {
      back[i].display();
      
      back[i].bounce();

      
    } 
    fill(0,0,0);
    fill(r2, g2, b2);
    textFont(font);
    textSize(60);
    text(count, 28, 65);
  //text(`x ${int(mouseX)} y ${int(mouseY)}`, 50, 50);
  textSize(30);
  fill(225);
  text('REACH 100 TO WIN!', 480, 50); 
  fill(225, 225, 225, transparancy);
  textSize(20);
  text('CLICK THE BALL TO', 35, 435); 
  text('INCREASE THE SCORE', 30, 455);

  if(count >= 1)
  {
    if(!pixel.isPlaying())
    {
      pixel.play();
      
    }
    transparancy = 0;
  }
  if(count == 50 && halfpoint == false)
  {
    //HPSound.play();
    r2 = 250;
    g2 = 209;
    b2 = 50;
    halfpoint == true;
  }
  else if(halfpoint == true)
  {
    HPSound.stop();
  }
  if(count >= 100)
  {
    pixel.stop();
    background(0);
    textSize(50);
    fill(250);
    text("IS YOUR DOOR LOCKED", 140, 400);
    image(die, 225, 100, 310, 200); //X: 225 Y:100 W: 310 H: 200
    if(!knock.isPlaying())
    {
      knock.play();
    }
    if(!static.isPlaying())
    {
      static.play();
      
    }
  }
}
class BGShapes
{
  constructor(tempX, tempY, tempW, tempH)
  {
    this.x = tempX;
    this.y = tempY;
    this.w = tempW;
    this.h = tempH;
  }
display()
{
  for (let i = 0; i < 10; i++)
  {
    randomC = random(0,50);
    if(randomC >= 40 && randomC <= 45)
    {
      r = 220;
      g = 220;
      b = 220;
    }
    else if(randomC >= 46)
    {
      r = 0;
      g = 0;
      b = 0;
    }
    else
    {
      r = 134;
      g = 1;
      b = 1;
    }
  }
  fill(r, g, b);
  ellipse(this.x,this.y, this.w, this.h);

}
bounce()
{
  if(this.w > 250)
  {
    //countWH -= countGROW;
    countCHECK = true;
  }
  if(this.w < 201)
  {
    //countWH += countGROW;
    countCHECK = false;
  }
  if(countCHECK == false)
  {
    this.w++;
    this.h++;
  }
  else
  {
    this.w--;
    this.h--;
  }
}
}
function mousePressed()
{
  if((mouseX >= stallX-50 && mouseX <= stallX+50) && (mouseY >= stallY-50 && mouseY <= stallY+50))
  {
    count++;
    hit.play();
  }


}
