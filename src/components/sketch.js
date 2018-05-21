export default function sketch(p) {
  const particles = [];

  p.setup = function() {
    p.createCanvas(p.windowWidth, 650);
    for (let i = 0; i < 100; i++) {
      const P = new Particle(p);
      particles.push(P);
    }
  };

  p.draw = function() {
    const distance = 50;
    p.background(-1);
    for (let i = 0; i < particles.length; i++) {
      const Pn1 = particles[i];
      Pn1.display();
      Pn1.update();
      for (let j = i + 1; j < particles.length; j++) {
        const Pn2 = particles[j];
        Pn2.update();
        if (p.dist(Pn1.x, Pn1.y, Pn2.x, Pn2.y) < distance) {
          for (let k = j + 1; k < particles.length; k++) {
            const Pn3 = particles[k];
            if (p.dist(Pn3.x, Pn3.y, Pn2.x, Pn2.y) < distance) {
              p.stroke(255, 10);
              p.fill(Pn3.c, 95); // method to access the class property
              p.beginShape(p.TRIANGLES);
              p.vertex(Pn1.x, Pn1.y);
              p.vertex(Pn2.x, Pn2.y);
              p.vertex(Pn3.x, Pn3.y);
              p.endShape();
            }

            Pn3.update();
          }
        }
      }
    }
  };
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Particle {
  constructor(p) {
    this.x = random(0, p.width);
    this.y = random(0, p.height);
    this.r = random(1, 5);
    this.i = 1;
    this.j = random(0, 3);
    this.p = p;

    if (this.j === 0) {
      this.c = p.color('#05CDE5');
    }
    if (this.j === 1) {
      this.c = p.color('#FFB803');
    }
    if (this.j === 2) {
      this.c = p.color('#FF035B');
    }
    if (this.j === 3) {
      this.c = p.color('#3D3E3E');
    }
  }

  display = () => {
    this.p.push();
    this.p.noStroke();
    this.p.fill(this.c);
    this.p.ellipse(this.x, this.y, this.r, this.r);
    this.p.pop();
  };

  update = () => {
    this.x += this.j * 0.01;
    this.y += this.i * 0.01;
    if (this.y > this.p.height - this.r) this.i = -1;
    if (this.y < 0 + this.r) this.i = 1;
    if (this.x > this.p.width - this.r) this.j = -1;
    if (this.x < 0 + this.r) this.j = 1;
  };
}
