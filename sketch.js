var noiseScale = 100;
var n = 500;
let particles = []
let particleColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noiseDetail(1, 0)
  genNoiseImg();
  image(noiseImg, 0, 0);
  
  // making le particles with different colors
  for (var i = 0; i < n; i++) {
    var particle = new Object();
    particle.pos = createVector(random(width), random(height));
    
    particle.color = color(random(255), random(255), random(255));
    
    particles.push(particle); // Adding le particle to le particle list
  }
}

function curl(x, y) {
  var EPSILON = 0.001;
  
  //rate of change in x-direction
  var n1 = noise(x + EPSILON, y);
  var n2 = noise(x - EPSILON, y);
  var curlX = (n1 - n2)/(2 * EPSILON)
  
  //rate of change in y-direction
  n1 = noise(x, y + EPSILON);
  n2 = noise(x, y - EPSILON);
  
  var curlY = (n1 - n2)/(2 * EPSILON);
  
  //return new createVector(curlX, curlY);
  return new createVector(curlY, -curlX) //rotates 90 degrees
}

function draw() {
  tint(255, 10);
  image(noiseImg, 0, 0);

  for (var i = 0; i < particles.length; i++) {
    var p = particles[i];
    stroke(p.color); //assigned colors for each particle
    strokeWeight(random(2, 6)); // Particle sizes
    
    p.pos.add(curl(p.pos.x / noiseScale, p.pos.y / noiseScale));
    point(p.pos.x, p.pos.y);
  }
}

function genNoiseImg() {
  noiseImg = createGraphics(width, height);
  noiseImg.loadPixels();
  var wDensity = width * pixelDensity();
  var hDensity = height * pixelDensity();
  
  for (var i = 0; i < wDensity; i++) {
    for(var j = 0; j < hDensity; j++) {
      var x = i/pixelDensity();
      var y = j/pixelDensity();
      var bright = pow(noise(x / noiseScale, y / noiseScale) - 0.3, 1/2.0) * 500;
      noiseImg.pixels[(i+j*wDensity) * 4] = bright;
      noiseImg.pixels[(i+j*wDensity) * 4 + 1] = bright;
      noiseImg.pixels[(i+j*wDensity) * 4 + 2] = bright;
      noiseImg.pixels[(i+j*wDensity) * 4 + 3] = 255;
    }
  }
  noiseImg.updatePixels()
}