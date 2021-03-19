function setup() {
    createCanvas(displayWidth, displayHeight).position(0, 0);
}

function draw() {
    ellipse(mouseX, mouseY, 6, 6);
    select('#elements').position(0, 0)
}