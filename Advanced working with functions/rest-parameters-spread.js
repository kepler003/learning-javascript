
function argFunc() {
  return arguments.length;
}

console.log(argFunc('a', 'b', 'c', 4, 5, {
  name: 'Bartek'
}, undefined));