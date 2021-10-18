
const animal = {
  eats: true
}

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

const rabbit = new Rabbit('Bugs');

console.log(rabbit.eats);

function Planet() {
  turns: true
}

const earth = new Planet();

console.log(earth.constructor);
earth.constructor.prototype.jumps = false;
console.log(earth.jumps);
