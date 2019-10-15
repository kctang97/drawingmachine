let ary = [];
let x = 60;
let y = 40;
let wWidth = 20;
let wHeight = 20;
let gridAry = [];
let bgColor = '#FFFFFF';
let pColor = '#000000';

function setup() {
  createCanvas(wWidth * x, wHeight * y);
  gridAry = grid(x, y, wWidth, wHeight);
  background(200);
}

function draw() {
  drawPix(gridAry, wWidth, wHeight);
}

function grid(_x, _y) {
  for (let i = 0; i < _x; i++) {
    ary[i] = [];
    for (let j = 0; j < _y; j++) {
      ary[i][j] = 0;
    }
  }
  return ary;
}

function drawPix(_array, _wWidth, _wHeight) {
  for (let i = 0; i < _array.length; i++) {
    for (let j = 0; j < _array[i].length; j++) {
      let x = i * _wWidth;
      let y = j * _wHeight;
      if (_array[i][j] == 1){
        fill(pColor);
      } else {
        fill(bgColor);
      }
      rect(x, y, wWidth, wHeight);
    }
  }
  strokeWeight(0);
}

function mouseDragged() {
  let c = floor(mouseX / wWidth);
  let r = floor(mouseY / wHeight);

  if (c >= 0 && c < x && r >= 0 && r < y) {
    if (keyIsPressed == true && keyCode == SHIFT) {
      gridAry[c][r] = 0;
    } else {
      gridAry[c][r] = 1;
    }
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
      pColor = color(random(150, 255), 0, 0);
    } else if (keyCode === RIGHT_ARROW) {
      pColor = color(0, random(150, 255),0);
    } else if (keyCode === UP_ARROW) {
      pColor = color(0, 0, random(150, 255));
    } else if (keyCode === DOWN_ARROW) {
      pColor = color(random(100, 255));
    }
}

function keyTyped() {
  if (key === 's'){
    saveCanvas('drawing_','png');
  }
}
