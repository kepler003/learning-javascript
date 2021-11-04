
// function* generateSequence() {
//   yield 1;
//   yield 2;
//   return 3;
// }

// const generator = generateSequence();

// const one = generator.next();
// console.log(one);

// const two = generator.next();
// console.log(two);

// const three = generator.next();
// console.log(three);

// const five = generator.next();
// console.log(five);

// const six = generator.next();
// console.log(six);



function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = generateSequence();

// for (const value of generator) {
//   console.log(value);
// }

console.log([0, ...generator]);



const range = {
  from: 0,
  to: 4,

  *[Symbol.iterator]() {
    for (let i = this.from; i <= this.to; i++) {
      yield i;
    }
  }
}

for (const value of range) {
  console.log(value);
}



function* generateNumbers(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

function* generateCodeNumbers() {
  yield* generateNumbers(48, 57);
  yield* generateNumbers(65, 90);
  yield* generateNumbers(97, 122);
}

let stringCode = '';
for (const value of generateCodeNumbers()) {
  stringCode += String.fromCharCode(value);
}
console.log(stringCode);



function* askQuestion() {
  const question = yield '2 + 2 = ?';
  console.log(question);
}

const gen = askQuestion();

const question = gen.next().value;
console.log(question);

const question2 = gen.next().value;
console.log(question2);
gen.next(4);
