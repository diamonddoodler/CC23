let x, y
let xDir, yDir
let r = 20
let ballColor = 255
let button;
let clicked

function setup() {
  createCanvas(windowWidth, windowHeight);

  xDir = random(-10, 10);
  yDir = random(-10, 10);
  x = width/2
  y = height/2
  noStroke()
  
  button = createButton("Do you like... colors?");
  button.position(windowWidth/2-55, windowHeight/2);
  button.mousePressed(clickedBut);
}

function draw() {
  background(0)
  fill(ballColor)
  
  if (x>=windowWidth-r || x<= r) {
    xDir *= -1
  }
  if (y>=windowHeight-r || y<=r) {
    yDir *= -1
  }

  x = x+xDir
  y = y+yDir
  
  if (clicked) {
    fill(random(ballColor), random(ballColor), random(ballColor))
  }

  else {
    fill(ballColor)
  }
  
  ellipse(x, y, r*2)
}

function clickedBut() {
  clicked = true;
}