let section = "selection";
let logo;
let font;
let land;
let startup;
let smilexp;
let popup;
let counter = 0;
let task;
let randomX;
let randomY;
let virus;
let tfont;
let media;
let wordprogram;
let vidfile;
let textdoc;
let message;
let restrict;
let padlock;
let outcomecheck = 0;
let lockNumber;
let crash;
let paper;
let ding;
let glitch;
let screenD;
let idiotAUDIO;
let note;
let papercount = 0;
let paperX = 5000;
let popupINV;
let currentTime;
let smile;
let smileINV;
let waveStatic;


//Selection, Game, Outcome
async function setup() {
  createCanvas(500, 500);
  let display = createCanvas(750, 500);
  display.position((windowWidth - width)/2, (windowHeight - height)/2);
  //image variables
  logo = await loadImage('assets/loading.gif');
  land = await loadImage('assets/Bliss.png');
  smilexp = await loadImage('assets/pixelL.png');
  popup = await loadImage('assets/IDIOT.png');
  popupINV = await loadImage('assets/IDIOTIV.png');
  task = await loadImage('assets/Media Center.png');
  textdoc = await loadImage('assets/document.png');
  message = await loadImage('assets/messanger.png');
  restrict = await loadImage('assets/Restricted.png');
  padlock = await loadImage('assets/Padlock.png');
  screenD = await loadImage('assets/glitch.gif');

  note = await loadImage('assets/YAAINote.png');
  smile = await loadImage('assets/smile.png');
  smileINV = await loadImage('assets/smileINV.png');

  //sound variables
  startup = await loadSound('assets/startup.mp3');
  crash = await loadSound('assets/crash.mp3');
  paper = await loadSound('assets/recycle.mp3');
  ding = await loadSound('assets/ding.mp3');
  idiotAUDIO = await loadSound('assets/youareanidiot.mp3');
  wavStatic = await loadSound('assets/static.mp3');
  //font variables
  font = await loadFont('assets/xp.ttf');
  tfont = await loadFont('assets/pixel.ttf');
  //separate check
}

