function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100, 150 ,255);
  strokeWeight(5);
}

function draw() {

  if (mouseIsPressed){
    stroke(map(mouseX, 0, windowWidth, 0 , windowHeight, true))
    // stroke(random(220, 255),random(200, 255),random(220,  255));
    line(windowWidth - mouseX, windowHeight - mouseY, windowWidth - pmouseX, windowHeight - pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

}

function keyTyped() {
  // console.log('key ${key} is being typed');
  if (key === 's'){
    saveCanvas('fileName','png');
  }
  return false;
}
