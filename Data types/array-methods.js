
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

