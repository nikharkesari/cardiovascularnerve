let bubbles = [];
var menu;
var val=false;
function setup() {
    background(255);
    createCanvas(displayWidth, displayHeight);
    menu = select('#menu');
    menu.position(100, 100);
    menu.mousePressed(start);
}

function mousePressed() {
    for (let i = bubbles.length - 1; i >= 0; i--) {
        if (bubbles[i].contains(mouseX, mouseY)) {
            bubbles.splice(i, 1);
        }
    }
}
function deviceShaken() {
    bubbles.splice(0, bubbles.length);
}

function draw() {
    if (val) {
        background(0);
        for (let i = 0; i < bubbles.length; i++) {
            bubbles[i].move();
            bubbles[i].show();
        }
    }
}

class Bubble {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.brightness = 0;
    }
    contains(px, py) {
        let d = dist(px, py, this.x, this.y);
        if (d < this.r) {
            return true;
        } else {
            return false;
        }
    }

    move() {
        this.x = this.x + random(-3, 3);
        this.y = this.y + random(-3, 3);
    }

    show() {
        stroke(255);
        strokeWeight(1);
        fill(this.brightness, 125);
        ellipse(this.x, this.y, this.r * 2);
    }
}

function touchMoved() {
    let x = mouseX;
    let y = mouseY;
    let r = random(5, 50);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
}

function start() {
    menu.html('')
    val=true;
    fullscreen(val);
}
