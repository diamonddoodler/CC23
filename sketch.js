let omg, fart, happy, oof, snore, vine, windows;
let omgpic, fartpic, happypic, oofpic, snorepic, vinepic, windowspic;
let omgbut, fartbut, happybut, oofbut, snorebut, vinebut, windowsbut;

function preload() {
  //loading sound effects
  omg = loadSound("SOUND EFFECTS/oh my god.mp3")
  fart = loadSound("SOUND EFFECTS/fart.mp3")
  happy = loadSound("SOUND EFFECTS/happy.mp3")
  oof = loadSound("SOUND EFFECTS/roblox.mp3")
  snore = loadSound("SOUND EFFECTS/snore.mp3")
  vine = loadSound("SOUND EFFECTS/vine boom.mp3")
  windows = loadSound("SOUND EFFECTS/windows shutdown.mp3")

  //loading images
  omgpic = loadImage("SOUND EFFECTS/oh my god pic.png")
  fartpic = loadImage("SOUND EFFECTS/fart pic.jpg")
  happypic = loadImage("SOUND EFFECTS/happy pic.jpg")
  oofpic = loadImage("SOUND EFFECTS/oof pic.jpg")
  snorepic = loadImage("SOUND EFFECTS/snore pic.jpg")
  vinepic = loadImage("SOUND EFFECTS/vine pic.png")
  windowspic = loadImage("SOUND EFFECTS/windows.jpg")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("purple")

  //make buttons
  omgbut = createButton("OMG");
  fartbut = createButton("fart")
  happybut = createButton("happy")
  oofbut = createButton("oof")
  snorebut = createButton("MIMIMIMI")
  vinebut = createButton("vine")
  windowsbut = createButton("window")
  }

function draw() {
  textSize(40)
  textFont('arial')
  text("click on the buttons if you dare", 10, 50)
  fill(255)

  //OMG
  omgbut.position(200, 325);
  omgbut.mousePressed(playOmg);
  omgbut.size(70, 50)
  omg.setVolume(0.25)
  omgbut.style("font-size", "23px")
  omgbut.style("font", "comic-sans")
  image(omgpic, 130, 70, 200, 250)
  
  //fart
  fartbut.position(400, 325)
  fartbut.mousePressed(playFart)
  fartbut.size(70, 50)
  fart.setVolume(0.25)
  fartbut.style("font-size", "23px")
  fartbut.style("font", "comic-sans")
  image(fartpic, 350, 70, 170, 250)

  //happy happy happy
  happybut.position(600, 325)
  happybut.mousePressed(playHappy)
  happybut.size(80, 50)
  happy.setVolume(0.25)
  happybut.style("font-size", "23px")
  happybut.style("font", "comic-sans")
  image(happypic, 550, 70, 170, 250)

  //oof
  oofbut.position(800, 325);
  oofbut.mousePressed(playOof);
  oofbut.size(70, 50)
  oof.setVolume(0.25)
  oofbut.style("font-size", "23px")
  oofbut.style("font", "comic-sans")
  image(oofpic, 750, 70, 170, 250)

  //snore
  snorebut.position(1000, 325);
  snorebut.mousePressed(playSnore);
  snorebut.size(80, 50)
  snore.setVolume(0.25)
  snorebut.style("font-size", "23px")
  snorebut.style("font", "comic-sans")
  image(snorepic, 950, 70, 170, 250)

  //vine
  vinebut.position(400, 525);
  vinebut.mousePressed(playVine);
  vinebut.size(70, 50)
  vine.setVolume(0.25)
  vinebut.style("font-size", "23px")
  vinebut.style("font", "comic-sans")
  image(vinepic, 150, 430, 300, 200)

  //windows
  windowsbut.position(640, 525);
  windowsbut.mousePressed(playWindows);
  windowsbut.size(90, 50)
  windows.setVolume(0.25)
  windowsbut.style("font-size", "23px")
  windowsbut.style("font", "comic-sans")
  image(windowspic, 750, 430, 300, 200)
}

function playOmg() {
  omg.play(0, 1, 0.25, 3.3)
}

function playFart() {
  fart.play(0, 1, 0.25, 0.0)
}

function playHappy() {
  happy.play(0, 1, 0.25, 0.0)
}

function playOof() {
  oof.play(0, 1, 0.25, 0.5)
}

function playSnore() {
  snore.play(0, 1, 0.25, 0.0)
}

function playVine() {
  vine.play(0, 1, 0.25, 0.0)
}

function playWindows() {
  windows.play(0, 1, 0.25, 0.6)
}