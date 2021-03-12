var r, c, x;
var button;
var slider;
function setup() {
    createCanvas(1300, 600);
    x = 25;
    r = new Array(height / x);
    c = new Array(width / x);
    button = createButton().mousePressed(reset);
    slider = createSlider(1, 50, 5)
    for (i = 0; i < c.length; i++) {

        c[i] = new Array(height / x);
    }
    for (i = 0; i < c.length; i++) {
        for (j = 0; j < r.length; j++) {
            c[i][j] = new AIUI(i * x, j * x, 20);
        }
    }
}

function draw() {
    background(220);
    let target = new p5.Vector(mouseX, mouseY);
    let force = 1;
    for (i = 0; i < c.length; i++) {
        for (j = 0; j < r.length; j++) {
            c[i][j].maxspeed = slider.value()
            //ellipse(c[i][j].s.x,c[i][j].s.y,5);
            c[i][j].aim(target, force);
            c[i][j].display();
        }
    }
    if (mouseIsPressed) {
        for (i = 0; i < c.length; i++) {
            for (j = 0; j < r.length; j++) {
                c[i][j].seek(target, force);
            }
        }
    }
}

function reset() {
    for (i = 0; i < c.length; i++) {
        for (j = 0; j < r.length; j++) {
            c[i][j].s.x = i * x;
            c[i][j].s.y = j * x;
        }
    }
    //slider.value(5);
}


