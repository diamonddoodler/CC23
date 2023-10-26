let data;
let val;
let api = "https://taylorswiftapi.onrender.com/get?";
//"https://taylor-swift-api.sarbo.workers.dev/albums";

let cors = 'https://corsproxy.io/?';

function preload() {
  let url = cors + api;
  data = loadJSON(url);
}

function setup() {
  createCanvas(400, 400);
  console.log(data.album[0,0]);
}

function draw() {
  background(220);
}