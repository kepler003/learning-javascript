
const animal = {
  eats: true
}

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

const rabbit = new Rabbit('Bunny');

console.log(rabbit.eats);
console.log(rabbit);
console.log(rabbit.__proto__);

console.log(Rabbit.prototype);