console.log(2 * 2);
console.log(2 ** 3);
console.log(100 ** (1/2));

console.log('1' + 2);
console.log('2' - 1);
console.log('2' + 1);

console.log(+true);
console.log(+'');
// console.log(true+); SyntaxError
console.log(+'2' + 2);
console.log('2' + 2);

let a = 1;
let b = 20;
let c;
let d = 100 + (c = a + b);
console.log(d);

let x = 10;
let y = 100;
let z;
console.log(z = x + y);
console.log(z);

let k = (1 + 2, 10 + 20);
console.log(k);