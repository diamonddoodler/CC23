let myTri
let myTri2
let myTri3
//let numTri = random(5, 15)

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  myTri = new Tri()
  myTri2 = new Tri()
  myTri3 = new Tri()

  /*
  for (let i = 0; i < numTri; i++) {
    myTri[i] = new Tri()
  }
  */
}

function draw() {
  background(0);

  /*
  for (let i = 0; i < numTri; i++) {
    myTri[i].render()
    myTri[i].strobe()
  }
  */

  myTri.render()
  myTri.strobe()

  myTri2.render()
  myTri2.strobe()

  myTri3.render()
  myTri3.strobe()
}

class Tri {
  constructor() {
    this.col = color(random(255), random(255), random(255))
    this.x = random(width)
    this.y = random(height)
    this.x2 = random(width)
    this.y2 = random(height)
    this.x3 = random(width)
    this.y3 = random(height)
    
    this.xdir = random(1, 15)
    this.ydir = random(1, 15)
    this.size = random(30, 300)
    this.stroke = random(1, 10)
  }

  render() {
    noFill()
    stroke(this.col)
    strokeWeight(this.stroke)
    triangle(this.x, this.y, this.x2, this.y2, this.x3, this.y3)
  }

  strobe() {
    this.x += this.xdir
    this.y += this.ydir
  }
}