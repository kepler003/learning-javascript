
const now = new Date();

console.log(now);

console.log(new Date(15000));
console.log(new Date(24 * 3600 * 1000 * 1000000));

const time = new Date(2019, 5, 11);
console.log(time);

console.log(time.getMilliseconds());

console.log(time.getHours());
console.log(time.getUTCHours());

console.log(new Date().getTimezoneOffset());

let date = new Date(2016, 1, 28);
date.setDate(date.getDate() + 2);

console.log( date ); // 1 Mar 2016

function measure(callback) {
  const start = new Date();
  callback();
  const end = new Date();
  return end - start;
}

console.log(measure(function() {
  for (let i = 0; i < 100000000; i++) {
    i * i ** (1/2);
  }
}))