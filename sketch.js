function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 0, 0);
  for (let k = 0; k < 30; k++) {
    noFill()
    stroke(180, 0, 250)
    strokeWeight(5, 10)
    let s = random(0, 500)
    triangle(s, s+random(30, 100), s+random(10, 100), s-random(20, 100), s+random(20, 100), s+random(20, 100))
  }
  for(let k=0; k<200; k++) {
    noFill()
    stroke(180, 0, 250)
    strokeWeight(5, 10)
    rect(random(0, 400), random(0, 400), random(1, 20), random(1, 20))
  }

  //table
  noStroke()
  fill(200, 200, 0)
  rect(0, 250, 400, 150)

  for(let k = 0; k<200; k++) {
    noFill()
    stroke(0, 10, 0)
    strokeWeight(0.8)
    ellipse(random(0, 400), random(250, 400), random(10, 15))
  }

  //melon
  noStroke()
  fill(180, 0, 0)
  angleMode(DEGREES)
  arc(200, 150, 250, 300, 0, 180)
  fill(230, 230, 230)
  arc(200, 150, 220, 250, 0, 180)
  fill(0, 230, 250)
  arc(200, 240, 148, 70, 0, 180)

  //seeds
  for (let i = 0; i < 35; i++) {
    fill(0, 0, 0)
    noStroke()
    ellipse(random(110, 280), random(120, 220), random(7, 10))
  }
  for (let i = 0; i < 25; i++) {
    fill(180, 0, 0)
    noStroke()
    ellipse(random(120, 290), random(150, 270), 6)
  }
  for (let i = 0; i < 50; i++) {
    fill(180, 0 ,0)
    ellipse(random(90, 310), random(150, 250), random(1, 4))
  }

  //forks and spoons
  noFill()
  stroke(180, 0, 0)
  strokeWeight(8)
  arc(40, 280, 30, 60, 0, 180)
  line(41, 280, 41, 350)
  
  stroke(0, 0, 0)
  arc(360, 280, 30, 60, 0, 180)
  line(361, 280, 361, 350)

  noStroke()
  fill(0, 0, 0)
  ellipse(150, 330, 40, 50)
  stroke(0, 0, 0)
  strokeWeight(8)
  line(150, 350, 150, 390)

  noStroke()
  fill(180, 0, 0)
  ellipse(250, 330, 40, 50)
  stroke(180, 0, 0)
  strokeWeight(8)
  line(250, 350, 250, 390)

  }
