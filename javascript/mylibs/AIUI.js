class AIUI {
  constructor(x, y, ms) {
    this.s = new p5.Vector(x, y);
    this.v = new p5.Vector(0, 0);
    this.a = new p5.Vector(0, 0);
    this.maxspeed = ms;
  }
  seek(target, force) {
    this.maxforce = force;
    let desired = new p5.Vector.sub(target, this.s);
    let distance = desired.mag();
    desired.normalize();
    if (distance < 50) {
      desired.mult(map(distance, 0, 50, 0, this.maxspeed));
    } else {
      desired.mult(this.maxspeed);
    }
    let steer = new p5.Vector.sub(desired, this.v);
    steer.limit(this.maxforce);
    this.a.add(steer);
    this.v.add(this.a);
    this.v.limit(this.maxspeed);
    this.s.add(this.v);
    this.a.mult(0);
  }
  aim(target,force){
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
}
