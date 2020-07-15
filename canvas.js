let song;
let font,
  fontsize = 40;

function setup() {
  song = loadSound('./stal.mp3');
  createCanvas(1920, 1080);
  background(255, 0, 0);
  textSize(32);
  let stal = "Click to start or to stop stal, please allow up to 5 seconds for the page to load";
text(stal, 50, 50);
}

function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
    background(255, 0, 0);
    textSize(32);
  let stal = "Click to start or to stop stal, please allow up to 5 seconds for the page to load";
text(stal, 50, 50);
  } else {
    song.play();
    background(0, 255, 0);
    textSize(32);
  let stal = "Click to start or to stop stal, please allow up to 5 seconds for the page to load";
text(stal, 50, 50);
  }
}
