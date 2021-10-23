
class Animal {
  constructor(name) {
    this.name = name;
    this.speed = 0;
  }

  run(speed) {
    this.speed = speed;
    console.log(`${this.name} is running with speed ${this.speed}.`);
  }
  
  stop() {
    this.speed = 0;
    console.log(`${this.name} has stopped.`);
  }
}

const animal = new Animal('Super animal');

animal.run(15);
animal.stop();

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides`);
  }

  stop() {
    super.stop();
    this.hide();
  }
}

const rabbit = new Rabbit('Buggs');

rabbit.stop();

class Bunny extends Animal {
  constructor(name,earlength) {
    super(name);
    this.earLength = earlength;
  }
}

const bunny = new Bunny('Spike', 20);

console.log(bunny.earLength);