function windowResized() {
    resiveCanvas(windowWidth, windowHeight)
}
function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
}
a = 0
function draw() {
    noStroke();
    r = map(noise(a), 0, 1, 0, 255)
    g = map(noise(a + 10), 0, 1, 0, 255)
    b = map(noise(a + 20), 0, 1, 0, 255)
    fill(r, g, b, 20);
    a += 0.01
    ellipse(randomGaussian(mouseX, 20), randomGaussian(mouseY, 20), 30, 30);
}