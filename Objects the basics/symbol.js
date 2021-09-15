
const id = Symbol('id');

console.log(id.toString());
console.log(id.description);

const id2 = Symbol.for('id');
const id3 = Symbol.for('id');
console.log(id2 === id3);