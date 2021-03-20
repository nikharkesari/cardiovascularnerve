var ai;
a = 0;
flag = false;
function windowResized() {
    resiveCanvas(windowWidth, windowHeight)
}
function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    select('#autodraw').mousePressed(autodraw)
}
function draw() {
    noStroke();
    r = map(noise(a), 0, 1, 0, 255)
    g = map(noise(a + 10), 0, 1, 0, 255)
    b = map(noise(a + 20), 0, 1, 0, 255)
    fill(r, g, b, 20);
    a += 0.01

    if (flag == true) {
        ai.seek(ai.wander(), 1);
        for (i = 0; i < 5; i++) {
            ellipse(randomGaussian(ai.s.x, 20), randomGaussian(ai.s.y, 20), 30, 30);
        }
    }

    if (mouseIsPressed)
        for (i = 0; i < 5; i++) {
            ellipse(randomGaussian(mouseX, 20), randomGaussian(mouseY, 20), 30, 30);
        }
}

function autodraw() {
    ai = new AIUI(windowWidth / 2, windowHeight / 2, 10);
    flag = !flag;
}