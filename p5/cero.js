function setup() {
  createCanvas(windowWidth, windowHeight/2);
  background(229,204,255);
}

function draw() {
  for (var x = 0; x < windowWidth; x+=(windowWidth/54)) {
    for (var y = 0; y < windowHeight; y+=(windowHeight/54)){
  rectMode(CENTER);
  rect(x,y,5,5);

}
}
}
