function setup() {
  createCanvas(windowWidth, windowHeight);
  confet = new Confetti()
  confet2 = new Confetti()
  confet3 = new Confetti()
  confet4 = new Confetti()
  confet5 = new Confetti()
  confet6 = new Confetti()
  confet7 = new Confetti()
}

class Confetti {
  constructor() {
    this.col = color(random(255), random(255), random(255))
    this.pos = createVector(random(0, width))
    this.vel = createVector(random(-5, 5), random(1, 10))
    this.stroke = random(6, 30)
    this.size = random(30, 100)
  }
  
  render() {
    stroke(this.col)
    strokeWeight(this.stroke)
    point(this.pos)
  }
  
  update() {
    this.pos.add(this.vel)
  }
}

function draw() {
  background(0);
  confet.render()
  confet.update()

  confet2.render()
  confet2.update()

  confet3.render()
  confet3.update()
  
  confet4.render()
  confet4.update()
  
  confet5.render()
  confet5.update()
  
  confet6.render()
  confet6.update()
  
  confet7.render()
  confet7.update()
}