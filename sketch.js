let x, y
let xDir, yDir
let r = 25

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2
  y = height/2

  xDir = random(3, 8)
  yDir = random(3, 8)
}

function draw() {
  //background(0);
  r = random(20, 60)
  ellipse(x, y, r*2)

  if (x>=windowWidth-r || x<= r) {
    xDir *= -1
    fill(random(255), random(255), random(255))
    background(random(0, 225), random(0, 255), random(0, 255))
  }
  if (y>=windowHeight-r || y<=r) {
    yDir *= -1
    fill(random(255), random(255), random(255))
    background(random(0, 225), random(0, 255), random(0, 255))
  }

  x = x+xDir
  y = y+yDir
}