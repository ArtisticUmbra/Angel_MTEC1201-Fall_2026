//time variables
let currentTime;
let initiateTime;
let TVA = 0;
let spotx = 100;
let smile;
let frown;
//coordinate variables
let smileX = 35000;
let smileY = 35000;
let frownX = 35000;
let frownY = 35000;
let freeX = 50;
let stareX = 100;
let lookX = 200;
//font variable
let fontTV;
let static;
let staticPLAYING;
let click;
let staticE;
let staticE2;
let check;

async function setup() {
  let convey = createCanvas(700, 425);
  convey.position((windowWidth - width)/2, (windowHeight - height)/2);
  //load font
  fontTV = await loadFont('HomeV.ttf');
  //load image
  smile = await loadImage('Smile.png');
  frown = await loadImage('Frown.png');
  static = await loadImage('Static.png');
  staticE = await loadImage('StaticE.png');
  staticE2 = await loadImage('StaticE2.png');
  //load sound
   click = await loadSound('Click.mp3');
  staticPLAYING = await loadSound('Static.mp3');
  check = await loadSound('Ding.mp3');
  staticPLAYING.play();
   

  }


//remember: 1000 = 1 second
function draw() {
  //background(9, 29, 31);
background(5,5,5);
  //sounds
//variables
stroke(0);
  //text
  strokeWeight(6);
  fill(66, 43, 255, 95);
  textSize(70);
  textFont(fontTV);
  text('FREE YOUR MIND', freeX, 110);
  //text 2
  textSize(32);
  fill(200,200,200);
  text('Please stare at the screen.', stareX, 235);
  text('Do not look away.', lookX, 320);
  //faces
  image(smile,smileX,smileY); //x = 350
  image(frown, frownX, frownY);
  //placeholder texts for coordinates
  //text(`${mouseX}, ${mouseY}`, 20, 40);
  currentTime = int(millis()/100);
  //text(currentTime, 400, 40);

  
  if(currentTime >= 50)
  {
      freeX = 10000;
      stareX = 10000;
      lookX = 10000;
  }
  if((currentTime >= 90))
  {
  
  if((currentTime%2) == true)
      {
       
        smileX = 35;
        smileY = -50;
        frownX = 35000;
        frownY = 35000;
        TVA++;
        click.play();
      }
      else if((currentTime%2) == false)
      {
         
        smileX = 35000;
        smileY = 35000;
        frownX = 35;
        frownY = -50;
        TVA++;
        
      }
    }
    

if(TVA >= 370)
      {
        
        smileX = 35000;
        smileY = 35000;
        frownX = 35000;
        frownY = 35000;
        click.stop();
      }
if(currentTime >= 280)
{
   fill(120, 19, 4);
  textSize(65);
  text('GOOD NIGHT', 160, 208);
  fill(255);
  textSize(25);
  text('You have completed the REAL SLEEP program', 45, 320);
}
    image(staticE2, random(0, 5), random(0,500), 800, 500, 50);
    image(staticE, random(0, 20), random(0,1000), 800, 500, 50);
    image(staticE2, random(0, 5), random(0,500), 800, 500, 50);
    image(staticE2, random(0, 5), random(0,5000), 800, 500, 50);

  
//play for 10 seconds


}
