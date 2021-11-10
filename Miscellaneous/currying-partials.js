
function curry(f) {
  return function(a) {
    return function(b) {
      return f(a, b);
    }
  }
}

function sum(a, b) {
  return a + b;
}

sum = curry(sum);

console.log(sum(1)(11));