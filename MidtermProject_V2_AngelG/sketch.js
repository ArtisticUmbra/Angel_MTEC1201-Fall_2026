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
let qrcode;
let qrcodeINV;
let notify;
let powerV;
let powerSD;
let click;
let Wlogo;


//Selection, Game, Outcome
async function setup() {
  createCanvas(500, 500);
  let display = createCanvas(750, 500);
  display.position((windowWidth - width)/2, (windowHeight - height)/2);
  //image variables
  logo = await loadImage('assets/loading.gif');
  Wlogo = await loadImage('assets/WindowsLogo.png');
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
  qrcode = await loadImage('assets/qrcode.png');
  qrcodeINV = await loadImage('assets/qrcode2.png');
  note = await loadImage('assets/YAAINote.png');
  smile = await loadImage('assets/smile.png');
  smileINV = await loadImage('assets/smileINV.png');
  powerV = await loadImage('assets/PowerTab.png');

  //sound variables
  startup = await loadSound('assets/startup.mp3');
  crash = await loadSound('assets/crash.mp3');
  paper = await loadSound('assets/recycle.mp3');
  ding = await loadSound('assets/ding.mp3');
  idiotAUDIO = await loadSound('assets/youareanidiot.mp3');
  wavStatic = await loadSound('assets/static.mp3');
  notify = await loadSound('assets/notify.mp3');
  click = await loadSound('assets/mouse.mp3');
  //font variables
  font = await loadFont('assets/xp.ttf');
  tfont = await loadFont('assets/pixel.ttf');
  //separate check
  outputVolume(1.0);
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
  else if (section == "question")
  {
    question();
  }
  else if (section == "power")
  {
    power();
  }
//extra content
cursor('assets/arrow.cur');
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
  if(mousePressed)
  {
    click.play();
  }
if(section == "game" && (mouseX >= 24 && mouseX <= 82) && (mouseY >= 195.5 && mouseY <= 254.5))
  {
    //section = "outcome";
    section = "hijack";
    wavStatic.stop();
  }
  //Padlock
else if(section == "game" && (mouseX >= 32 && mouseX <= 70) && (mouseY >= 302.5 && mouseY <= 356.5))
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
//Power Key
else if(section == "game" && (mouseX >= 11 && mouseX <= 44) && (mouseY >= 470 && mouseY <= 492))
  {
    notify.play();
    section = "question";
  }
else if(section == "question" && (mouseX >= 365 && mouseX <= 408) && (mouseY >= 280 && mouseY <= 324))
{
section = "power";
}
else if(section == "question" && (mouseX >= 434 && mouseX <= 453) && (mouseY >= 200 && mouseY <= 219))
  {
    section = "game";
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
    textFont(font);
    textSize(40);
    text("PRESS SPACE TO BOOT UP",190,340)
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
  textFont(tfont);
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
    image(task, 8, 465, 36, 30);
    fill(230,230,230);
    textSize(25);
    text('Start', 55, 487);
    //Random Apps
    image(textdoc, 24, 95, 55, 55); //document icon
    image(message, 662, 470, 21,22);
    image(restrict, 672, 480, 13, 13);
    image(padlock, 21, 300, 62,62); //padlock
    image(note, paperX, 20, 350, 430); //document file
    text(`x: ${int(mouseX)} y: ${int(mouseY)}`, 50, 50);
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
     //delete later
     //image(powerV, 240, 150, 300, 240);
    
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
        image(qrcode, 340, 40, 80,80);
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
        image(qrcodeINV, 340, 40, 80,80);
      }
     
    }
  function power()
      {
        textFont(font);
        background(103, 135, 230);
        fill(7, 35, 176);
        image(Wlogo, 330, 160, 260,140);
        stroke(0);
        strokeWeight(2);
        rect(0, 440, 1000, 100);
        rect(0, -40, 1000, 100);
        let textcolor = random(0,255);
        fill(textcolor,255,255);
        strokeWeight(0);
        text("Windows is", 158, 320);
        text("shutt", 300, 300);
        text("ing down...", 370, 378);
        text("Press R", 250, 130);
        text("to cancel", 110, 152);
        text("operation", 600, 200);
      }
      function question()
      {

        image(powerV, 240, 150, 300, 240);
        textSize(15);
        text("Turn off computer", 320, 215);
        textSize(30);
  textFont(font);
        text("Turn off", 334, 260);
        //coordinate text
      }

  
  
