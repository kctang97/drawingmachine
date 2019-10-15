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
  background(bgColor);
  gridAry = grid(x, y, wWidth, wHeight);
  // console.log(pixelArray);
}

function draw() {

  drawPix(gridAry, wWidth, wHeight);
}

function grid(_x, _y) {
  for (let i = 0; i < _x; i++) {
    ary[i] = [];
    for (let j = 0; j < _y; j++) {
      // set initial color value to background;
      ary[i][j] = {
      on : false
      };
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
