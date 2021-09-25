
function nested() {
  let count = 0;
  
  return function() {
    return ++count;
  }
}

const counter = nested();

console.log(counter());
console.log(counter());
console.log(counter());

function testScope() {
  return name;
}

// console.log(name); ERROR
// console.log(testScope()); ERROR

const name = 'Bartek';

console.log(name);
console.log(testScope());