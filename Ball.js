class Ball
{
  constructor(x,y,r,m){
    this.s = new p5.Vector(x, y)
    this.v = new p5.Vector(0, 0)
    this.a = new p5.Vector(0, 0)
    this.m = m
    this.r = r
  }
  applyforce(f) {
    let f2 = p5.Vector.div(f, this.m)
    this.a.add(f2)
  }
  update() {
    this.v.add(this.a)
    this.s.add(this.v)
    this.a.mult(0)
  }
  edges(){
    if (this.s.y > height - this.r) {
      this.v.y *= -1
      this.v.mult(0.8)
      this.s.y = height - this.r
    }
    if (this.s.x > width - this.r) {
      this.v.x *= -1
      this.v.mult(0.8)
      this.s.x = width - this.r
    }
    if (this.s.x < 0 + this.r) {
      this.v.x *= -1
      this.v.mult(0.8)
      this.s.x = 0 + this.r
    }
  }
  gravity(g){
    let g2=new p5.Vector(0,g)
    this.v.add(g2)
  }
  friction(f){
    let f2=new p5.Vector(this.v.x,this.v.y)
    f2.normalize()
    f2.limit(-f)
    this.a.add(f2)
  }
  display(){
    ellipseMode(CENTER)
    ellipse(this.s.x,this.s.y,2*this.r,2*this.r)
  }
}
  
    
  
