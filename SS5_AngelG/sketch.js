let section = "selection";
//image variables
let logo;
let font;
let land;
let startup;
let smilexp;
let popup;
let counter = 0;
//Selection, Game, Outcome
async function setup() {
  createCanvas(500, 500);
  let display = createCanvas(750, 500);
  display.position((windowWidth - width)/2, (windowHeight - height)/2);
  //image variables
  logo = await loadImage('assets/WindowsLogo.png');
  land = await loadImage('assets/Bliss.png');
  smilexp = await loadImage('assets/Smile.png');
  popup = await loadImage('assets/placeholder.png');
  //sound variables
  startup = await loadSound('assets/startup.mp3');
  //font variables
  font = await loadFont('assets/xp.ttf');
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
  print(section);
}
function keyPressed()
  {
   
   if(section == "selection" && key == ' ')
  {
    section = "game";
    startup.play();
  }
    else if(section == "outcome" && key == 'r' || key == 'R')
  {
    section = "selection";
    counter = 0;
  }
}
function mousePressed()
{
if(section == "game" && (mouseX >= 27.5 && mouseX <= 78.5) && (mouseY >= 205.5 && mouseY <= 251.5))
  {
    //section = "outcome";
    section = "hijack";
  }
}
  // Separate Functions
  function selection()
  {
    background(0,0,0);
    fill(255,255,255);
    textFont(font);
    textSize(50);
    text("PRESS SPACE TO BOOT UP",140,390)
    image(logo, 70, 40, 600, 300);
  }

  function game()
  {
    background(land);
    text("TESTING 2",200,50)
    fill(57,77,230);
    strokeWeight(2);
    rect(0, 465, 1000, 40);
    image(smilexp, 20, 200, 65, 57);
    textSize(18);
    fill(255,255,255);
    text("CLICK ME", 22, 275);
    //placeholder text
    text(`${mouseX}, ${mouseY}`, 20, 40); //x:27.5, 78.5 //y: 205.5, 251.5
  }

  function hijack()
  {
    if(counter >= 40)
    {
      outcome();
      
    }
    else
    {
      image(popup, 200, 100, 100, 100);
      counter++;
    }
    text(counter, 300, 60);
  }
  
  function outcome()
  {
    background(0, 0, 170);
    fill(255,255,255);
    text(".",50,200)
    text(".",50,220)
    text(")",70,220)
    text("SYSTEM", 200, 200);
    text("CRASHED", 380, 230);
    text("Press R to reboot.", 250, 400);
  }

  
  
