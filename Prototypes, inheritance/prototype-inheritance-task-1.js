
let head = {
  glasses: 1
};

let table = {
  __proto__: head,
  pen: 3
};

let bed = {
  __proto__: table,
  sheet: 1,
  pillow: 2
};

let pockets = {
  __proto__: bed,
  money: 2000
};

console.log(pockets.pen);
console.log(bed.glasses);

const start1 = Date.now();

for (let i = 0; i < 10000000000; i++) {
  const value = pockets.glasses;
}

const end1 = Date.now();

console.log(end1 - start1);

const start2 = Date.now();

for (let i = 0; i < 10000000000; i++) {
  const value = head.glasses;
}

const end2 = Date.now();

console.log(end2 - start2);