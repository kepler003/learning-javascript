
// async function f() {
//   return 1;
// }

// const promise = f();
// promise.then(result => console.log(result));



async function f() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
  });

  const result = await promise;
  console.log(result);

  return result;
}

const promise = f();
promise.then(result => console.log(result));

class Thenable {
  constructor(num) {
    this.num = num;
  }

  then(resolve, reject) {
    setTimeout(() => resolve(this.num * 2), 2000);
  }
}

async function thenable() {
  const thenableObj = await new Thenable(10);
  console.log(thenableObj);
}
thenable();
