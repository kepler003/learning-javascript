
let fruits = ['apples', 'bananas', 'oranges'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (const fruit of fruits) {
  console.log(fruit);
}

const name = 'Bartek';

for (const char of name) {
  console.log(char);
}

const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
console.log(letters);

letters.length = 2;
console.log(letters);

letters.length = 0;
console.log(letters);

letters.length = 5;
console.log(letters);

const emptyArr = [undefined, undefined, undefined, undefined, undefined];
console.log(emptyArr);