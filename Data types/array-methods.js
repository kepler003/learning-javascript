
const numbers = [1, 2, 3, 4, 5, 6];

console.log(numbers);

numbers.splice(0, 1);

console.log(numbers);

numbers.splice(1, 0, "number");

console.log(numbers);

numbers.splice(-1, 1);

console.log(numbers);

const deleted = numbers.splice(-1, 1);

console.log(numbers);
console.log(deleted);

numbers.splice(-1, 0, ...deleted);

console.log(numbers);

const randomNumbers = [10, 8, 9, 10, 5, 5, 1, 2, 1];
const multipliedNumbers = randomNumbers.reduce((accumulator, item) => accumulator * item, 1);
console.log(multipliedNumbers);

const reducedNumbers = randomNumbers.reduceRight((accumulator, item) => {
  console.log(accumulator);
  return accumulator - item;
}, 0);
console.log(reducedNumbers);