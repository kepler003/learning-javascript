
let array = [1, 2, 3];

array = new Proxy(array, {
  get(target, prop) {
    // if (prop >= 0) return Reflect.get(...arguments);
    // return Reflect.get(target, target.length + +prop);
    if (prop < 0) prop = +prop + target.length;
    return Reflect.get(...arguments);
  }
});

console.log(array[-1]);
console.log(array[-2]);
console.log(array[-3]);