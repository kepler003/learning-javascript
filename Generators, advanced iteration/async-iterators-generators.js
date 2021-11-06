
// const range = {
//   from: 1,
//   to: 5,

//   [Symbol.asyncIterator]() {
//     return {
//       current: this.from,
//       last: this.to,

//       async next() {
//         if (this.current <= this.last) {
//           await new Promise(resolve => setTimeout(resolve, 1000));
//           return {done: false, value: this.current++};
//         } else {
//           return {done: true};
//         }
//       }
//     };
//   }
// }

// async function iterate() {
//   for await (const value of range) {
//     console.log(value);
//   }
// }

// iterate();


// const range = {
//   from: 1,
//   to: 5,

//   *[Symbol.iterator]() {
//     for (let i = 0; i <= this.to; i++) {
//       yield i;
//     }
//   }
// }

// for (const value of range) console.log(value);


// async function* generateSequence(start, end) {
//   for (let i = start; i <= end; i++) {
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     yield i;
//   }
// }

// async function iterate() {
//   const generator = generateSequence(1, 5);
//   for await (const value of generator) console.log(value);
// }

// iterate();


// const range = {
//   from: 1,
//   to: 5,

//   async *[Symbol.asyncIterator]() {
//     for (let i = this.from; i <= this.to; i++) {
//       await new Promise(resolve => setTimeout(resolve, 1000));
//       yield i;
//     }
//   }
// }

// async function iterate() {
//   for await (const value of range) {
//     console.log(value);
//   }
// }

// iterate();


