let noiseScale = 100;
let n = 500;
let particles = []
let particleColor;
let fft;
let amplitude = new p5.Amplitude();

function preload() {
  song = loadSound("inspiring-epic-dubstep-12219.mp3")
  amplitude.setInput(song);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noiseDetail(3, 0)
  //genColorImg();
  //image(colorImg, 0, 0);

  genNoiseImg();
  image(noiseImg, 0, 0);

  fft = new p5.FFT;

  //volume
  volumeSlider = createSlider(0, 2, 0.5, 0.01);
  volumeSlider.position(20, 60);
  
  //making le particles with different colors
  for (var i = 0; i < n; i++) {
    var particle = new Object();
    particle.pos = createVector(random(width), random(height));
    
    particle.color = color(random(255), random(255), random(255));
    
    particles.push(particle); //adding le particle to le particle list
  }

  //play/pause button
  let play = createButton("Play/Pause");
  play.position(20, 20);

  //if button clicked, play or pause
  play.mousePressed(() => {
    if (song.isPlaying()) {
      song.pause()
    } else {
      song.play()
      loop()
    }
  });
}

function curl(x, y) {
  let EPSILON = 0.001;
  
  //rate of change in x-direction
  let n1 = noise(x + EPSILON, y);
  let n2 = noise(x - EPSILON, y);
  let curlX = (n1 - n2)/(2 * EPSILON)
  
  //rate of change in y-direction
  n1 = noise(x, y + EPSILON);
  n2 = noise(x, y - EPSILON);
  
  let curlY = (n1 - n2)/(2 * EPSILON);
  
  //return new createVector(curlX, curlY);
  return new createVector(curlY, -curlX) //rotates 90 degrees
}

function draw() {
  //tint(255, 10);
  image(noiseImg, 0, 0, windowWidth, windowHeight);

  textSize(15)
  text("Change volume (change stroke based on treble)", 20, 95)
  fill("black")

  textSize(50)
  text("AGATE DOWN", windowWidth/2 - 150, 75)

  //genColorImg();
  //image(colorImg, 0, 0);

  let spectrum = fft.analyze();
  let particleThick = fft.getEnergy("treble");
  let particleSpeed = fft.getEnergy("bass");
  song.setVolume(volumeSlider.value());

  for (var i = 0; i < particles.length; i++) {
    var p = particles[i];
    stroke(p.color); //assigned colors for each particle
    strokeWeight(random(particleThick/200, particleThick/16)); //particle sizes change with frequency of treble

    p.pos.add(curl((p.pos.x / noiseScale), (p.pos.y / noiseScale)));
    point(p.pos.x, p.pos.y);
    //point(p.pos.x + particleSpeed/(random(0, 100)), p.pos.y + particleSpeed/(random(0, 100)));
  }
}

function genNoiseImg() {
  noiseImg = createGraphics(windowWidth, windowHeight);
  noiseImg.loadPixels();
  let wDensity = width * pixelDensity();
  let hDensity = height * pixelDensity();
  
  for (let i = 0; i < wDensity; i++) {
    for(let j = 0; j < hDensity; j++) {
      let x = i/pixelDensity();
      let y = j/pixelDensity();
      let bright = pow(noise(x / noiseScale, y / noiseScale) - 0.3, 1/2.0) * 500;
      noiseImg.pixels[(i+j*wDensity) * 5] = bright;
      noiseImg.pixels[(i+j*wDensity) * 5 + 1] = bright;
      noiseImg.pixels[(i+j*wDensity) * 5 + 2] = bright;
      noiseImg.pixels[(i+j*wDensity) * 5 + 3] = 200;
    }
  }
  noiseImg.updatePixels()
}

function genColorImg() {
  colorImg = createGraphics(windowWidth, windowHeight)
  colorImg.loadPixels();

  for (let i = 0; i < 100; i++) {
    let x = random(width);
    let y = random(height);
    let diameter = random(1, 30);
    let r = random(255);
    let g = random(255);
    let b = random(255);
    let alpha = random(20, 100);

    fill(r, g, b, alpha);
    noStroke();
    ellipse(x, y, diameter, diameter);
  }
}