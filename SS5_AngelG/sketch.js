/* 
Angel Gonzalez
Click...
*/
// Image Variables
let title;
let jumpS;
let candy;
let glitch;
// Sound Variables
let shadow;
let caw;
let end;
// Misc Variables
let section = "selection";
let tFont;
let Fcount = 0;
let Dcount = 0;
let virus;
let ambience;
let error;


async function setup() {
  createCanvas(500, 400);
  let display = createCanvas(750, 500);
  display.position((windowWidth - width)/2, (windowHeight - height)/2);
  //Images
  title = await loadImage('assets/redwood.gif');
  jumpC = await loadImage('assets/candy.gif');
  glitch = await loadImage('assets/glitch.gif');
  //Fonts
  tFont = await loadFont('assets/wait.ttf');
  rFont = await loadFont('assets/ring.ttf');
  //Sounds
  shadow = await loadSound('assets/a90.mp3');
  ambience = await loadSound('assets/atmosphere.mp3');
  error = await loadSound('assets/error.mp3');
  caw = await loadSound('assets/caw.mp3');
  end = await loadSound('assets/Angry.mp3');

}

function draw() {
  if(section == "selection")
  {
    selection();
    if(!ambience.isPlaying())
    {
      ambience.play();
    }
  }
  else if(section == "jumpscare")
  {
    jumpscare();
    ambience.stop();
  }
  else if(section == "outcome")
  {
    outcome();
  }
}
  function selection()
  {
    background(title);
    //random vars
    let tColor = random(100, 225);
    let randArray = [83, 41, 89, 47];
    let randRot = random(10, 25);
    let randSiz = random(randArray);
    let randX1 = random(70, 81);
    /*let randY2 =
    let randY3 =
    */stroke(0);
    strokeWeight(3);
    textFont(tFont);
    fill(tColor);
    //Title Transform
    push(); //Start
    rotate(QUARTER_PI / randRot);
    translate(150, 120);
    textSize(randSiz); //60
    text('Twisted Vision', 0, 0); //120, 120
    pop(); //End
     textFont(rFont);
    
    push()
    rotate(QUARTER_PI / 90);
    textSize(50);
    text('Begin', 70, 200);
    text('reconfigure the flesh', 70, 260);
    text('BeHind ThE cUrTAin', 70, 320);
    text('You cAnT Leave', 75, 380);
    textFont('Courier New');
    //text(`x: ${int(mouseX)} y: ${int(mouseY)}`, 50, 50);
    pop();
    /*for(let i = 0; i < width/2; i++)
    {
      
      let randX = random[0, 250];
      let randX2 = random[0, 250];
      let randY = random(0, 250);
      let randY2 = random(0, 250);
      stroke(randX);
      line(randX, randY, 30, 100);
      //stroke(0);
      //line(randX2, randY2, 30, 100);
    }
*/
  }
  
  function jumpscare()
  {
    
    if(Fcount >= 100)
    {
      section = "outcome";
      shadow.stop();
    }
    else
    {
      
    for(virus = 0; virus < 1; virus++)
    {
      Fcount++;
      shadow.play();
      background(jumpC);
    }
    
}
}

  function outcome()
  {
    background(glitch);
    text('THERE IS NO END', 300, 300);
    if(Dcount >= 50)
    {
    background(glitch);
    if(!end.isPlaying())
    {
      end.play();
    }
    caw.stop();
    }
    else
    {
    background(0);
    for(let i = 0; i < 1; i++)
    {
      caw.play();
      Dcount++;
    }
  }
}
  function mousePressed()
  {
   if(section == "selection" && (mouseX >= 71 && mouseX <= 124) && (mouseY >= 180 && mouseY <= 207))
  {
    
    section = "jumpscare";
    

  }
  else if(section == "selection" && (mouseX >= 69 && mouseX <= 302) && (mouseY >= 239 && mouseY <= 267))
  {
    
    section = "jumpscare";
    

  }
  else if(section == "selection" && (mouseX >= 70 && mouseX <= 267) && (mouseY >= 297 && mouseY <= 320))
  {
    
    section = "jumpscare";
    

  }
  else if(section == "selection" && (mouseX >= 74 && mouseX <= 229) && (mouseY >= 362 && mouseY <= 380))
  {
    
    section = "jumpscare";
    

  }
  else
  {
    error.play();
  }
    
   
}
