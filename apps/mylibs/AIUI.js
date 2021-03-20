class AIUI {
  constructor(x, y, ms) {
    this.s = new p5.Vector(x, y);
    this.v = new p5.Vector(0, 0);
    this.a = new p5.Vector(0, 0);
    this.maxspeed = ms;
    this.wandertheta = 0;
  }
  seek(target, force, wall) {
    this.maxforce = force;
    let desired = new p5.Vector.sub(target, this.s);
    let distance = desired.mag();
    desired.normalize();
    if (distance < 50) {
      desired.mult(map(distance, 0, 50, 0, this.maxspeed));
    } else {
      desired.mult(this.maxspeed);
    }
    if (wall == true) {
      if (this.s.x < 0) {
        this.s.x = width;
      }
      if (this.s.x > width) {
        this.s.x = 0;
      }
      if (this.s.y < 0) {
        this.s.y = height;
      }
      if (this.s.y > height) {
        this.s.y = 0;
      }
    }
    let steer = new p5.Vector.sub(desired, this.v);
    steer.limit(this.maxforce);
    this.a.add(steer);
    this.v.add(this.a);
    this.v.limit(this.maxspeed);
    this.s.add(this.v);
    this.a.mult(0);

  }
  aim(target, force) {
    this.maxforce = force;
    let desired = new p5.Vector.sub(target, this.s);
    let distance = desired.mag();
    desired.normalize();
    desired.mult(this.maxspeed);
    let steer = new p5.Vector.sub(desired, this.v);
    steer.limit(this.maxforce);
    this.a.add(steer);
    this.v.add(this.a);
    this.v.limit(this.maxspeed);
    this.a.mult(0);
  }
  display() {
    let r = 5;
    let theta = this.v.heading() + PI / 2;
    fill(175);
    stroke(0);
    applyMatrix();
    translate(this.s.x, this.s.y);
    rotate(theta);
    beginShape();
    vertex(0, -r * 2);
    vertex(-r, r * 2);
    vertex(r, r * 2);
    endShape(CLOSE);
    resetMatrix();
  }
  wander(change) {
    let wanderR = 25;         // Radius for our "wander circle"
    let wanderD = 80;         // Distance for our "wander circle"
    //let change = 0.3;
    this.wandertheta += random(-change, change);     // Randomly change wander theta
    this.circlepos = this.v.copy();
    this.circlepos.normalize();
    this.circlepos.mult(wanderD);
    this.circlepos.add(this.s);
    this.h = this.v.heading();
    let circleOffSet = new p5.Vector(wanderR * cos(this.wandertheta + this.h), wanderR * sin(this.wandertheta + this.h));
    return p5.Vector.add(this.circlepos, circleOffSet);
  }
}
