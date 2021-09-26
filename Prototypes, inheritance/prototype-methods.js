
const animal = {
  eats: true
}

const rabbit = Object.create(animal);

console.log(rabbit.eats);

console.log(Object.getPrototypeOf(rabbit));

Object.setPrototypeOf(rabbit, null);

console.log(Object.getPrototypeOf(rabbit));

const clone = Object.create(Object.getPrototypeOf(rabbit), Object.getOwnPropertyDescriptors(rabbit));

console.log(rabbit);
console.log(clone);
console.log(rabbit.eats);
console.log(clone.eats);