function draw() {
  //IDEA 1 (Analog game corresponding to latest assignment {Pick the correct image})
  //IDEA 2 (Find the correct number of objects to win)
// Modes
  if(section == "selection")
  {
    selection();
  }
  else if (section == "game")
  {
    game();
  }
  else if (section == "hijack")
  {
    hijack();
  }
  else if (section == "outcome")
  {
    outcome();
  }
  else if (section == "hacked")
  {
    hacked();
  }

}
function keyPressed()
  {
   
   if(section == "selection" && key == ' ')
  {
    section = "game";
    startup.play();
  }
    else if((key == "r" || key == "R")) //reset everything
  {
    section = "selection";
    counter = 0;
    outcomecheck = 0;
    paperX = 5000;
    papercount = 0;
    idiotAUDIO.stop();
  }
}
function mousePressed()
{
  //CLICK ME APP
if(section == "game" && (mouseX >= 24 && mouseX <= 82) && (mouseY >= 195.5 && mouseY <= 254.5))
  {
    //section = "outcome";
    section = "hijack";
    wavStatic.stop();
  }
else if(section == "game" && (mouseX >= 32 && mouseX <= 70) && (mouseY >= 302.5 && mouseY <= 356.5)) //padlock
{
  if(keyIsDown(76))
  {
    wavStatic.loop();
    outcomecheck++;
  }
  else
  {
  ding.play();
  }
  
}
//PAPER FILE
else if(section == "game" && (mouseX >= 34 && mouseX <= 72) && mouseY >= 102.5 && mouseY <= 155.5)
{
  
  if((papercount%2) == false)
  {
  paper.play();
  image(note, 200, 20, 350, 430); 
  paperX = 200;
  }

else if((papercount%2) == true)
{
  paper.play();
  paperX = 5000;
  

}
}
  papercount++;
}

  // Separate Functions
  function selection()
  {
    let textcolor = random(220,255);
    background(0,0,0);
    fill(textcolor);
    image(logo, 120, -30, 500, 650);
    textFont(tfont);
    textSize(50);
    text("PRESS SPACE TO BOOT UP",160,340)
  }

  function game()
  {
    if(outcomecheck > 0)
  {
     background(screenD);
  }
  else
  {
     background(land);
  }
    fill(0, 92, 230);
    strokeWeight(0.5);
    rect(0, 465, 1000, 40);
    //right tab
    fill(0, 174, 230);
    rect(650, 465, 100, 40);
   
    //Task Bar
    fill(25, 150, 0); 
    strokeWeight(0.8);
    rect(-5,465, 130,34, 8);
    image(task, 6, 462, 40, 36);
    fill(230,230,230);
    textSize(25);
    text('start', 55, 487);
    //Random Apps
    image(textdoc, 24, 95, 55, 55); //document icon
    image(message, 662, 470, 21,22);
    image(restrict, 672, 480, 13, 13);
    image(padlock, 21, 300, 62,62); //padlock
    image(note, paperX, 20, 350, 430); //document file

    //SMILE VIRUS
    image(smilexp, 19, 190, 60, 60); //smile face
    //text for display
    textSize(20);
    fill(255,255,255);
    strokeWeight(1);
    stroke(60);
    text("CLICK ME", 20, 275);
    text("IMPORTANT!", 11, 170);
    text("???", 35, 378);
    textSize(21);
    strokeWeight(0);
    textSize(22);
     text("20:02", 693, 488);
    
  }

  function hijack()
  {
    if(counter >= 120 && outcomecheck == 0)
    {
      section = "outcome";
    }
    else if(counter >= 120 && outcomecheck > 0)
    {
      section = "hacked";
    }
    else
    {
      randomX = random(20, 600);
      randomY = random(20, 400);
      randomXINV = random(20, 600);
      randomYINV = random(20, 400);
      for(virus = 0; virus < 1; virus++)
      {
        image(popup, randomX, randomY, 125, 100);
        image(popupINV, randomXINV, randomYINV, 125, 100);
        counter++;
        crash.play();
      }
    }
  }
  
  function outcome()
  {
    background(0, 0, 170); //blue screen
    textFont(font);
      textSize(21);
      stroke(0,0,170);
      strokeWeight(0.2);
    //windows header
    fill(150,150,150);
    rect(330, 140, 80, 20); //bar
    fill(0,0, 170);
    text("Windows", 336.5, 155); //text
    //text messages
    fill(230,230,230);
    stroke(0);
    textSize(25);
    text("An  error  has  occured.  To  continue :", 55, 200);
    text("Press  R  to  return  to  Windows,  or", 55, 250);
    text("Press  CTRL+W  to  close  the  project.  If  you  do  this, then  you", 55, 300);
    text("are  an  idiot.  Just  press  R  to  restart  the  computer .", 55, 325);
    text("Error:   eW91   :   YXJl   :   YW4gaWRpb3Q=", 55, 375);
    //Separate hide to keep video from leaking into outcome
    //error messages
    textSize(15);
  }
  function hacked()
  {
    currentTime = int(millis()/500);
background(0, 170, 0);
    fill(255,255,255);
    textSize(50);
    text(":",50,220)
    text(")",70,220)
    text("IDIOT", 200, 200);
    text("IDIOT", 380, 230);
    text("Press R to reboot.", 190, 430);
    if(!idiotAUDIO.isPlaying())
    {
      idiotAUDIO.play();
    }
    textFont('sansSerif');
    textSize(80);
    if((currentTime%2) == true)
      {
       
        background(255);
        fill(0);
        text("you are an idiot",128,207);
        //smile faces
        image(smile, 120, 270, 90,90);//left
        image(smile, 332, 270, 90,90);//middle
        image(smile, 540, 270, 90,90);//right
      }
      else if((currentTime%2) == false) //inverted
      {
         
        background(0);
        fill(255);
        text("you are an idiot",128,207);
        //smile faces 2
        image(smileINV, 120, 270, 90,90);//left
        image(smileINV, 332, 270, 90,90);//middle
        image(smileINV, 540, 270, 90,90);//right
        
      }
  }
 

  
  
