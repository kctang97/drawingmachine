let ary = [];
let nOff = 0.0;
let sW = 5;

function setup() {
  createCanvas(windowWidth - 200, windowHeight  );
  background(100, 150 ,255);
  noFill();
}

function draw() {



  if (mouseIsPressed){
    background(100, 150 ,255, 30);
    strokeWeight(sW);
    nOff += 0.05;
    sW = noise(nOff) * 100;

    stroke(map(mouseX, 0, windowWidth / 1, 0 , windowHeight / 3, true))
    // stroke(random(220, 255),random(200, 255),random(220,  255));
    // line(windowWidth - mouseX, windowHeight - mouseY, windowWidth - pmouseX, windowHeight - pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);
    ary.push([mouseX, mouseY]);
  }

}

function keyTyped() {
  // console.log('key ${key} is being typed');
  if (key === 's'){
    saveCanvas('drawing_','png');
  } else if (key === 'd') {
    background(100, 150 ,255);
    strokeWeight(10)
    beginShape();
    for(let i = 0; i < ary.length - 1; i++) {
        curveVertex(ary[i][0], ary[i][1])
    }
    endShape();
  } else if (key === 'c') {
    clear();
    background(100, 150 ,255);
  }

  return false;
}
