let data;
let val;
let api = "https://taylorswiftapi.onrender.com/get";
//"https://taylor-swift-api.sarbo.workers.dev/albums";
let input;
let name;

let cors = 'https://corsproxy.io/?';

function preload() {
  let url = cors + api;
  data = loadJSON(url);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log("Random album: " + data.album);
  console.log("Random song: " + data.song);
  console.log("Random lyrics: " + data.quote);
  input = createInput("");
  input.position(windowWidth/2 - 200, 250);
  input.size(300)
  button = createButton("SUBMIT");
  button.position(windowWidth/2 + 100, 250);
  button.mousePressed(submit);
  name = input.value();
}

function draw() {
  background("purple");
  fill("gold")
  textSize(40)
  textFont('Garamond');
  text("Random Taylor Swift Lyric Generator", windowWidth/2 - 300, 150)
  textSize(25)
  text("Type in an album to get a random lyric from a random song:", windowWidth/2 - 300, 200)
  
  fill("white")
  textSize(30)
  text("Random album:  " + data.album, windowWidth/2 - 250, 400)
  text("Random song:  " + data.song, windowWidth/2 - 250, 450)
  textSize(20)
  text("Random lyrics:  '" + data.quote + "'", 25, 500)
}

function submit() {
  textSize(30);
  fill("white");
  text(name, windowWidth/2-100, 400);
}