let img;
let underImage;


const width = 720;
const height = 480;

function preload() {
    underImage = loadImage('worldMap.jpeg');
    //underImage.loadPixels();
}

function setup() {
    createCanvas(width, height)
    img = createImage(width ,height);
   
    //underImage.resize(width, height);
    
    img.loadPixels();
    for(let i = 0; i < 4 * (width * height); i+= 4){
        img.pixels[i] = red(0);
        img.pixels[i + 1] = green(0);
        img.pixels[i + 2] = blue(0);
        img.pixels[i + 3] = alpha(0);
    }    
    frameRate(60);
}

function draw() {
    img.loadPixels();
   // underImage.loadPixels();
    let posX = random(0, width)
    let posY = random(0, height)
    if(underImage.get(posX, posY)[0] != 0){
        img.set(posX, posY, color(red(random(0,255)), green(random(0,255)), blue(random(0, 255))));
        img.set(posX-1, posY+1, color(red(random(0,255)), green(random(0,255)), blue(random(0, 255))));
        img.set(posX+1, posY-1, color(red(random(0,255)), green(random(0,255)), blue(random(0, 255))));
        img.set(posX-1, posY-1, color(red(random(0,255)), green(random(0,255)), blue(random(0, 255))));
    }
    img.updatePixels();
    image(img, 0, 0)
   
}

function mouseMoved() {}