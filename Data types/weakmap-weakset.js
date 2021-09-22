
const weakmap = new WeakMap();

const obj = {
  name: 'Bartek'
}

weakmap.set(obj, true);

console.log(weakmap.get(obj));

// weakmap.set(1, false); ERROR!

const weakSet = new WeakSet();

const bartek = { name: 'Bartek' }

weakSet.add(bartek);

console.log(weakSet.has(bartek));