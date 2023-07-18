/* global createCanvas, tint,keyCode, mouseButton,rect, int, random, text, textSize, Draggable, colorMode, HSB,LEFT, background, image, fill, noStroke, dist,mouseIsPressed, mouseX, mouseY, loadImage */

let swimsuitX = 200;
let swimsuitY = 100;
let hair1X=200;
let hair1Y=200;
let hair2X=300;
let hair2Y=200;
let diameter = 150;
let body, swimsuit, hair1, hair2;
let hue, saturation, lightness;
let myCanvas;

function preload() {
  body = loadImage("https://cdn.glitch.com/d01214b1-853f-42b2-a3b0-cd33be7b0e47%2Fbody.png?v=1594545114129");
  swimsuit = loadImage("https://cdn.glitch.com/d01214b1-853f-42b2-a3b0-cd33be7b0e47%2Fswimsuit.png?v=1594546045712" );
  hair1 = loadImage("https://cdn.glitch.com/d01214b1-853f-42b2-a3b0-cd33be7b0e47%2Fhair1.png?v=1594559123669");
  hair2 = loadImage("https://cdn.glitch.com/d01214b1-853f-42b2-a3b0-cd33be7b0e47%2Fhair2.png?v=1594562461981");
}
function setup() {
  myCanvas = createCanvas(500, 300);
  myCanvas.parent("dressup");

  colorMode(HSB, 360, 100, 100);
  hue = int(random(20) + 25);
  saturation = int(random(50) + 30);
  lightness = int(random(55) + 30);
}

function draw() {
  background(255);
  fill(hue, 50, 50);
  rect(0, 0, 50, 50);
  fill(255);
  textSize(30);
  text("H", 15, 35);
  fill(0);
  textSize(25);
  text(hue, 0, 75);

  fill(50, saturation, 50);
  rect(50, 0, 50, 50);
  fill(255);
  textSize(30);
  text("S", 65, 35);
  fill(0);
  textSize(25);
  text(saturation, 50, 75);

  fill(50, 50, lightness);
  rect(100, 0, 50, 50);
  fill(255);
  textSize(30);
  text("L", 115, 35);
  fill(0);
  textSize(25);
  text(lightness, 100, 75);
  if (
    dist(swimsuitX, swimsuitY, mouseX, mouseY) < diameter / 2 &&
    mouseIsPressed
  ) {
    swimsuitX = mouseX;
    swimsuitY = mouseY;
  } else if (
    dist(hair1X, hair1Y, mouseX, mouseY) < diameter / 2 &&
    mouseIsPressed
  ) {
    hair1X = mouseX;
    hair1Y = mouseY;
  } else if (dist(hair2X, hair2Y, mouseX, mouseY) < diameter / 2 &&
    mouseIsPressed){
    hair2X = mouseX;
    hair2Y = mouseY;
  }

  if (mouseIsPressed) {
    if (mouseButton === LEFT) {
      if (mouseX > 0 && mouseX < 50 && mouseY > 0 && mouseY < 50) {
        hue += 1;
        if (hue == 361) {
          hue = 0;
        }
      } else if (mouseX > 50 && mouseX < 100 && mouseY > 0 && mouseY < 50) {
        saturation += 1;
        if (saturation == 101) {
          saturation = 0;
        }
      } else if (mouseX > 100 && mouseX < 150 && mouseY > 0 && mouseY < 50) {
        lightness += 1;
        if (lightness == 101) {
          lightness = 0;
        }
      }
    }
  }

  tint(hue, saturation, lightness);
  image(body, 25, 100);
  tint(180, 0, 100);
  image(swimsuit, swimsuitX, swimsuitY);
  image(hair1, hair1X, hair1Y);
  image(hair2, hair2X, hair2Y);
}

function keyPressed() {
  if (keyCode === 65) {
    hue -= 1;
    if (hue == -1) {
      hue = 360;
    }
  } else if (keyCode === 83) {
    saturation -= 1;
    if (saturation == -1) {
      saturation = 100;
    }
  } else if (keyCode === 68) {
    lightness -= 1;
    if (lightness == -1) {
      lightness = 100;
    }
  } else if (keyCode === 87) {
    saturation += 1;
    if (saturation == 101) {
      saturation = 0;
    }
  } else if (keyCode === 69) {
    lightness += 1;
    if (lightness == 101) {
      lightness = 0;
    }
  } else if (keyCode === 81) {
    hue += 1;
    if (hue == 361) {
      hue = 0;
    }
  }
}