
let user = {
  name: 'John'
}

function wrap(target) {
  return new Proxy(target, {
    get(obj, prop) {
      if (!(prop in target)) throw new ReferenceError(`Property doesn't exist: ${prop}`);
      return Reflect.get(...arguments);
    }
  });
}

user = wrap(user);

console.log(user.name);
console.log(user.age);