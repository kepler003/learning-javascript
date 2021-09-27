
// class Animal {
//   constructor(name) {
//     this.name = name;
//     this.speed = 0;
//   }

//   run(speed = 10) {
//     this.speed = speed;
//     console.log(`${this.name} runs with speed ${this.speed}`);
//   }
  
//   stand() {
//     this.speed = 0;
//     console.log(`${this.name} stands still`);
//   }
// }

// class Rabbit extends Animal {
//   hide() {
//     this.speed = 0;
//     console.log(`${this.name} hides`);
//   }

//   stand() {
//     super.stand();
//     console.log(`${this.name} is invisible`);
//   }
// }

// const rabbit = new Rabbit('Bugs');

// rabbit.stand();


class Animal {
  constructor(name) {
    this.name = name;
    this.speed = 0;
  }

  run(speed = 10) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed}`);
  }
  
  stand() {
    this.speed = 0;
    console.log(`${this.name} stands still`);
  }
}

class Rabbit extends Animal {
  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
  }
}

const rabbit = new Rabbit('Bugs', 30);

console.log(rabbit.name);
console.log(rabbit.earLength);