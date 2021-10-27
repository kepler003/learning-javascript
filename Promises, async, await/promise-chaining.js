
new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);
}).then(result => {
  return result * 2;
}).then(result => {
  // let newResult;
  // setTimeout(() => newResult = result * 10, 1000);
  // return newResult;
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result * 10), 1000);
  })  
}).then(result => {
  console.log(result);
});