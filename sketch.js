let ary = [];
let x = 60;
let y = 35;
let wWidth = 20;
let wHeight = 20;
let gridAry = [];
let bgColor = '#FFFFFF';
let pColor = '#000000';

let rColor1 = '#add8e6';
let rColor2 = '#FF0000';
let rColor3 = '#FFFF33';


function setup() {
  createCanvas(wWidth * x, wHeight * y);

  gridAry = grid(x, y, wWidth, wHeight);
}

function draw() {
  background(200);
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
      rect(x, y, _wWidth, _wHeight);
    }
  }
  strokeWeight(0);
}

function mousePressed() {
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
      pColor = color(rColor1);
    } else if (keyCode === RIGHT_ARROW) {
      pColor = color(rColor2);
    } else if (keyCode === UP_ARROW) {
      pColor = color(rColor3);
    } else if (keyCode === DOWN_ARROW) {
      pColor = '#000000';
    }
}

function keyTyped() {
  if (key === 's'){
    saveCanvas('drawing_','png');
  }
}
