
const promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve('Well done'), 1000);
});

console.log(promise);
setTimeout(() => console.log(promise), 1500);

promise.then(console.log);