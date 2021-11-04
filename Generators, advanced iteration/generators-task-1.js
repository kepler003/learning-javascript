
function* pseudoRandom(seed) {
  while(true) {
    seed = seed * 16807 % 2147483647;
    yield seed;
  }
}

let generator = pseudoRandom(1);

console.log(generator.next().value); // 16807
console.log(generator.next().value); // 282475249
console.log(generator.next().value); // 1622650073