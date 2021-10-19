
const animal = {
  eats: true
}

const rabbit = Object.create(animal);

// console.log(rabbit.eats);
console.log(Object.getPrototypeOf(rabbit) === animal);
console.log(Object.getPrototypeOf(Object.getPrototypeOf(rabbit)) === Object.prototype);

Object.setPrototypeOf(rabbit, {});

// console.log(Object.getPrototypeOf(animal) === Object.prototype);