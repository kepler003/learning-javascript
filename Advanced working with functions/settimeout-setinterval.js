
function sayHi() {
  console.log('Hi');
}

// setTimeout(sayHi, 2000);

// const timer = setTimeout(() => console.log('Fire'), 5000);

// console.log(timer);

// setTimeout(() => clearTimeout(timer));

// const intervalTimer = setInterval(() => console.log('Hi'), 100);

// setTimeout(() => clearInterval(intervalTimer), 300);

let requestInterval = setTimeout(function sendRequest(delay = 100) {
  console.log(`Request has been sent! Waiting... (${delay}ms)`);

  delay = Math.floor(delay * 1.5);

  if (delay > 2500) {
    console.log(`Request failed! (${delay}ms)`);
    return;
  }

  requestInterval = setTimeout(sendRequest, delay, delay);
}, 500);

console.log('\n\n');

let requestInterval2 = setTimeout(function sendRequest(iteration = 0) {
  iteration++;

  console.log(`Trial number: ${iteration}`);

  if(iteration >= 42) {
    console.log(`Request failed! Number of trials: ${iteration}`)
    return;
  }

  requestInterval2 = setTimeout(sendRequest, 500, iteration);
}, 500);