function setup() {
  createCanvas(windowWidth, windowHeight/2);
  background(0);
  noLoop();
}

function draw() {
noStroke();
  for (var x = 0; x < windowWidth; x+=(windowWidth/124)) {
    colorMode(HSB);
    fill(205,x/20,58);
    ellipseMode(CENTER);
    ellipse(x, windowHeight/4, 50, 50);
  }
}
