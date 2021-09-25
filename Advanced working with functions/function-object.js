
function sayHi() {
  console.log('Hi');
}

console.log(sayHi.name);

function displayFuncName(func) {
  console.log(func.name);
}

displayFuncName(function awesomeName() {
  console.log('Hello there');
});

function sum(a, b, ...rest) {
  return a + b + rest;
}

console.log(sum.length);

let sayName = function sayName(name) {
  if (name) {
    console.log(name);
  } else {
    sayName('user');
  }
}

const welcome = sayName;

sayName();
welcome();

sayName = null;

welcome();