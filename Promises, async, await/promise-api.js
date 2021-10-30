
const promise = Promise.all([
  new Promise(resolve => {
    setTimeout(() => resolve(10), 1000);
  }),
  new Promise(resolve => {
    setTimeout(() => resolve(1000), 3500);
  }),
  15
]);

promise.then(result => console.log(result));

const promises = [
  new Promise(resolve => resolve(10)),
  new Promise(resolve => resolve(100)),
  new Promise((resolve, reject) => reject('Error')),
  new Promise(resolve => resolve(1000))
];

const allSettle = Promise.allSettled(promises)
  .then(results => {
    results.forEach((result, num) => {
      if (result.status === 'fulfilled') {
        console.log(`${num}: ${result.value}`);
      }
      
      if(result.status === 'rejected') {
        console.log(`${num}: ${result.reason}`);
      }
    });
  });

Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error('Ups!')), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).then(console.log);

// Promise.any([
//   new Promise((resolve, reject) => setTimeout(() => reject(new Error('Ups!')), 1000)),
//   new Promise((resolve, reject) => setTimeout(() => reject(new Error('Oh no!')), 2000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(5000), 3000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(6000), 3000)),
// ]);
