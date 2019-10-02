function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  strokeWeight(5);
}

function draw() {

  if (mouseIsPressed){
    stroke(random(200, 255),random(200, 255),random(200, 255));
    line(windowWidth - mouseX, windowHeight - mouseY, windowWidth - pmouseX, windowHeight - pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

}
