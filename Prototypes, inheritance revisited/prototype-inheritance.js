
const animal = {
  eats: true
}

const rabbit = {
  jumps: true,
  __proto__: animal
}

console.log(Object.keys(rabbit));

// for (const prop in rabbit) {
//   console.log(prop);
// }

for (const prop in rabbit) {
  if (rabbit.hasOwnProperty(prop)) {
    console.log(prop);
  }
}