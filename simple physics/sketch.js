var ball

function setup() {
  createCanvas(400, 400)
  ball = new Ball(width / 2, height / 2, 50, 20)
}

function draw() {
  background(220)
  ball.gravity(0.1)
  ball.friction(0.02)
  ball.update()
  ball.edges()
  ball.display()
}

function mousePressed() {
  let pointer = new p5.Vector(mouseX, mouseY)
  if (pointer.dist(ball.s) < ball.r) {
    let force = new p5.Vector.sub(pointer, ball.s)
    force.normalize()
    force.mult(-100)
    ball.applyforce(force)
  }
}
