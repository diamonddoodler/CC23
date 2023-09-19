let xPos, yPos;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //colorMode(HSB) //hue, saturation, brightness
  xPos = 0;
  yPos = height / 2
}
/*
A point that grows with time
function draw() {
  background(220);
  ellipse(xPos, yPos, 100);
  if(mouseIsPressed == true) {
    ellipse(width/2, height/2, 100, 100)
  }
  if(!mouseIsPressed) { //! means "not"
    rect(width/2, height/2, 50, 50)
  }

  xPos = xPos+0.25 //moves the ball right
}
*/

function draw() {
  background(0);
  let randNum = random(0, 4)
  randNum = floor(randNum)
  if(randNum == 0) {
    x++
  } else if(randNum == 1) {
    x--;
  } else if(randNum == 2) {
    y++;
  } else if(randNum == 3) {
    y--;
  }
  stroke(255)
  stroke(255)
  point(xPos, yPos)
}