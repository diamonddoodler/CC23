function setup()
{
  createCanvas(400, 400);
  background(90, 0, 110)

  //my hair
  fill(0, 0, 0)
  stroke(80, 40, 0)
  strokeWeight(3)
  ellipse(200, 260, 260, 450)

  //my ears and earrings
  fill(220, 160, 50)
  ellipse(108, 170, 20, 55)
  ellipse(292, 170, 20, 55)

  //my shirt
  stroke(80, 0, 80)
  strokeWeight(3)
  fill(170, 0, 200)
  rect(80, 280, 230, 200, 70)

  //shirt text
  noStroke()
  fill(225, 225, 225)
  textSize(30)
  text("J U L I E", 135, 370);

  //filling and shaping the head
  stroke(120, 60, 0)
  strokeWeight(2)
  fill(220, 160, 50)
  ellipse(200, 173, 180, [230])

  //bangs
  fill(0, 0, 0)
  bezier(103, 113, 157, 110, 176, 90, 200, 38)
  bezier(188, 38, 221, 88, 251, 102, 288, 100)

  //my mouth
  fill(120, 0, 40, 150)
  arc(196, 230, 40, 50, 0.5, PI + QUARTER_PI, OPEN);

  //my nose
  noFill()
  stroke(200, 120, 0)
  bezier(200, 178, 190, 182, 193, 193, 200, 200)

  //my eyebrows
  noFill()
  stroke(0, 0, 0)
  bezier(126, 133, 137, 124, 152, 122, 166, 126)
  bezier(226, 126, 237, 122, 252, 124, 266, 133)

  //my eyes
  stroke(0, 0, 0)
  strokeWeight(1)
  fill(200, 200, 200)
  ellipse(150, 155, 40, 20)
  ellipse(250, 155, 40, 20)
  fill(80, 60, 0)
  ellipse(155, 155, 18, 18)
  ellipse(255, 155, 18, 18)

  //earrings
  noFill()
  stroke(255, 204, 0)
  strokeWeight(4)
  ellipse(107, 212, 10, 30)
  ellipse(291, 212, 10, 30)
}

function mousePressed()
//this function will tell you in the console (right click, inspect) what point you clicked
{
  console.log(mouseX + "," + mouseY)
}