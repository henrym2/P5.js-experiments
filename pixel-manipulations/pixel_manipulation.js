let img;
let underImage;


const width = 720;
const height = 480;

function preload() {
    underImage = loadImage("worldMap.jpeg");
    underImage.loadPixels();
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
}

function draw() {
    img.loadPixels();
    underImage.loadPixels();
    img.updatePixels();
    image(img, 0, 0);
    image(underImage,0,0);
}

function mouseMoved() {
    //console.log(underImage.get(mouseX,mouseY))
    
    if(underImage.get(mouseX,mouseY) === undefined){
        img.set(mouseX, mouseY, color(red(random(0,255)), green(random(0,255)), blue(random(0, 255))));
    }
    
}