
var myAsciiArt;
var width, height;

var asciiart_width = 160; var asciiart_height = 75;
let r = 255;
let g = 255;
let b = 255;
let move = true;
var myCapture
var gfx;
var ascii_arr;
var showOryginalImageFlag = false;


function initCaptureDevice() {
  try {
    myCapture = createCapture(VIDEO);
    myCapture.size(1080, 720);
    myCapture.elt.setAttribute('playsinline', '');
    myCapture.hide();
  } catch(_err) {
    console.log('[initCaptureDevice] capture error: ' + _err);
  }
}

function preload() {
  loadFont("unscii.otf")
}

function setup() {
  createCanvas(1080, 720); 
  initCaptureDevice();
  gfx = createGraphics(asciiart_width, asciiart_height);
  gfx.pixelDensity(5);
  myAsciiArt = new AsciiArt('unscii');
  myAsciiArt.printWeightTable();
  textAlign(CENTER, CENTER); textFont('unscii', 11); textStyle(NORMAL);
  noStroke(); fill(255);

  frameRate(60);
}

function draw() { 
  if(myCapture !== null && myCapture !== undefined) { 
    background(0);
 
    gfx.background(0);
    gfx.image(myCapture, 0, 0, gfx.width, gfx.height);
    
    gfx.filter(POSTERIZE, 10);
   
    ascii_arr = myAsciiArt.convert(gfx);
    fill(r,g,b);
    myAsciiArt.typeArray2d(ascii_arr, this);
  }
  else {
    background(255, 0, 0);
  }
}

function mouseMoved() {
  if(move == true){
  r = (255-mouseX%255);
  g = (255-mouseY%255);
  b = (255-mouseX%255+mouseY%255);
  }
}

function mouseClicked() {
  move = !move;
  
  r = 255;
  g = 255;
  b = 255;
}

typeArray2d = function(_arr2d, _dst, _x, _y, _w, _h) {
  if(_arr2d === null) {
    console.log('arr2d === null');
    return;
  }
  if(_arr2d === undefined) {
    console.log('arr2d === undefined');
    return;
  }
  switch(arguments.length) {
    case 2: _x = 0; _y = 0; _w = width; _h = height; break;
    case 4: _w = width; _h = height; break;
    case 6: /* nothing to do */ break;
    default:
      console.log(
        'bad number of arguments: ' + arguments.length
      );
      return;
  }
  var dist_hor = _w / _arr2d.length;
  var dist_ver = _h / _arr2d[0].length;
  var offset_x = _x + dist_hor * 0.5;
  var offset_y = _y + dist_ver * 0.5;
  for(var temp_y = 0; temp_y < _arr2d[0].length; temp_y++)
    for(var temp_x = 0; temp_x < _arr2d.length; temp_x++)
      stroke();
      /*text*/temp_ctx2d.fillText(
        _arr2d[temp_x][temp_y],
        offset_x + temp_x * dist_hor,
        offset_y + temp_y * dist_ver
      );
}