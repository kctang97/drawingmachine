let ary = [];
let bgColor = 0;
let gridAry = [];

function setup() {
  createCanvas(windowWidth - 100, windowHeight - 200);
  background(bgColor);
  grid();
  strokeWeight(5);
}

function draw() {
  if (mouseIsPressed){
    line(mouseX, mouseY, pmouseX, pmouseY);
    ary.push([mouseX, mouseY]);
    beginShape();
    noFill();
    for(let i = 0; i < ary.length - 1; i++) {
        curveVertex(ary[i][0], ary[i][1])
    }
    endShape();
  }
}

function keyTyped() {
  if (key === 's'){
    saveCanvas('drawing_','png');
  } else if (key === 'd') {
    beginShape();
    noFill();
    for(let i = 0; i < ary.length - 1; i++) {
        curveVertex(ary[i][0], ary[i][1])
    }
    endShape();
  } else if (key === 'c') {
    clear();
    grid();
    ary = [];

  }
  return false;
}

function grid() {
  numCells = 60;
  fillColor = 255;
  strokeWeight(0);
  let x;
  let y;

  for (let i = 0; i <= windowWidth; i += windowWidth / numCells) {
    gridAry[i] = [];
    for (let j = 0; j <= windowHeight; j += windowHeight / numCells) {
      x = i * width / numCells;
      y = j * height / numCells;
      if (fillColor === 255) {
        fillColor = 200;
        gridAry[i][j] = 200;
      } else {
        fillColor = 255;
        gridAry[i][j] = 255;;
      }
      fill(fillColor);
      rect(i, j, width / numCells, height / numCells);
    }
  }
  strokeWeight(5);
}
